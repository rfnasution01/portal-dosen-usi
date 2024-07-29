import {
  useGetBobotNilaiQuery,
  useGetJadwalDetailQuery,
  useGetJadwalMahasiswaQuery,
  useGetJadwalMingguQuery,
  useGetJadwalNilaiQuery,
  useGetJadwalSemesterQuery,
  useGetKomposisiNilaiQuery,
  usePostAjukanNilaiMutation,
  useUpdateKomposisiNilaiMutation,
  useUpdateNilaiMutation,
} from '@/store/slices/akademik/jadwalKuliahAPI'
import {
  GetBobotNilaiType,
  GetJadwalDetailType,
  GetJadwalMahasiswaType,
  GetJadwalMingguType,
  GetJadwalNilaiType,
  GetJadwalSemesterType,
  GetKomposisiNilai,
} from '@/store/type/akademik/jadwalKuliahType'
import { useEffect, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import {
  AkademikJadwalKuliahKomposisiSchema,
  AkademikJadwalKuliahSchema,
} from '@/store/schema/akadamik/jadwalKuliahSchema'
import { Bounce, toast } from 'react-toastify'
import { rowType } from '@/components/FormComponent/akademik'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

export function useAkademikJadwalKuliah() {
  const navigate = useNavigate()

  const id = localStorage.getItem('jadwalID') ?? ''
  const editID = localStorage?.getItem('editID') ?? ''
  const [isShowKomposisi, setIsShowKomposisi] = useState<boolean>(false)
  const [isShow, setIsShow] = useState<boolean>(false)

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
      id_kelas_makul: id,
    },
    { skip: !id || id === '' || id === 'undefined' },
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

  const {
    data: JadwalDetail,
    isLoading: isLoadingJadwalDetail,
    isFetching: isFetchingJadwalDetail,
    isError: isErrorJadwalDetaail,
    error: errroJaadwalDetail,
  } = useGetJadwalDetailQuery(
    {
      id_kelas_makul: id,
    },
    { skip: !id || id === '' || id === 'undefined' },
  )

  useEffect(() => {
    if (JadwalDetail) {
      setDataJadwalDetail(JadwalDetail?.data)
    }
  }, [JadwalDetail])

  useEffect(() => {
    if (isErrorJadwalDetaail) {
      const errorMsg = errroJaadwalDetail as { data?: { message?: string } }

      toast.error(`${errorMsg?.data?.message ?? 'Terjadi Kesalahan'}`, {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      })

      if (errorMsg?.data?.message?.includes('Token')) {
        setTimeout(() => {
          Cookies.remove('token')
          navigate(`/login`)
        }, 3000)
      }
    }
  }, [isErrorJadwalDetaail, errroJaadwalDetail])

  const loadingJadwalDetail = isLoadingJadwalDetail || isFetchingJadwalDetail

  //   --- Komposisi ---
  const [dataKomposisi, setDataKomposisi] = useState<GetKomposisiNilai[]>()

  const {
    data: komposisi,
    isLoading: isLoadingKomposisi,
    isFetching: isFetchingKomposisi,
  } = useGetKomposisiNilaiQuery(
    {
      id_kelas_makul: id,
    },
    { skip: !id || id === '' || id === 'undefined' },
  )

  useEffect(() => {
    if (komposisi) {
      setDataKomposisi(komposisi?.data)
    }
  }, [komposisi])

  const loadingKomposisi = isLoadingKomposisi || isFetchingKomposisi

  //   --- JadwalNilai ---
  const [postData, setPostData] = useState<{
    id_mk: string
    id_aspek: string
  }>()
  const [dataJadwalNilai, setDataJadwalNilai] = useState<GetJadwalNilaiType>()
  const [nilaiMahasiswaTransform, setNilaiMahasiswaTransform] = useState<
    rowType[]
  >([])

  const {
    data: JadwalNilai,
    isLoading: isLoadingJadwalNilai,
    isFetching: isFetchingJadwalNilai,
  } = useGetJadwalNilaiQuery(
    {
      id_kelas_makul: id,
    },
    { skip: !id || id === '' || id === 'undefined' },
  )

  useEffect(() => {
    if (JadwalNilai) {
      setDataJadwalNilai(JadwalNilai?.data)

      const transformResponse = (
        response: GetJadwalNilaiType,
        editID: string,
      ) => {
        return response?.data?.map((mahasiswa) => {
          const transformedAspekNilai: { [key: string]: string | null } = {}

          response?.aspek_nilai?.forEach((aspek) => {
            if (aspek?.id === editID) {
              const matchedAspek = mahasiswa?.nilai_aspek?.find(
                (nilaiAspek) => nilaiAspek?.id === aspek?.id,
              )
              transformedAspekNilai[aspek?.jenis_nilai as string] = matchedAspek
                ? matchedAspek?.nilai
                : null
            }
          })

          return {
            idm: mahasiswa?.id_mahasiswa,
            id_mk: mahasiswa?.id_krs,
            nim: mahasiswa?.nim,
            nama: mahasiswa?.nama,
            nilai_akhir: mahasiswa?.nilai_akhir,
            huruf: mahasiswa?.huruf,
            sks: mahasiswa?.sks,
            mutu: mahasiswa?.mutu,
            ...transformedAspekNilai,
          }
        })
      }

      const nilaiTransform = transformResponse(JadwalNilai?.data, editID)
      setPostData({
        id_mk: nilaiTransform?.[0]?.id_mk,
        id_aspek: editID,
      })

      setNilaiMahasiswaTransform(transformResponse(JadwalNilai?.data, editID))
    }
  }, [JadwalNilai])

  const loadingJadwalNilai = isLoadingJadwalNilai || isFetchingJadwalNilai

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

  const formKomposisi = useForm<
    zod.infer<typeof AkademikJadwalKuliahKomposisiSchema>
  >({
    resolver: zodResolver(AkademikJadwalKuliahKomposisiSchema),
    defaultValues: {
      komposisi_nilai:
        dataKomposisi?.reduce(
          (acc, row) => {
            acc[row?.id] = row?.persentase?.toString()
            return acc
          },
          {} as Record<string, string>,
        ) || {},
    },
  })

  // --- Update Komposisi ---
  const [
    updateKomposisi,
    {
      isError: isErrroKomposisi,
      isLoading: isLoadingUpdateKomposisi,
      isSuccess: isSuccessKomposisi,
      error: errorKompisisi,
    },
  ] = useUpdateKomposisiNilaiMutation()

  const handleSubmitKomposisi = async (
    values: zod.infer<typeof AkademikJadwalKuliahKomposisiSchema>,
  ) => {
    const body = {
      id_kelas_makul: id,
      komposisi_nilai: values.komposisi_nilai,
    }
    try {
      await updateKomposisi({ body: body })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (dataKomposisi) {
      const defaultValues = dataKomposisi.reduce(
        (acc, row) => {
          acc[row.id] = row.persentase || row.persen
          return acc
        },
        {} as Record<string, string>,
      )
      formKomposisi.reset({ komposisi_nilai: defaultValues })
    }
  }, [dataKomposisi, formKomposisi])

  const calculateTotalPercentage = () => {
    const values = formKomposisi.watch('komposisi_nilai')
    return Object.values(values).reduce((total, value) => {
      const numericValue = parseFloat(value as string)
      return total + (isNaN(numericValue) ? 0 : numericValue)
    }, 0)
  }

  useEffect(() => {
    if (isSuccessKomposisi) {
      toast.success('Berhasil update data!', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      })
      formKomposisi.reset()
      setIsShowKomposisi(false)
    }
  }, [isSuccessKomposisi])

  useEffect(() => {
    if (isErrroKomposisi) {
      const errorMsg = errorKompisisi as {
        data?: { message?: string }
      }

      toast.error(`${errorMsg?.data?.message ?? 'Terjadi Kesalahan'}`, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      })
      setIsShowKomposisi(false)
    }
  }, [isErrroKomposisi, errorKompisisi])

  const form = useForm<zod.infer<typeof AkademikJadwalKuliahSchema>>({
    resolver: zodResolver(AkademikJadwalKuliahSchema),
    defaultValues: {},
  })

  // --- Update Nilai ---
  const [
    createNilai,
    {
      isError: isErrorEditNilai,
      error: errorEditNilai,
      isLoading: isLoadingEditNilai,
      isSuccess: isSuccessEditNilai,
    },
  ] = useUpdateNilaiMutation()

  const handleSubmit = async (idm: string) => {
    const body = {
      id_krs: idm ?? '',
      id_aspek: postData?.id_aspek ?? '',
      nilai: form.watch(`nilai_${idm}_${editID}`) ?? '',
    }

    console.log({ body })

    try {
      localStorage.setItem('idm', idm)
      await createNilai({ body: body })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (isErrorEditNilai) {
      const errorMsg = errorEditNilai as { data?: { message?: string } }

      toast.error(`${errorMsg?.data?.message ?? 'Terjadi Kesalahan'}`, {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      })
    }
  }, [isErrorEditNilai, errorEditNilai])

  // --- Ajukan Nilai ---
  const [
    createAjukan,
    {
      isError: isErrorAjukanNilai,
      error: errorAjukanNilai,
      isLoading: isLoadingAjukanNilai,
      isSuccess: isSuccessAjukanNilai,
    },
  ] = usePostAjukanNilaiMutation()

  const handleSubmitAjukan = async () => {
    const body = {
      id_jadwal: id,
    }

    try {
      await createAjukan({ body: body })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (isSuccessAjukanNilai) {
      toast.success(`Ajukan nilai berhasil`, {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      })
      setIsShow(false)
    }
  }, [isSuccessAjukanNilai])

  useEffect(() => {
    if (isErrorAjukanNilai) {
      const errorMsg = errorAjukanNilai as { data?: { message?: string } }

      toast.error(`${errorMsg?.data?.message ?? 'Terjadi Kesalahan'}`, {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      })
    }
  }, [isErrorAjukanNilai, errorAjukanNilai])

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
    dataKomposisi,
    loadingKomposisi,
    dataJadwalNilai,
    loadingJadwalNilai,
    calculateTotalPercentage,
    handleSubmitKomposisi,
    isLoadingUpdateKomposisi,
    setIsShowKomposisi,
    isShowKomposisi,
    formKomposisi,
    nilaiMahasiswaTransform,
    form,
    handleSubmit,
    isSuccessEditNilai,
    handleSubmitAjukan,
    isLoadingAjukanNilai,
    isLoadingEditNilai,
    setIsShow,
    isShow,
  }
}
