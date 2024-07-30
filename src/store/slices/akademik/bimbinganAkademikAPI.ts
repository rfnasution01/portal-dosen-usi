import { api, Res } from '@/store/api'
import {
  PostBimbinganAkademik,
  PostPersetujuanKRS,
  ResBimbinganAkademik,
  ResBimbinganAkademikLayanan,
  ResPengajuanKRS,
  ResPengajuanKRSDetail,
} from '@/store/type/akademik/bimbinganAkademikType'

export const BimbinganEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getBimbingan: builder.query<
      Res<ResBimbinganAkademik[]>,
      { angkatan?: string }
    >({
      query: ({ angkatan }) => ({
        url: `bimbingan_akademik`,
        method: 'GET',
        params: {
          angkatan: angkatan,
        },
      }),
      providesTags: ['bimbingan'],
    }),
    getBimbinganLayanan: builder.query<
      Res<ResBimbinganAkademikLayanan>,
      { id_tahun_akademik?: string; id_mahasiswa?: string }
    >({
      query: ({ id_mahasiswa, id_tahun_akademik }) => ({
        url: `bimbingan_akademik_layanan`,
        method: 'GET',
        params: {
          id_mahasiswa: id_mahasiswa,
          id_tahun_akademik: id_tahun_akademik,
        },
      }),
      providesTags: ['bimbingan'],
    }),
    postBimbinganAkademik: builder.mutation<
      void,
      {
        body: PostBimbinganAkademik
      }
    >({
      query: ({ body }) => ({
        url: `bimbingan_akademik_layanan`,
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['bimbingan'],
    }),
    getPengajuanKRS: builder.query<
      Res<ResPengajuanKRS[]>,
      { id_tahun_akademik?: string; angkatan?: string }
    >({
      query: ({ angkatan, id_tahun_akademik }) => ({
        url: `pengajuan_krs`,
        method: 'GET',
        params: {
          angkatan: angkatan,
          id_tahun_akademik: id_tahun_akademik,
        },
      }),
      providesTags: ['krs'],
    }),
    getPengajuanKRSDetail: builder.query<
      Res<ResPengajuanKRSDetail>,
      { id_tahun_akademik?: string; id_mahasiswa?: string }
    >({
      query: ({ id_mahasiswa, id_tahun_akademik }) => ({
        url: `pengajuan_krs_detail`,
        method: 'GET',
        params: {
          id_mahasiswa: id_mahasiswa,
          id_tahun_akademik: id_tahun_akademik,
        },
      }),
      providesTags: ['krs'],
    }),
    postPersetujuanKRS: builder.mutation<
      void,
      {
        body: PostPersetujuanKRS
      }
    >({
      query: ({ body }) => ({
        url: `persetujuan_krs`,
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['krs'],
    }),
  }),
})

export const {
  useGetBimbinganQuery,
  useGetBimbinganLayananQuery,
  useGetPengajuanKRSDetailQuery,
  useGetPengajuanKRSQuery,
  usePostBimbinganAkademikMutation,
  usePostPersetujuanKRSMutation,
} = BimbinganEndpoints
