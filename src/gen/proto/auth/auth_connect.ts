// @generated by protoc-gen-connect-es v1.4.0 with parameter "target=ts"
// @generated from file proto/auth/auth.proto (package auth, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { LoginReply, LoginRequest } from "./auth_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service auth.Auth
 */
export const Auth = {
  typeName: "auth.Auth",
  methods: {
    /**
     * @generated from rpc auth.Auth.Login
     */
    login: {
      name: "Login",
      I: LoginRequest,
      O: LoginReply,
      kind: MethodKind.Unary,
    },
  }
} as const;

