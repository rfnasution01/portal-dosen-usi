import { api, Res } from '@/store/api'
import {
  GetBobotNilaiType,
  GetJadwalDetailType,
  GetJadwalMahasiswaType,
  GetJadwalMingguType,
  GetJadwalSemesterType,
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
    }),
    getBobotNilai: builder.query<Res<GetBobotNilaiType[]>, void>({
      query: () => ({
        url: `bobot_nilai`,
        method: 'GET',
      }),
    }),
  }),
})

export const {
  useGetJadwalSemesterQuery,
  useGetJadwalMingguQuery,
  useGetJadwalMahasiswaQuery,
  useGetJadwalDetailQuery,
  useGetBobotNilaiQuery,
} = JadwalKuliahEndpoints
