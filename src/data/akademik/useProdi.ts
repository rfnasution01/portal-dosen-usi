import {
  useGetProdiDetailQuery,
  useGetProdiQuery,
} from '@/store/slices/akademik/prodiAPI'
import {
  GetProdiDetailType,
  GetProdiType,
} from '@/store/type/akademik/prodiType'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { Bounce, toast } from 'react-toastify'

export function useAkademikProdi() {
  const navigate = useNavigate()

  const id = localStorage.getItem('prodiID') ?? ''

  //   --- Prodi ---
  const [dataProdi, setDataProdi] = useState<GetProdiType[]>()

  const {
    data: Prodi,
    isLoading: isLoadingProdi,
    isFetching: isFetchingProdi,
    isError: isErrorProdi,
    error: errorProdi,
  } = useGetProdiQuery()

  useEffect(() => {
    if (Prodi) {
      setDataProdi(Prodi?.data)
    }
  }, [Prodi])

  const loadingProdi = isLoadingProdi || isFetchingProdi

  //   --- Prodi ---
  const [dataProdiDetail, setDataProdiDetail] = useState<GetProdiDetailType>()

  const {
    data: ProdiDetail,
    isLoading: isLoadingProdiDetail,
    isFetching: isFetchingProdiDetail,
  } = useGetProdiDetailQuery({ id }, { skip: !id || id === '' })

  useEffect(() => {
    if (ProdiDetail) {
      setDataProdiDetail(ProdiDetail?.data)
    }
  }, [ProdiDetail])

  const loadingProdiDetail = isLoadingProdiDetail || isFetchingProdiDetail

  useEffect(() => {
    if (isErrorProdi) {
      const errorMsg = errorProdi as { data?: { message?: string } }

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
  }, [isErrorProdi, errorProdi])

  return {
    dataProdi,
    dataProdiDetail,
    loadingProdi,
    loadingProdiDetail,
  }
}
