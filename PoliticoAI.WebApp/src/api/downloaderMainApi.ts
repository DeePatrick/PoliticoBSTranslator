import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { type CurrentUserData } from "./types";
import { baseApiUrl } from "../constants";

// Define a service using a base URL and expected endpoints
export const downloaderMainApi = createApi({
  reducerPath: "downloaderMainApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseApiUrl,
    prepareHeaders(headers) {
      return headers;
    },
    credentials: "include",
  }),
  tagTypes: ["CurrentUser", "Dictionary", "Folders"],
  endpoints: (builder) => ({
    getCurrentUser: builder.query<CurrentUserData | null, void>({
      query: () => ({ url: "Main/GetCurrentUser", credentials: "include" }),
      providesTags: ["CurrentUser" as const],
    }),
    getDictionary: builder.query<Record<string, string>, void>({
      query: () => ({ url: "Main/GetDictionary", credentials: "include" }),
      providesTags: ["Dictionary" as const],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCurrentUserQuery, useGetDictionaryQuery } =
  downloaderMainApi;
