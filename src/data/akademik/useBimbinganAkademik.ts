import {
  useGetBimbinganQuery,
  useGetPengajuanKRSDetailQuery,
  useGetPengajuanKRSQuery,
  usePostPersetujuanKRSMutation,
} from '@/store/slices/akademik/bimbinganAkademikAPI'
import {
  ResBimbinganAkademik,
  ResPengajuanKRS,
  ResPengajuanKRSDetail,
} from '@/store/type/akademik/bimbinganAkademikType'
import { usePathname } from '@/utils/usePathname'
import { useEffect, useState } from 'react'
import { Bounce, toast } from 'react-toastify'

export function useAkademikBimbinganAkademik() {
  const { pathname } = usePathname()
  const [dataBimbingan, setDataBimbingan] = useState<ResBimbinganAkademik[]>([])
  const idMahasiswa = localStorage.getItem('mahasiswaID') ?? ''
  const [isShow, setIsShow] = useState<boolean>(false)
  const [krs, setkrs] = useState<{ id: string; status: string }>()

  const {
    data: bimbingan,
    isLoading: isLoadingBimbingan,
    isFetching: isFetchingBimbingan,
  } = useGetBimbinganQuery({
    angkatan: '',
  })

  const loadingBimbingan = isLoadingBimbingan || isFetchingBimbingan

  useEffect(() => {
    if (bimbingan) {
      setDataBimbingan(bimbingan?.data)
    }
  }, [bimbingan])

  // --- Pengajuan KRS ---
  const [dataKRS, setDataKRS] = useState<ResPengajuanKRS[]>([])

  const {
    data: KRS,
    isLoading: isLoadingKRS,
    isFetching: isFetchingKRS,
  } = useGetPengajuanKRSQuery({
    angkatan: '',
  })

  const loadingKRS = isLoadingKRS || isFetchingKRS

  useEffect(() => {
    if (KRS) {
      setDataKRS(KRS?.data)
    }
  }, [KRS])

  // --- Pengajuan KRS Detail ---
  const [dataKRSDetail, setDataKRSDetail] = useState<ResPengajuanKRSDetail>()

  const {
    data: KRSDetail,
    isLoading: isLoadingKRSDetail,
    isFetching: isFetchingKRSDetail,
  } = useGetPengajuanKRSDetailQuery(
    {
      id_mahasiswa: idMahasiswa,
    },
    { skip: !idMahasiswa || idMahasiswa === '' || idMahasiswa === 'undefined' },
  )

  const loadingKRSDetail = isLoadingKRSDetail || isFetchingKRSDetail

  useEffect(() => {
    if (KRSDetail) {
      setDataKRSDetail(KRSDetail?.data)
    }
  }, [KRSDetail])

  const adaDataPengajuanKrs = dataKRS?.length > 0
  const tindakLanjutiPengajuan = pathname === '/akademik/bimbingan/krs/detail'

  // --- Create KRS ---
  const [
    createKRS,
    {
      isError: isErrorKRS,
      error: errorKRS,
      isLoading: isLoadingCreateKRS,
      isSuccess: isSuccessKRS,
    },
  ] = usePostPersetujuanKRSMutation()

  const handleSubmit = async () => {
    const body = {
      id: krs?.id,
      status_krs: krs?.status,
    }

    if (isShow) {
      try {
        await createKRS({ body: body })
      } catch (error) {
        console.error(error)
      }
    }
  }

  useEffect(() => {
    if (isSuccessKRS) {
      toast.success('Update data berhasil', {
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
      setkrs(null)
    }
  }, [isSuccessKRS])

  useEffect(() => {
    if (isErrorKRS) {
      const errorMsg = errorKRS as { data?: { message?: string } }

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
      setIsShow(false)
      setkrs(null)
    }
  }, [isErrorKRS, errorKRS])

  return {
    dataBimbingan,
    loadingBimbingan,
    dataKRS,
    loadingKRS,
    dataKRSDetail,
    loadingKRSDetail,
    adaDataPengajuanKrs,
    tindakLanjutiPengajuan,
    isShow,
    setIsShow,
    setkrs,
    handleSubmit,
    isLoadingCreateKRS,
  }
}
