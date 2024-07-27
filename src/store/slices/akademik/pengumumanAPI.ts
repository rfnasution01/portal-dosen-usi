import { api, Res } from '@/store/api'
import { GetPengumumanType } from '@/store/type/akademik/pengumumanType'

export const PengumumanEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getPengumuman: builder.query<Res<GetPengumumanType[]>, void>({
      query: () => ({
        url: `pengumuman`,
        method: 'GET',
      }),
    }),
    getPengumumanDetail: builder.query<Res<GetPengumumanType>, { id: string }>({
      query: ({ id }) => ({
        url: `pengumuman/detail`,
        method: 'GET',
        params: {
          id: id,
        },
      }),
    }),
  }),
})

export const { useGetPengumumanQuery, useGetPengumumanDetailQuery } =
  PengumumanEndpoints
