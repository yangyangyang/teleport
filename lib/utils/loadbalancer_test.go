/*
Copyright 2017 Gravitational, Inc.

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
	"context"
	"fmt"
	"net"
	"net/http"
	"net/http/httptest"
	"net/url"

	"github.com/gravitational/trace"

	"gopkg.in/check.v1"
)

type LBSuite struct {
}

var _ = check.Suite(&LBSuite{})

func (s *LBSuite) SetUpSuite(c *check.C) {
	InitLoggerForTests()
}

func (s *LBSuite) TestSingleBackendLB(c *check.C) {
	backend1 := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "backend 1")
	}))
	defer backend1.Close()

	ports, err := GetFreeTCPPorts(1)
	c.Assert(err, check.IsNil)

	frontend, err := localAddr(ports[0])
	c.Assert(err, check.IsNil)

	lb, err := NewLoadBalancer(context.TODO(), frontend, urlToNetAddr(c, backend1.URL))
	c.Assert(err, check.IsNil)
	err = lb.Listen()
	c.Assert(err, check.IsNil)
	go lb.Serve()
	defer lb.Close()

	out, err := Roundtrip(frontend.String())
	c.Assert(err, check.IsNil)
	c.Assert(out, check.Equals, "backend 1")
}

func (s *LBSuite) TestTwoBackendsLB(c *check.C) {
	backend1 := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "backend 1")
	}))
	defer backend1.Close()

	backend2 := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "backend 2")
	}))
	defer backend2.Close()

	backend1Addr, backend2Addr := urlToNetAddr(c, backend1.URL), urlToNetAddr(c, backend2.URL)

	ports, err := GetFreeTCPPorts(1)
	c.Assert(err, check.IsNil)

	frontend, err := localAddr(ports[0])
	c.Assert(err, check.IsNil)

	lb, err := NewLoadBalancer(context.TODO(), frontend)
	c.Assert(err, check.IsNil)
	err = lb.Listen()
	c.Assert(err, check.IsNil)
	go lb.Serve()
	defer lb.Close()

	// no endpoints
	_, err = Roundtrip(frontend.String())
	c.Assert(err, check.NotNil)

	lb.AddBackend(backend1Addr)
	out, err := Roundtrip(frontend.String())
	c.Assert(err, check.IsNil)
	c.Assert(out, check.Equals, "backend 1")

	lb.AddBackend(backend2Addr)
	out, err = Roundtrip(frontend.String())
	c.Assert(err, check.IsNil)
	c.Assert(out, check.Equals, "backend 2")
}

func (s *LBSuite) TestOneFailingBackend(c *check.C) {
	backend1 := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "backend 1")
	}))
	defer backend1.Close()

	backend2 := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "backend 2")
	}))
	backend2.Close()

	backend1Addr, backend2Addr := urlToNetAddr(c, backend1.URL), urlToNetAddr(c, backend2.URL)

	ports, err := GetFreeTCPPorts(1)
	c.Assert(err, check.IsNil)

	frontend, err := localAddr(ports[0])
	c.Assert(err, check.IsNil)

	lb, err := NewLoadBalancer(context.TODO(), frontend)
	c.Assert(err, check.IsNil)
	err = lb.Listen()
	c.Assert(err, check.IsNil)
	go lb.Serve()
	defer lb.Close()

	lb.AddBackend(backend1Addr)
	lb.AddBackend(backend2Addr)

	out, err := Roundtrip(frontend.String())
	c.Assert(err, check.IsNil)
	c.Assert(out, check.Equals, "backend 1")

	out, err = Roundtrip(frontend.String())
	c.Assert(err, check.NotNil)

	out, err = Roundtrip(frontend.String())
	c.Assert(err, check.IsNil)
	c.Assert(out, check.Equals, "backend 1")
}

func (s *LBSuite) TestClose(c *check.C) {
	backend1 := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "backend 1")
	}))
	defer backend1.Close()

	ports, err := GetFreeTCPPorts(1)
	c.Assert(err, check.IsNil)

	frontend, err := localAddr(ports[0])
	c.Assert(err, check.IsNil)

	lb, err := NewLoadBalancer(context.TODO(), frontend, urlToNetAddr(c, backend1.URL))
	c.Assert(err, check.IsNil)
	err = lb.Listen()
	c.Assert(err, check.IsNil)
	go lb.Serve()
	defer lb.Close()

	out, err := Roundtrip(frontend.String())
	c.Assert(err, check.IsNil)
	c.Assert(out, check.Equals, "backend 1")

	lb.Close()
	// second close works
	lb.Close()

	lb.Wait()

	// requests are failing
	out, err = Roundtrip(frontend.String())
	c.Assert(err, check.NotNil, check.Commentf("output: %v, err: %v", string(out), err))
}

func (s *LBSuite) TestDropConnections(c *check.C) {
	backend1 := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "backend 1")
	}))
	defer backend1.Close()

	ports, err := GetFreeTCPPorts(1)
	c.Assert(err, check.IsNil)

	frontend, err := localAddr(ports[0])
	c.Assert(err, check.IsNil)

	backendAddr := urlToNetAddr(c, backend1.URL)
	lb, err := NewLoadBalancer(context.TODO(), frontend, backendAddr)
	c.Assert(err, check.IsNil)
	err = lb.Listen()
	c.Assert(err, check.IsNil)
	go lb.Serve()
	defer lb.Close()

	conn, err := net.Dial("tcp", frontend.String())
	c.Assert(err, check.IsNil)
	defer conn.Close()

	out, err := RoundtripWithConn(conn)
	c.Assert(err, check.IsNil)
	c.Assert(out, check.Equals, "backend 1")

	// to make sure multiple requests work on the same wire
	out, err = RoundtripWithConn(conn)
	c.Assert(err, check.IsNil)
	c.Assert(out, check.Equals, "backend 1")

	// removing backend results in dropped connection to this backend
	lb.RemoveBackend(backendAddr)
	out, err = RoundtripWithConn(conn)
	c.Assert(err, check.NotNil)
}

func urlToNetAddr(c *check.C, u string) NetAddr {
	parsed, err := url.Parse(u)
	c.Assert(err, check.IsNil)

	netAddr, err := ParseAddr(parsed.Host)
	c.Assert(err, check.IsNil)

	return *netAddr
}

func localURL(port string) string {
	return fmt.Sprintf("http://127.0.0.1:%v", port)
}

func localAddr(port string) (NetAddr, error) {
	netAddr, err := ParseAddr(fmt.Sprintf("127.0.0.1:%v", port))
	if err != nil {
		return NetAddr{}, trace.Wrap(err)
	}

	return *netAddr, nil
}
