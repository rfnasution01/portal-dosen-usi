import {
  useGetFakultasDetailQuery,
  useGetFakultasQuery,
} from '@/store/slices/akademik/fakultasAPI'
import { GetFakultasType } from '@/store/type/akademik/fakultasType'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { Bounce, toast } from 'react-toastify'

export function useAkademikFakultas() {
  const navigate = useNavigate()

  const id = localStorage.getItem('fakultasID') ?? ''

  //   --- Fakultas ---
  const [dataFakultas, setDataFakultas] = useState<GetFakultasType[]>()

  const {
    data: Fakultas,
    isLoading: isLoadingFakultas,
    isFetching: isFetchingFakultas,
    isError: isErrorFakultas,
    error: errorFakultas,
  } = useGetFakultasQuery()

  useEffect(() => {
    if (Fakultas) {
      setDataFakultas(Fakultas?.data)
    }
  }, [Fakultas])

  const loadingFakultas = isLoadingFakultas || isFetchingFakultas

  //   --- Fakultas ---
  const [dataFakultasDetail, setDataFakultasDetail] =
    useState<GetFakultasType>()

  const {
    data: FakultasDetail,
    isLoading: isLoadingFakultasDetail,
    isFetching: isFetchingFakultasDetail,
  } = useGetFakultasDetailQuery({ id }, { skip: !id || id === '' })

  useEffect(() => {
    if (FakultasDetail) {
      setDataFakultasDetail(FakultasDetail?.data)
    }
  }, [FakultasDetail])

  const loadingFakultasDetail =
    isLoadingFakultasDetail || isFetchingFakultasDetail

  useEffect(() => {
    if (isErrorFakultas) {
      const errorMsg = errorFakultas as { data?: { message?: string } }

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
  }, [isErrorFakultas, errorFakultas])

  return {
    dataFakultas,
    dataFakultasDetail,
    loadingFakultas,
    loadingFakultasDetail,
  }
}
