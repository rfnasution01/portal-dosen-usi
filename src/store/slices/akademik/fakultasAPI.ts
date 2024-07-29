import { api, Res } from '@/store/api'
import { GetFakultasType } from '@/store/type/akademik/fakultasType'

export const FakultasEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getFakultas: builder.query<Res<GetFakultasType[]>, void>({
      query: () => ({
        url: `fakultas`,
        method: 'GET',
      }),
      providesTags: ['dan-lain-lain'],
    }),
    getFakultasDetail: builder.query<Res<GetFakultasType>, { id: string }>({
      query: ({ id }) => ({
        url: `fakultas/detail`,
        method: 'GET',
        params: {
          id: id,
        },
      }),
      providesTags: ['dan-lain-lain'],
    }),
  }),
})

export const { useGetFakultasQuery, useGetFakultasDetailQuery } =
  FakultasEndpoints
