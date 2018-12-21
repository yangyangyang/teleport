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

package auth

import (
	"context"

	"github.com/gravitational/teleport/lib/services"

	"github.com/gravitational/trace"
)

func (s *AuthServer) GetSignupToken(token string) (*services.SignupToken, error) {
	userToken, err := s.GetUserToken(context.Background(), token)
	if err != nil {
		return nil, trace.Wrap(err)
	}

	user, err := s.GetUser(userToken.GetName())
	if err != nil {
		return nil, trace.Wrap(err)
	}

	userV2, ok := user.(*services.UserV2)
	if !ok {
		return trace.BadParameter("UserV2 requred")
	}

	return &services.SignupToken{
		Token:     userToken.GetToken(),
		User:      userV2.V1(),
		Expires:   userToken.Expiry(),
		OTPKey:    userToken.GetKey(),
		OTPQRCode: userToken.GetQRCode(),
	}, nil
}
