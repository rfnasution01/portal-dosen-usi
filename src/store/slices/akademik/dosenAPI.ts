import { api, Res } from '@/store/api'
import {
  GetDosenDetailType,
  GetDosenType,
} from '@/store/type/akademik/dosenType'

export const DosenEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getDosen: builder.query<Res<GetDosenType[]>, { id: string }>({
      query: ({ id }) => ({
        url: `dosen`,
        method: 'GET',
        params: {
          id: id,
        },
      }),
      providesTags: ['dan-lain-lain'],
    }),
    getDosenDetail: builder.query<Res<GetDosenDetailType>, { id: string }>({
      query: ({ id }) => ({
        url: `dosen_detail`,
        method: 'GET',
        params: {
          id: id,
        },
      }),
      providesTags: ['dan-lain-lain'],
    }),
  }),
})

export const { useGetDosenQuery, useGetDosenDetailQuery } = DosenEndpoints
