import { api, Res } from '@/store/api'
import {
  GetPengumumanType,
  ParamsPengumumanType,
} from '@/store/type/akademik/pengumumanType'

export const PengumumanEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getPengumuman: builder.query<
      Res<GetPengumumanType[]>,
      ParamsPengumumanType
    >({
      query: ({ page_number, page_size, search }) => ({
        url: `pengumuman`,
        method: 'GET',
        params: {
          page_number: page_number,
          page_size: page_size,
          search: search,
        },
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
