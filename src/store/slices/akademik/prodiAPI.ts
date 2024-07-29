import { api, Res } from '@/store/api'
import {
  GetProdiDetailType,
  GetProdiType,
} from '@/store/type/akademik/prodiType'

export const ProdiEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getProdi: builder.query<Res<GetProdiType[]>, void>({
      query: () => ({
        url: `prodi`,
        method: 'GET',
      }),
      providesTags: ['dan-lain-lain'],
    }),
    getProdiDetail: builder.query<Res<GetProdiDetailType>, { id: string }>({
      query: ({ id }) => ({
        url: `prodi/detail`,
        method: 'GET',
        params: {
          id: id,
        },
      }),
      providesTags: ['dan-lain-lain'],
    }),
  }),
})

export const { useGetProdiQuery, useGetProdiDetailQuery } = ProdiEndpoints
