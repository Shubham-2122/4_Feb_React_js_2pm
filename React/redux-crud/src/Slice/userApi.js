import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),

  tagTypes: ["Users"], // ✅ add this

  endpoints: (builder) => ({

    // GET USERS
    getUsers: builder.query({
      query: () => "users",
      providesTags: ["Users"], // ✅ VERY IMPORTANT
    }),

    // CREATE USER
    createUser: builder.mutation({
      query: (data) => ({
        url: "users",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Users"],
    }),

    // DELETE USER
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"], // ✅ now this works
    }),

  }),
});

export const {
  useGetUsersQuery,
  useCreateUserMutation,
  useDeleteUserMutation,
} = userApi;