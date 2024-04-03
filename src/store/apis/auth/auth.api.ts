import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BASE_URL, URL_ROUTES } from "@/constants";
import { AuthData, UserInfo } from "@/types";
import { prepareHeaders } from "@/utils";

import { AuthResponse, PasswordBase, PasswordChange } from "./auth.types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders,
  }),
  tagTypes: ["UserInfo"],
  endpoints: builder => ({
    getMe: builder.query<UserInfo, void>({
      query: () => `${URL_ROUTES.AUTH}/me`,
      providesTags: ["UserInfo"],
    }),

    login: builder.mutation<AuthResponse, AuthData>({
      query: userData => ({
        url: `${URL_ROUTES.AUTH}/login`,
        method: "POST",
        body: userData,
      }),
    }),

    register: builder.mutation<AuthResponse, AuthData>({
      query: userData => ({
        url: `${URL_ROUTES.AUTH}/register`,
        method: "POST",
        body: userData,
      }),
    }),

    googleSignIn: builder.mutation<AuthResponse, string>({
      query: (idToken: string) => ({
        url: `${URL_ROUTES.AUTH}/google`,
        method: "POST",
        body: { token: idToken },
      }),
    }),

    setPassword: builder.mutation<void, PasswordBase>({
      query: passwordData => ({
        url: `${URL_ROUTES.AUTH}/password/set`,
        method: "POST",
        body: passwordData,
      }),
    }),

    changePassword: builder.mutation<void, PasswordChange>({
      query: passwordData => ({
        url: `${URL_ROUTES.AUTH}/password/change`,
        method: "POST",
        body: passwordData,
      }),
    }),
  }),
});

export const {
  useGetMeQuery,
  useLazyGetMeQuery,
  useLoginMutation,
  useRegisterMutation,
  useGoogleSignInMutation,
  useSetPasswordMutation,
  useChangePasswordMutation,
} = authApi;
