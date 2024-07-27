import {
  useGetJadwalMingguQuery,
  useGetJadwalSemesterQuery,
} from '@/store/slices/akademik/jadwalKuliahAPI'
import {
  GetJadwalMingguType,
  GetJadwalSemesterType,
} from '@/store/type/akademik/jadwalKuliahType'
import { useEffect, useState } from 'react'

export function useAkademikJadwalKuliah() {
  //   --- Jadwal Semester Ini ---
  const [dataJadwalKuliah, setDataJadwalKuliah] =
    useState<GetJadwalSemesterType[]>()

  const {
    data: JadwalKuliah,
    isLoading: isLoadingJadwalKuliah,
    isFetching: isFetchingJadwalKuliah,
  } = useGetJadwalSemesterQuery()

  useEffect(() => {
    if (JadwalKuliah) {
      setDataJadwalKuliah(JadwalKuliah?.data)
    }
  }, [JadwalKuliah])

  const loadingJadwalKuliah = isLoadingJadwalKuliah || isFetchingJadwalKuliah

  //   --- Jadwal Minggu Ini ---
  const [dataJadwalKuliahMingguIni, setDataJadwalKuliahMingguIni] =
    useState<GetJadwalMingguType[]>()

  const {
    data: JadwalKuliahMingguIni,
    isLoading: isLoadingJadwalKuliahMingguIni,
    isFetching: isFetchingJadwalKuliahMingguIni,
  } = useGetJadwalMingguQuery()

  useEffect(() => {
    if (JadwalKuliahMingguIni) {
      setDataJadwalKuliahMingguIni(JadwalKuliahMingguIni?.data)
    }
  }, [JadwalKuliahMingguIni])

  const loadingJadwalKuliahMingguIni =
    isLoadingJadwalKuliahMingguIni || isFetchingJadwalKuliahMingguIni

  return {
    dataJadwalKuliah,
    loadingJadwalKuliah,
    dataJadwalKuliahMingguIni,
    loadingJadwalKuliahMingguIni,
  }
}
