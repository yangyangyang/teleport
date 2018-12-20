/*
Copyright 2018 Gravitational, Inc.

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

package services

import (
	"fmt"

	"github.com/gravitational/teleport/lib/utils"

	"gopkg.in/check.v1"
)

type UserTokenSuite struct{}

var _ = fmt.Printf
var _ = check.Suite(&UserTokenSuite{})

func (s *UserTokenSuite) SetUpSuite(c *check.C) {
	utils.InitLoggerForTests()
}

func (s *UserTokenSuite) TearDownSuite(c *check.C) {}
func (s *UserTokenSuite) SetUpTest(c *check.C)     {}
func (s *UserTokenSuite) TearDownTest(c *check.C)  {}

func (s *UserTokenSuite) TestUserTokenMarshal(c *check.C) {
	token, err := NewUserToken(UserTokenSpecV2{
		Token: "fake-token-123",
	})
	c.Assert(err, check.IsNil)

	bytes, err := GetUserTokenMarshaler().Marshal(token)
	c.Assert(err, check.IsNil)

	fmt.Printf("--> bytes: %v\n", string(bytes))
}

func (s *UserTokenSuite) TestUserTokenUnmarshal(c *check.C) {
	bytes := []byte(`{"kind":"token","version":"v2","metadata":{"name":"meta-token"},"spec":{"token":"fake-token-123","type":"user"}}`)

	token, err := GetUserTokenMarshaler().Unmarshal(bytes)
	c.Assert(err, check.IsNil)

	fmt.Printf("--> token: %v\n", token)
}

/*
upport for extended versions.
type TokenMarshaler interface {
	Marshal(c Token, opts ...MarshalOption) ([]byte, error)
	Unmarshal(bytes []byte) (Token, error)
}

func (s *RoleSuite) TestTokenMarshal(c *C) {
	GetTo

	type Spec struct {
		RoleSpecV2
		A string `json:"a"`
	}
	type ExtendedRole struct {
		Spec Spec `json:"spec"`
	}
	in := `{"kind": "role", "metadata": {"name": "name1"}, "spec": {"a": "b"}}`
	var role ExtendedRole
	err := utils.UnmarshalWithSchema(GetRoleSchema(V2, `"a": {"type": "string"}`), &role, []byte(in))
	c.Assert(err, IsNil)
	c.Assert(role.Spec.A, Equals, "b")

	// this is a bad type
	in = `{"kind": "role", "metadata": {"name": "name1"}, "spec": {"a": 12}}`
	err = utils.UnmarshalWithSchema(GetRoleSchema(V2, `"a": {"type": "string"}`), &role, []byte(in))
	c.Assert(err, NotNil)
}
*/
