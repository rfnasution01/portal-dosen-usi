import { api, Res } from '@/store/api'
import {
  GetPimpinanDetailType,
  GetPimpinanType,
} from '@/store/type/akademik/pimpinanType'

export const PimpinanEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getPimpinan: builder.query<Res<GetPimpinanType[]>, void>({
      query: () => ({
        url: `pimpinan`,
        method: 'GET',
      }),
      providesTags: ['dan-lain-lain'],
    }),
    getPimpinanDetail: builder.query<
      Res<GetPimpinanDetailType>,
      { id: string }
    >({
      query: ({ id }) => ({
        url: `pimpinan/detail`,
        method: 'GET',
        params: {
          id: id,
        },
      }),
      providesTags: ['dan-lain-lain'],
    }),
  }),
})

export const { useGetPimpinanQuery, useGetPimpinanDetailQuery } =
  PimpinanEndpoints
