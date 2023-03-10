import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
export const api = createApi({
    reducerPath: `trunkrApi`,
    baseQuery: fetchBaseQuery({ baseUrl: ` http://localhost:3000`}),
    endpoints: (builder) => ({
        //add types for the return of the endpoint
        registerUser: builder.mutation({
            query: (payload) => ({
                url: `register`,
                method: `POST`,
                body: payload
            })
        }),
        loginUser: builder.mutation({
            query: (payload) => ({
                url: `signin`,
                method: `POST`,
                body: payload
            })
        })
    })
})

//auto generated hooks based on the defined endpoints
export const { useRegisterUserMutation, useLoginUserMutation } = api
