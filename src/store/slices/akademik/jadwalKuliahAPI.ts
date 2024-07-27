import { api, Res } from '@/store/api'
import {
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
  }),
})

export const { useGetJadwalSemesterQuery, useGetJadwalMingguQuery } =
  JadwalKuliahEndpoints
