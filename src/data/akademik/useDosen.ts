import {
  useGetDosenDetailQuery,
  useGetDosenQuery,
} from '@/store/slices/akademik/dosenAPI'
import {
  GetDosenDetailType,
  GetDosenType,
} from '@/store/type/akademik/dosenType'
import { useEffect, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { AkademikFilterProdiSchema } from '@/store/schema/akadamik/umumSchema'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { Bounce, toast } from 'react-toastify'

export function useAkademikDosen() {
  const navigate = useNavigate()

  const id = localStorage.getItem('dosenID') ?? ''

  const formFilterProdi = useForm<zod.infer<typeof AkademikFilterProdiSchema>>({
    resolver: zodResolver(AkademikFilterProdiSchema),
    defaultValues: {},
  })

  const idDosen = formFilterProdi.watch('id')

  //   --- Dosen ---
  const [dataDosen, setDataDosen] = useState<GetDosenType[]>()

  const {
    data: Dosen,
    isLoading: isLoadingDosen,
    isFetching: isFetchingDosen,
    isError: isErrorDosen,
    error: errorDosen,
  } = useGetDosenQuery({ id: idDosen ?? undefined })

  useEffect(() => {
    if (Dosen) {
      setDataDosen(Dosen?.data)
    }
  }, [Dosen])

  const loadingDosen = isLoadingDosen || isFetchingDosen

  //   --- Dosen ---
  const [dataDosenDetail, setDataDosenDetail] = useState<GetDosenDetailType>()

  const {
    data: DosenDetail,
    isLoading: isLoadingDosenDetail,
    isFetching: isFetchingDosenDetail,
  } = useGetDosenDetailQuery({ id }, { skip: !id || id === '' })

  useEffect(() => {
    if (DosenDetail) {
      setDataDosenDetail(DosenDetail?.data)
    }
  }, [DosenDetail])

  const loadingDosenDetail = isLoadingDosenDetail || isFetchingDosenDetail

  useEffect(() => {
    if (isErrorDosen) {
      const errorMsg = errorDosen as { data?: { message?: string } }

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
  }, [isErrorDosen, errorDosen])

  return {
    dataDosen,
    dataDosenDetail,
    loadingDosen,
    loadingDosenDetail,
    formFilterProdi,
  }
}
