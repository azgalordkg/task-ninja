import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BASE_URL } from "@/constants";
import { AuthBase } from "@/types";
import { prepareHeaders } from "@/utils";

export const usersApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders,
  }),
  endpoints: builder => ({
    editUser: builder.mutation<void, Partial<AuthBase>>({
      query: data => ({
        url: "/users",
        method: "PUT",
        body: data,
      }),
    }),
    deleteUser: builder.mutation<void, void>({
      query: () => ({
        url: "/users",
        method: "DELETE",
      }),
    }),
  }),
});

export const { useDeleteUserMutation, useEditUserMutation } = usersApi;
