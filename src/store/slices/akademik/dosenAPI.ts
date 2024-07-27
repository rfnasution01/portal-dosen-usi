import { api, Res } from '@/store/api'
import {
  GetDosenDetailType,
  GetDosenType,
} from '@/store/type/akademik/dosenType'

export const DosenEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getDosen: builder.query<Res<GetDosenType[]>, void>({
      query: () => ({
        url: `dosen`,
        method: 'GET',
      }),
    }),
    getDosenDetail: builder.query<Res<GetDosenDetailType>, { id: string }>({
      query: ({ id }) => ({
        url: `dosen/detail`,
        method: 'GET',
        params: {
          id: id,
        },
      }),
    }),
  }),
})

export const { useGetDosenQuery, useGetDosenDetailQuery } = DosenEndpoints
