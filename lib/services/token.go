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

package services

import (
	"encoding/json"
	"fmt"
	"time"

	"github.com/gravitational/teleport/lib/defaults"
	"github.com/gravitational/teleport/lib/utils"

	"github.com/gravitational/trace"
	"github.com/jonboulle/clockwork"
)

//type Token interface {
//	// Resource provides common resource properties.
//	Resource
//
//	// CheckAndSetDefaults checks and set default values for missing fields.
//	CheckAndSetDefaults() error
//}

// GetName returns the name of the Token resource.
func (c *TokenV2) GetName() string {
	return c.Metadata.Name
}

// SetName sets the name of the Token resource.
func (c *TokenV2) SetName(e string) {
	c.Metadata.Name = e
}

// Expires returns object expiry setting
func (c *TokenV2) Expiry() time.Time {
	return c.Metadata.Expiry()
}

// SetExpiry sets expiry time for the object
func (c *TokenV2) SetExpiry(expires time.Time) {
	c.Metadata.SetExpiry(expires)
}

// SetTTL sets Expires header using realtime clock
func (c *TokenV2) SetTTL(clock clockwork.Clock, ttl time.Duration) {
	c.Metadata.SetTTL(clock, ttl)
}

// GetMetadata returns object metadata
func (c *TokenV2) GetMetadata() Metadata {
	return c.Metadata
}

// CheckAndSetDefaults checks validity of all parameters and sets defaults.
func (c *TokenV2) CheckAndSetDefaults() error {
	// make sure we have defaults for all metadata fields
	err := c.Metadata.CheckAndSetDefaults()
	if err != nil {
		return trace.Wrap(err)
	}

	return nil
}

// String represents a human readable version of static provisioning tokens.
func (c *TokenV2) String() string {
	return fmt.Sprintf("Token(%v)", c.Spec.Token)
}

// TokenSpecSchemaTemplate is a template for Token schema.
const TokenSpecSchemaTemplate = `{
  "type": "object",
  "additionalProperties": false,
  "properties": {
	"static_tokens": {
		"type": "array",
		"items": {
			"type": "object",
			"additionalProperties": false,
			"properties": {
				"expires": {
					"type": "string"
				},
				"roles": {
					"type": "array",
					"items": {
						"type": "string"
					}
				},
				"token": {
					"type": "string"
				}
			}
		}
	}%v
  }
}`

// GetTokenSchema returns the schema with optionally injected
// schema for extensions.
func GetTokenSchema(extensionSchema string) string {
	var staticTokensSchema string
	if staticTokensSchema == "" {
		staticTokensSchema = fmt.Sprintf(TokenSpecSchemaTemplate, "")
	} else {
		staticTokensSchema = fmt.Sprintf(TokenSpecSchemaTemplate, ","+extensionSchema)
	}
	return fmt.Sprintf(V2SchemaTemplate, MetadataSchema, staticTokensSchema, DefaultDefinitions)
}

// TokenMarshaler implements marshal/unmarshal of Token implementations
// mostly adds support for extended versions.
type TokenMarshaler interface {
	Marshal(c Token, opts ...MarshalOption) ([]byte, error)
	Unmarshal(bytes []byte) (Token, error)
}

var staticTokensMarshaler TokenMarshaler = &TeleportTokenMarshaler{}

// SetTokenMarshaler sets the marshaler.
func SetTokenMarshaler(m TokenMarshaler) {
	marshalerMutex.Lock()
	defer marshalerMutex.Unlock()
	staticTokensMarshaler = m
}

// GetTokenMarshaler gets the marshaler.
func GetTokenMarshaler() TokenMarshaler {
	marshalerMutex.Lock()
	defer marshalerMutex.Unlock()
	return staticTokensMarshaler
}

// TeleportTokenMarshaler is used to marshal and unmarshal Token.
type TeleportTokenMarshaler struct{}

// Unmarshal unmarshals Token from JSON.
func (t *TeleportTokenMarshaler) Unmarshal(bytes []byte) (Token, error) {
	var staticTokens TokenV2

	if len(bytes) == 0 {
		return nil, trace.BadParameter("missing resource data")
	}

	err := utils.UnmarshalWithSchema(GetTokenSchema(""), &staticTokens, bytes)
	if err != nil {
		return nil, trace.BadParameter(err.Error())
	}

	err = staticTokens.CheckAndSetDefaults()
	if err != nil {
		return nil, trace.Wrap(err)
	}

	return &staticTokens, nil
}

// Marshal marshals Token to JSON.
func (t *TeleportTokenMarshaler) Marshal(c Token, opts ...MarshalOption) ([]byte, error) {
	return json.Marshal(c)
}
