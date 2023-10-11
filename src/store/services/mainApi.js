import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const prepareHeaders = (headers) => {
    headers.set('Authorization', 'sample_token1234');
    headers.set('Content-Type', 'application/json');
  };

export const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://167.86.81.154:8018',prepareHeaders }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (user) => ({
        url:"/login",
        method:"post",
        body:{
                "username":user.username,
                "password":user.password
        }
      }),
    }),
    getCampus: builder.mutation({
      query: (instution_id) => ({
        url:"/list_plant",
        method:"post",
        body:{
              "institution_id":instution_id
        }
      }),
    }),
    getUsers: builder.mutation({
      query: (instution_id,staff_id) => ({
        url:"/list_staff",
        method:"post",
        body:{
              "institution_id":instution_id,
              "staff_id": staff_id
        }
      }),
    }),
    getAssets: builder.mutation({
      query: (instution_id,asset_id) => ({
        url:"/list_asset",
        method:"post",
        body:{
              "institution_id":instution_id,
              "asset_id": asset_id
        }
      }),
    }),
    getDevices:builder.query({
      query: () => ({
        url:"/list_device",
        method:"get",
        
      }),
    }),
}),
})

export const {useLoginMutation,useGetDevicesQuery,useGetCampusMutation,useGetUsersMutation,useGetAssetsMutation} = mainApi