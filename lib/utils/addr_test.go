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
	"net"
	"testing"

	"gopkg.in/check.v1"
)

func TestAddrStruct(t *testing.T) { check.TestingT(t) }

type AddrTestSuite struct {
}

var _ = check.Suite(&AddrTestSuite{})

func (s *AddrTestSuite) TestParseHostPort(c *check.C) {
	// success
	addr, err := ParseHostPortAddr("localhost:22", -1)
	c.Assert(err, check.IsNil)
	c.Assert(addr.AddrNetwork, check.Equals, "tcp")
	c.Assert(addr.Addr, check.Equals, "localhost:22")

	// scheme + existing port
	addr, err = ParseHostPortAddr("https://localhost", 443)
	c.Assert(err, check.IsNil)
	c.Assert(addr.AddrNetwork, check.Equals, "https")
	c.Assert(addr.Addr, check.Equals, "localhost:443")

	// success
	addr, err = ParseHostPortAddr("localhost", 1111)
	c.Assert(err, check.IsNil)
	c.Assert(addr.AddrNetwork, check.Equals, "tcp")
	c.Assert(addr.Addr, check.Equals, "localhost:1111")

	// missing port
	addr, err = ParseHostPortAddr("localhost", -1)
	c.Assert(err, check.NotNil)
	c.Assert(addr, check.IsNil)

	// scheme + missing port
	_, err = ParseHostPortAddr("https://localhost", -1)
	c.Assert(err, check.NotNil)
}

func (s *AddrTestSuite) TestEmpty(c *check.C) {
	var a NetAddr
	c.Assert(a.IsEmpty(), check.Equals, true)
}

func (s *AddrTestSuite) TestParseAddr(c *check.C) {
	var tests = []struct {
		inAddr         string
		outError       bool
		outAddrNetwork string
		outAddr        string
		outPath        string
		outString      string
		outIsEmpty     bool
		outHost        string
		outPort        int
	}{
		// Unix socket.
		{
			inAddr:         "/path",
			outError:       false,
			outAddrNetwork: "unix",
			outAddr:        "",
			outPath:        "/path",
			outString:      "/path",
			outIsEmpty:     false,
			outHost:        "",
			outPort:        0,
		},
		// Host.
		{
			inAddr:         "example.com",
			outError:       false,
			outAddrNetwork: "tcp",
			outAddr:        "example.com",
			outPath:        "",
			outString:      "example.com",
			outIsEmpty:     false,
			outHost:        "example.com",
			outPort:        0,
		},

		// IPv4.
		{
			inAddr:         "10.10.10.10:49870",
			outError:       false,
			outAddrNetwork: "tcp",
			outAddr:        "10.10.10.10:49870",
			outPath:        "",
			outString:      "10.10.10.10:49870",
			outIsEmpty:     false,
			outHost:        "10.10.10.10",
			outPort:        49870,
		},
		// IPv6.
		{
			inAddr:         "[::1]:49870",
			outError:       false,
			outAddrNetwork: "tcp",
			outAddr:        "[::1]:49870",
			outPath:        "",
			outString:      "[::1]:49870",
			outIsEmpty:     false,
			outHost:        "::1",
			outPort:        49870,
		},
		// HTTP.
		{
			inAddr:         "http://www.example.com:8080/path",
			outError:       false,
			outAddrNetwork: "http",
			outAddr:        "www.example.com:8080",
			outPath:        "/path",
			outString:      "www.example.com:8080",
			outIsEmpty:     false,
			outHost:        "www.example.com",
			outPort:        8080,
		},
	}

	for _, tt := range tests {
		addr, err := ParseAddr(tt.inAddr)
		if tt.outError {
			c.Assert(err, check.NotNil)
			continue
		} else {
			c.Assert(err, check.IsNil)
			c.Assert(addr, check.NotNil)
			c.Assert(addr.IsEmpty(), check.Equals, tt.outIsEmpty)
		}

		c.Assert(addr.Addr, check.Equals, tt.outAddr)
		c.Assert(addr.Path, check.Equals, tt.outPath)
		c.Assert(addr.String(), check.Equals, tt.outString)
		c.Assert(addr.Host(), check.Equals, tt.outHost)
		c.Assert(addr.Port(0), check.Equals, tt.outPort)
	}
}

func (s *AddrTestSuite) TestReplaceLocalhost(c *check.C) {
	var result string
	result = ReplaceLocalhost("10.10.1.1", "192.168.1.100:399")
	c.Assert(result, check.Equals, "10.10.1.1")
	result = ReplaceLocalhost("10.10.1.1:22", "192.168.1.100:399")
	c.Assert(result, check.Equals, "10.10.1.1:22")
	result = ReplaceLocalhost("127.0.0.1:22", "192.168.1.100:399")
	c.Assert(result, check.Equals, "192.168.1.100:22")
	result = ReplaceLocalhost("0.0.0.0:22", "192.168.1.100:399")
	c.Assert(result, check.Equals, "192.168.1.100:22")
}

func (s *AddrTestSuite) TestLocalAddrs(c *check.C) {
	testCases := []struct {
		in       string
		expected bool
	}{
		{in: "127.0.0.1:5000", expected: true},
		{in: "localhost:5000", expected: true},
		{in: "127.0.0.2:5000", expected: true},
		{in: "tcp://127.0.0.2:5000", expected: true},
		{in: "tcp://10.0.0.3:5000", expected: false},
		{in: "tcp://hostname:5000", expected: false},
	}
	for i, testCase := range testCases {
		addr, err := ParseAddr(testCase.in)
		c.Assert(err, check.IsNil)
		c.Assert(addr.IsLocal(), check.Equals, testCase.expected,
			check.Commentf("test case %v, %v should be local(%v)", i, testCase.in, testCase.expected))
	}
}

func (s *AddrTestSuite) TestLoopbackAddrs(c *check.C) {
	testCases := []struct {
		in       string
		expected bool
	}{
		{in: "localhost", expected: true},
		{in: "localhost:5000", expected: true},
		{in: "127.0.0.2:4003", expected: true},
		{in: "", expected: false},
		{in: "bad-host.example.com", expected: false},
		{in: "bad-host.example.com:443", expected: false},
	}
	for i, testCase := range testCases {
		c.Assert(IsLoopback(testCase.in), check.Equals, testCase.expected,
			check.Commentf("test case %v, %v should be loopback(%v)", i, testCase.in, testCase.expected))
	}
}

func (s *AddrTestSuite) TestGuessesIPAddress(c *check.C) {
	var testCases = []struct {
		addrs    []net.Addr
		expected net.IP
		comment  string
	}{
		{
			addrs: []net.Addr{
				&net.IPAddr{IP: net.ParseIP("10.0.100.80")},
				&net.IPAddr{IP: net.ParseIP("192.168.1.80")},
				&net.IPAddr{IP: net.ParseIP("172.16.0.0")},
				&net.IPAddr{IP: net.ParseIP("172.31.255.255")},
			},
			expected: net.ParseIP("10.0.100.80"),
			comment:  "prefers 10.0.0.0/8",
		},
		{
			addrs: []net.Addr{
				&net.IPAddr{IP: net.ParseIP("192.168.1.80")},
				&net.IPAddr{IP: net.ParseIP("172.31.12.1")},
			},
			expected: net.ParseIP("192.168.1.80"),
			comment:  "prefers 192.168.0.0/16",
		},
		{
			addrs: []net.Addr{
				&net.IPAddr{IP: net.ParseIP("192.167.255.255")},
				&net.IPAddr{IP: net.ParseIP("172.15.0.0")},
				&net.IPAddr{IP: net.ParseIP("172.32.1.1")},
				&net.IPAddr{IP: net.ParseIP("172.30.1.1")},
			},
			expected: net.ParseIP("172.30.1.1"),
			comment:  "identifies private IP by netmask",
		},
		{
			addrs: []net.Addr{
				&net.IPAddr{IP: net.ParseIP("172.1.1.1")},
				&net.IPAddr{IP: net.ParseIP("172.30.0.1")},
				&net.IPAddr{IP: net.ParseIP("52.35.21.180")},
			},
			expected: net.ParseIP("172.30.0.1"),
			comment:  "prefers 172.16.0.0/12",
		},
		{
			addrs: []net.Addr{
				&net.IPAddr{IP: net.ParseIP("192.168.12.1")},
				&net.IPAddr{IP: net.ParseIP("192.168.12.2")},
				&net.IPAddr{IP: net.ParseIP("52.35.21.180")},
			},
			expected: net.ParseIP("192.168.12.2"),
			comment:  "prefers last",
		},
		{
			addrs: []net.Addr{
				&net.IPAddr{IP: net.ParseIP("::1")},
				&net.IPAddr{IP: net.ParseIP("fe80::af:6dff:fefd:150f")},
				&net.IPAddr{IP: net.ParseIP("52.35.21.180")},
			},
			expected: net.ParseIP("52.35.21.180"),
			comment:  "ignores IPv6",
		},
		{
			addrs: []net.Addr{
				&net.IPAddr{IP: net.ParseIP("::1")},
				&net.IPAddr{IP: net.ParseIP("fe80::af:6dff:fefd:150f")},
			},
			expected: net.ParseIP("127.0.0.1"),
			comment:  "falls back to ipv4 loopback",
		},
	}
	for _, testCase := range testCases {
		ip := guessHostIP(testCase.addrs)
		c.Assert(ip, check.DeepEquals, testCase.expected, check.Commentf(testCase.comment))
	}
}
