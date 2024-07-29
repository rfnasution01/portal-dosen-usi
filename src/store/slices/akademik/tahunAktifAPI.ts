import { api, Res } from '@/store/api'
import {
  GetTahunAkktifType,
  PostTahunAktifType,
} from '@/store/type/akademik/tahunAktifType'

export const TahunAktifEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getTahunAktif: builder.query<Res<GetTahunAkktifType>, void>({
      query: () => ({
        url: `data_aktif`,
        method: 'GET',
      }),
      providesTags: ['akademik-tahun-aktif'],
    }),
    updateTahunAktif: builder.mutation<void, { body: PostTahunAktifType }>({
      query: ({ body }) => ({
        url: `data_aktif`,
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['akademik-tahun-aktif', 'mahasiswa', 'nilai'],
    }),
  }),
})

export const { useGetTahunAktifQuery, useUpdateTahunAktifMutation } =
  TahunAktifEndpoints
