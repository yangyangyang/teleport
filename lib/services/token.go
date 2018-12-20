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
	"encoding/json"
	"fmt"
	"time"

	"github.com/gravitational/teleport"
	"github.com/gravitational/teleport/lib/defaults"
	"github.com/gravitational/teleport/lib/utils"

	"github.com/gravitational/trace"
	"github.com/jonboulle/clockwork"
)

type UserToken interface {
	Resource

	GetToken() string
	SetToken(string)

	GetRoles() (teleport.Roles, error)
	SetRoles(teleport.Roles)

	GetUser() string
	SetUser(string)

	GetKey() string
	SetKey(string)

	GetQRCode() []byte
	SetQRCode([]byte)

	// CheckAndSetDefaults checks and set default values for missing fields.
	CheckAndSetDefaults() error
}

// NewUserToken TODO: add ttl
func NewUserToken(spec UserTokenSpecV2) (UserToken, error) {
	t := UserTokenV2{
		Kind:    KindToken,
		Version: V2,
		Metadata: Metadata{
			Name:      MetaNameToken,
			Namespace: defaults.Namespace,
		},
		Spec: spec,
	}
	if err := t.CheckAndSetDefaults(); err != nil {
		return nil, trace.Wrap(err)
	}

	return &t, nil
}

// GetName returns the name of the Token resource.
func (c *UserTokenV2) GetName() string {
	return c.Metadata.Name
}

// SetName sets the name of the Token resource.
func (c *UserTokenV2) SetName(e string) {
	c.Metadata.Name = e
}

// Expires returns object expiry setting
func (c *UserTokenV2) Expiry() time.Time {
	return c.Metadata.Expiry()
}

// SetExpiry sets expiry time for the object
func (c *UserTokenV2) SetExpiry(expires time.Time) {
	c.Metadata.SetExpiry(expires)
}

// SetTTL sets Expires header using realtime clock
func (c *UserTokenV2) SetTTL(clock clockwork.Clock, ttl time.Duration) {
	c.Metadata.SetTTL(clock, ttl)
}

// GetMetadata returns object metadata
func (c *UserTokenV2) GetMetadata() Metadata {
	return c.Metadata
}

// GetResourceID returns resource ID
func (c *UserTokenV2) GetResourceID() int64 {
	return c.Metadata.ID
}

// SetResourceID sets resource ID
func (c *UserTokenV2) SetResourceID(id int64) {
	c.Metadata.ID = id
}

func (c *UserTokenV2) GetToken() string {
	return c.Spec.Token
}

func (c *UserTokenV2) SetToken(token string) {
	c.Spec.Token = token
}

func (c *UserTokenV2) GetRoles() (teleport.Roles, error) {
	return teleport.NewRoles(c.Spec.Roles)
}

func (c *UserTokenV2) SetRoles(roles teleport.Roles) {
	c.Spec.Roles = roles.StringSlice()
}

func (c *UserTokenV2) GetUser() string {
	return c.Spec.User
}

func (c *UserTokenV2) SetUser(user string) {
	c.Spec.User = user
}

func (c *UserTokenV2) GetKey() string {
	return c.Spec.Key
}

func (c *UserTokenV2) SetKey(key string) {
	c.Spec.Key = key
}

func (c *UserTokenV2) GetQRCode() []byte {
	return c.Spec.QRCode
}

func (c *UserTokenV2) SetQRCode(qrCode []byte) {
	c.Spec.QRCode = qrCode
}

// CheckAndSetDefaults checks validity of all parameters and sets defaults.
func (c *UserTokenV2) CheckAndSetDefaults() error {
	// Make sure we have defaults for all metadata fields.
	err := c.Metadata.CheckAndSetDefaults()
	if err != nil {
		return trace.Wrap(err)
	}

	if c.Spec.Token == "" {
		return trace.BadParameter("token is required")
	}

	return nil
}

// TokenSpecSchemaTemplate is a template for Token schema.
const TokenSpecSchemaTemplate = `{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "token": {
      "type": "string"
    },
    "roles": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "user": {
      "type": "string"
    },
    "key": {
      "type": "string"
    },
    "qr_code": {
      "type": "string"
    }
  }%v
}`

// GetTokenSchema returns the schema with optionally injected
// schema for extensions.
func GetTokenSchema(extensionSchema string) string {
	var tokenSchema string
	if tokenSchema == "" {
		tokenSchema = fmt.Sprintf(TokenSpecSchemaTemplate, "")
	} else {
		tokenSchema = fmt.Sprintf(TokenSpecSchemaTemplate, ","+extensionSchema)
	}
	return fmt.Sprintf(V2SchemaTemplate, MetadataSchema, tokenSchema, DefaultDefinitions)
}

// UserTokenMarshaler implements marshal/unmarshal of Token implementations
// mostly adds support for extended versions.
type UserTokenMarshaler interface {
	Marshal(c UserToken, opts ...MarshalOption) ([]byte, error)
	Unmarshal(bytes []byte) (UserToken, error)
}

var userTokenMarshaler UserTokenMarshaler = &TeleportUserTokenMarshaler{}

// SetUserTokenMarshaler sets the marshaler.
func SetUserTokenMarshaler(m UserTokenMarshaler) {
	marshalerMutex.Lock()
	defer marshalerMutex.Unlock()
	userTokenMarshaler = m
}

// GetUserTokenMarshaler gets the marshaler.
func GetUserTokenMarshaler() UserTokenMarshaler {
	marshalerMutex.Lock()
	defer marshalerMutex.Unlock()
	return userTokenMarshaler
}

// TeleportTokenMarshaler is used to marshal and unmarshal Token.
type TeleportUserTokenMarshaler struct{}

// Unmarshal unmarshals Token from JSON.
func (t *TeleportUserTokenMarshaler) Unmarshal(bytes []byte) (UserToken, error) {
	var token UserTokenV2

	if len(bytes) == 0 {
		return nil, trace.BadParameter("missing resource data")
	}

	err := utils.UnmarshalWithSchema(GetTokenSchema(""), &token, bytes)
	if err != nil {
		return nil, trace.BadParameter(err.Error())
	}

	err = token.CheckAndSetDefaults()
	if err != nil {
		return nil, trace.Wrap(err)
	}

	return &token, nil
}

// Marshal marshals Token to JSON.
func (t *TeleportUserTokenMarshaler) Marshal(c UserToken, opts ...MarshalOption) ([]byte, error) {
	return json.Marshal(c)
}
