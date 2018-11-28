/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

package utils

import (
	//"fmt"
	"net"
	//"net/url"
	"strconv"
	"strings"

	"github.com/gravitational/trace"
	"github.com/sirupsen/logrus"
)

// NetAddr is network address that includes network, address, network (if tcp),
// path (if unix), and (optionally) the raw address.
type NetAddr struct {
	addr    net.Addr
	network string

	host string

	port string

	// Raw is the raw un-resolved address before any parsing and DNS resolution.
	Raw string `json:"raw,omitempty"`
}

func NewNetAddr(network string, host string, port string) *NetAddr {
	return &NetAddr{
		network: network,
		host:    host,
		port:    port,
	}
}

// ParseAddr parses a addr string and creates a *NetAddr.
func ParseAddr(addr string) (*NetAddr, error) {
	if addr == "" {
		return nil, trace.BadParameter("addr empty")
	}

	host, port, err := net.SplitHostPort(addr)
	if err != nil {
		return &NetAddr{
			network: "tcp",
			host:    addr,
		}, nil
	}
	return &NetAddr{
		network: "tcp",
		host:    host,
		port:    port,
	}, nil
}

// FromAddr returns NetAddr from a net.Addr.
func FromAddr(addr net.Addr) NetAddr {
	netAddr, _ := ParseAddr(addr.String())

	return NetAddr{
		network: addr.Network(),
		host:    netAddr.host,
		port:    netAddr.port,
	}
}

// ParseHostPortAddr takes strings like "host:port" and returns *NetAddr or
// an error. If defaultPort is -1 it expects the hostport string to have it.
func ParseHostPortAddr(addr string, defaultPort int) (*NetAddr, error) {
	netAddr, err := ParseAddr(addr)
	if err != nil {
		return nil, trace.Wrap(err)
	}
	// port is required but not set
	if defaultPort == -1 && netAddr.port == "" {
		return nil, trace.BadParameter("missing port in address '%v'", addr)
	}
	if netAddr.port == "" {
		netAddr.port = strconv.Itoa(defaultPort)
	}
	return netAddr, nil
}

func (a *NetAddr) Host() string {
	return a.host
}

func (a *NetAddr) Port(defaultPort int) int {
	if a.port == "" {
		return defaultPort
	}
	port, err := strconv.Atoi(a.port)
	if err != nil {
		return defaultPort
	}
	return port
}

func (a *NetAddr) HostPort(defaultPort int) string {
	return net.JoinHostPort(a.Host(), strconv.Itoa(a.Port(defaultPort)))
}

func (a *NetAddr) Address() string {
	if a.port != "" {
		return net.JoinHostPort(a.host, a.port)
	}
	return a.host
}

func (a *NetAddr) String() string {
	return a.Address()
}

// Network returns the scheme for this network address.
func (a *NetAddr) Network() string {
	return a.network
}

// Equals returns true if address is equal to other.
func (a *NetAddr) Equals(other NetAddr) bool {
	return a.host == other.host && a.port == other.port && a.network == other.network
}

//// String returns address without network.
//func (a *NetAddr) String() string {
//	if a.Addr != "" {
//		return a.Addr
//	}
//	return a.Path
//}

// IsLocal returns true if this is a local address.
func (a *NetAddr) IsLocal() bool {
	//host, _, err := net.SplitHostPort(a.Addr)
	//if err != nil {
	//	return false
	//}
	return IsLocalhost(a.host)
}

// IsLoopback returns true if this is a loopback address.
func (a *NetAddr) IsLoopback() bool {
	return IsLoopback(a.host)
}

// IsEmpty returns true if address is empty.
func (a *NetAddr) IsEmpty() bool {
	//return a.Addr == "" && a.AddrNetwork == "" && a.Path == ""
	return a.network == "" && a.host == "" && a.port == ""
}

// DialAddrFromListenAddr returns dial address from listen address.
func DialAddrFromListenAddr(listenAddr NetAddr) NetAddr {
	if listenAddr.IsEmpty() {
		return listenAddr
	}
	return NetAddr{host: ReplaceLocalhost(listenAddr.host, "127.0.0.1")}
}

// ReplaceLocalhost checks if a given address is link-local (like 0.0.0.0 or
// 127.0.0.1) and replaces it with the IP taken from replaceWith, preserving
// the original port.
//
// Both addresses need to be in hostport format. The function returns the
// original value if it encounters any problems with parsing.
func ReplaceLocalhost(addr string, replaceWith string) string {
	host, port, err := net.SplitHostPort(addr)
	if err != nil {
		return addr
	}
	if IsLocalhost(host) {
		host, _, err = net.SplitHostPort(replaceWith)
		if err != nil {
			return addr
		}
		addr = net.JoinHostPort(host, port)
	}
	return addr
}

// IsLocalhost returns true if this is a local hostname or IP.
func IsLocalhost(host string) bool {
	if host == "localhost" {
		return true
	}
	ip := net.ParseIP(host)
	return ip.IsLoopback() || ip.IsUnspecified()
}

// IsLoopback returns true if a given hostname resolves to local
// host's loopback interface.
func IsLoopback(host string) bool {
	if strings.Contains(host, ":") {
		var err error
		host, _, err = net.SplitHostPort(host)
		if err != nil {
			return false
		}
	}
	ips, err := net.LookupIP(host)
	if err != nil {
		return false
	}
	for _, ip := range ips {
		if ip.IsLoopback() {
			return true
		}
	}
	return false
}

// isIPv6 returns true if the net.IP is a IPv6 address.
func isIPv6(ip net.IP) bool {
	return ip != nil && strings.Contains(ip.String(), ":")
}

// GuessIP tries to guess an IP address this machine is reachable at on the
// internal network, always picking IPv4 from the internal address space
//
// If no internal IPs are found, it returns 127.0.0.1 but it never returns
// an address from the public IP space
func GuessHostIP() (ip net.IP, err error) {
	ifaces, err := net.Interfaces()
	if err != nil {
		return nil, trace.Wrap(err)
	}
	adrs := make([]net.Addr, 0)
	for _, iface := range ifaces {
		ifadrs, err := iface.Addrs()
		if err != nil {
			logrus.Warn(err)
		} else {
			adrs = append(adrs, ifadrs...)
		}
	}
	return guessHostIP(adrs), nil
}

func guessHostIP(addrs []net.Addr) (ip net.IP) {
	// collect the list of all IPv4s
	var ips []net.IP
	for _, addr := range addrs {
		var ipAddr net.IP
		a, ok := addr.(*net.IPAddr)
		if ok {
			ipAddr = a.IP
		} else {
			in, ok := addr.(*net.IPNet)
			if ok {
				ipAddr = in.IP
			} else {
				continue
			}
		}
		if ipAddr.To4() == nil || ipAddr.IsLoopback() || ipAddr.IsMulticast() {
			continue
		}
		ips = append(ips, ipAddr)
	}

	for i := range ips {
		first := &net.IPNet{IP: net.IPv4(10, 0, 0, 0), Mask: net.CIDRMask(8, 32)}
		second := &net.IPNet{IP: net.IPv4(192, 168, 0, 0), Mask: net.CIDRMask(16, 32)}
		third := &net.IPNet{IP: net.IPv4(172, 16, 0, 0), Mask: net.CIDRMask(12, 32)}

		// our first pick would be "10.0.0.0/8"
		if first.Contains(ips[i]) {
			ip = ips[i]
			break
			// our 2nd pick would be "192.168.0.0/16"
		} else if second.Contains(ips[i]) {
			ip = ips[i]
			// our 3rd pick would be "172.16.0.0/12"
		} else if third.Contains(ips[i]) && !second.Contains(ip) {
			ip = ips[i]
		}
	}
	if ip == nil {
		if len(ips) > 0 {
			return ips[0]
		}
		// fallback to loopback
		ip = net.IPv4(127, 0, 0, 1)
	}
	return ip
}

//func WithBrackets(addr string) string {
//	return fmt.Sprintf("[%v]", addr)
//}
//
//func StripBrackets(addr string) string {
//	if !strings.HasPrefix(addr, "[") || !strings.HasSuffix(addr, "]") {
//		return addr
//	}
//	return addr[1 : len(addr)-1]
//}
