import {
  useGetBobotNilaiQuery,
  useGetJadwalDetailQuery,
  useGetJadwalMahasiswaQuery,
  useGetJadwalMingguQuery,
  useGetJadwalSemesterQuery,
} from '@/store/slices/akademik/jadwalKuliahAPI'
import {
  GetBobotNilaiType,
  GetJadwalDetailType,
  GetJadwalMahasiswaType,
  GetJadwalMingguType,
  GetJadwalSemesterType,
} from '@/store/type/akademik/jadwalKuliahType'
import { useEffect, useState } from 'react'

export function useAkademikJadwalKuliah() {
  const idEdit = localStorage.getItem('jadwalID') ?? ''
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

  //   --- Jadwal Mahasiswa ---
  const [dataJadwalMahasiswa, setDataJadwalMahasiswa] =
    useState<GetJadwalMahasiswaType[]>()

  const {
    data: JadwalMahasiswa,
    isLoading: isLoadingJadwalMahasiswa,
    isFetching: isFetchingJadwalMahasiswa,
  } = useGetJadwalMahasiswaQuery(
    {
      id_kelas_makul: idEdit,
    },
    { skip: !idEdit || idEdit === '' || idEdit === 'undefined' },
  )

  useEffect(() => {
    if (JadwalMahasiswa) {
      setDataJadwalMahasiswa(JadwalMahasiswa?.data)
    }
  }, [JadwalMahasiswa])

  const loadingJadwalMahasiswa =
    isLoadingJadwalMahasiswa || isFetchingJadwalMahasiswa

  //   --- Jadwal Detail ---
  const [dataJadwalDetail, setDataJadwalDetail] =
    useState<GetJadwalDetailType>()

  console.log({ idEdit })

  const {
    data: JadwalDetail,
    isLoading: isLoadingJadwalDetail,
    isFetching: isFetchingJadwalDetail,
  } = useGetJadwalDetailQuery(
    {
      id_kelas_makul: idEdit,
    },
    { skip: !idEdit || idEdit === '' || idEdit === 'undefined' },
  )

  useEffect(() => {
    if (JadwalDetail) {
      setDataJadwalDetail(JadwalDetail?.data)
    }
  }, [JadwalDetail])

  const loadingJadwalDetail = isLoadingJadwalDetail || isFetchingJadwalDetail

  //   --- Bobot Nilai ---
  const [dataBobotNilai, setDataBobotNilai] = useState<GetBobotNilaiType[]>()

  const {
    data: BobotNilai,
    isLoading: isLoadingBobotNilai,
    isFetching: isFetchingBobotNilai,
  } = useGetBobotNilaiQuery()

  useEffect(() => {
    if (BobotNilai) {
      setDataBobotNilai(BobotNilai?.data)
    }
  }, [BobotNilai])

  const loadingBobotNilai = isLoadingBobotNilai || isFetchingBobotNilai

  return {
    dataJadwalKuliah,
    loadingJadwalKuliah,
    dataJadwalKuliahMingguIni,
    loadingJadwalKuliahMingguIni,
    dataJadwalMahasiswa,
    loadingJadwalMahasiswa,
    dataJadwalDetail,
    loadingJadwalDetail,
    dataBobotNilai,
    loadingBobotNilai,
  }
}
