import { api, Res } from '@/store/api'
import { PostKomposisiBody } from '@/store/schema/akadamik/jadwalKuliahSchema'
import {
  GetBobotNilaiType,
  GetJadwalDetailType,
  GetJadwalMahasiswaType,
  GetJadwalMingguType,
  GetJadwalNilaiType,
  GetJadwalSemesterType,
  GetKomposisiNilai,
  PostJadwalKuliahType,
} from '@/store/type/akademik/jadwalKuliahType'

export const JadwalKuliahEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getJadwalSemester: builder.query<Res<GetJadwalSemesterType[]>, void>({
      query: () => ({
        url: `jadwal_semester_ini`,
        method: 'GET',
      }),
    }),
    getJadwalMinggu: builder.query<Res<GetJadwalMingguType[]>, void>({
      query: () => ({
        url: `jadwal_minggu_ini`,
        method: 'GET',
      }),
    }),
    getJadwalMahasiswa: builder.query<
      Res<GetJadwalMahasiswaType[]>,
      { id_kelas_makul: string }
    >({
      query: ({ id_kelas_makul }) => ({
        url: `jadwal_mahasiswa`,
        method: 'GET',
        params: {
          id_kelas_makul: id_kelas_makul,
        },
      }),
    }),
    getJadwalDetail: builder.query<
      Res<GetJadwalDetailType>,
      { id_kelas_makul: string }
    >({
      query: ({ id_kelas_makul }) => ({
        url: `jadwal_detail`,
        method: 'GET',
        params: {
          id_kelas_makul: id_kelas_makul,
        },
      }),
      providesTags: ['komposisi', 'nilai'],
    }),
    getBobotNilai: builder.query<Res<GetBobotNilaiType[]>, void>({
      query: () => ({
        url: `bobot_nilai`,
        method: 'GET',
      }),
    }),
    getKomposisiNilai: builder.query<
      Res<GetKomposisiNilai[]>,
      { id_kelas_makul: string }
    >({
      query: ({ id_kelas_makul }) => ({
        url: `komposisi_nilai`,
        method: 'GET',
        params: {
          id_kelas_makul: id_kelas_makul,
        },
      }),
      providesTags: ['komposisi'],
    }),
    getJadwalNilai: builder.query<
      Res<GetJadwalNilaiType>,
      { id_kelas_makul: string }
    >({
      query: ({ id_kelas_makul }) => ({
        url: `jadwal_mahasiswa_nilai`,
        method: 'GET',
        params: {
          id_kelas_makul: id_kelas_makul,
        },
      }),
      providesTags: ['komposisi', 'nilai'],
    }),
    updateKomposisiNilai: builder.mutation<void, { body: PostKomposisiBody }>({
      query: ({ body }) => ({
        url: `komposisi_nilai`,
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['komposisi'],
    }),
    updateNilai: builder.mutation<void, { body: PostJadwalKuliahType }>({
      query: ({ body }) => ({
        url: `jadwal_kuliah_mhs_nilai`,
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['nilai'],
    }),
    postAjukanNilai: builder.mutation<void, { body: { id_jadwal: string } }>({
      query: ({ body }) => ({
        url: `jadwal_kuliah_mhs_nilai_ajukan`,
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['nilai'],
    }),
  }),
})

export const {
  useGetJadwalSemesterQuery,
  useGetJadwalMingguQuery,
  useGetJadwalMahasiswaQuery,
  useGetJadwalDetailQuery,
  useGetBobotNilaiQuery,
  useGetKomposisiNilaiQuery,
  useGetJadwalNilaiQuery,
  useUpdateKomposisiNilaiMutation,
  useUpdateNilaiMutation,
  usePostAjukanNilaiMutation,
} = JadwalKuliahEndpoints
