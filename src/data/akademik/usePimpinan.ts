import {
  useGetPimpinanDetailQuery,
  useGetPimpinanQuery,
} from '@/store/slices/akademik/pimpinanAPI'
import {
  GetPimpinanDetailType,
  GetPimpinanType,
} from '@/store/type/akademik/pimpinanType'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { Bounce, toast } from 'react-toastify'

export function useAkademikPimpinan() {
  const navigate = useNavigate()

  const id = localStorage.getItem('pimpinanID') ?? ''

  //   --- Pimpinan ---
  const [dataPimpinan, setDataPimpinan] = useState<GetPimpinanType[]>()

  const {
    data: Pimpinan,
    isLoading: isLoadingPimpinan,
    isFetching: isFetchingPimpinan,
    isError: isErrorPimpinan,
    error: errorPimpinan,
  } = useGetPimpinanQuery()

  useEffect(() => {
    if (Pimpinan) {
      setDataPimpinan(Pimpinan?.data)
    }
  }, [Pimpinan])

  const loadingPimpinan = isLoadingPimpinan || isFetchingPimpinan

  //   --- Pimpinan ---
  const [dataPimpinanDetail, setDataPimpinanDetail] =
    useState<GetPimpinanDetailType>()

  const {
    data: PimpinanDetail,
    isLoading: isLoadingPimpinanDetail,
    isFetching: isFetchingPimpinanDetail,
  } = useGetPimpinanDetailQuery({ id }, { skip: !id || id === '' })

  useEffect(() => {
    if (PimpinanDetail) {
      setDataPimpinanDetail(PimpinanDetail?.data)
    }
  }, [PimpinanDetail])

  const loadingPimpinanDetail =
    isLoadingPimpinanDetail || isFetchingPimpinanDetail

  useEffect(() => {
    if (isErrorPimpinan) {
      const errorMsg = errorPimpinan as { data?: { message?: string } }

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
  }, [isErrorPimpinan, errorPimpinan])

  return {
    dataPimpinan,
    dataPimpinanDetail,
    loadingPimpinan,
    loadingPimpinanDetail,
  }
}
