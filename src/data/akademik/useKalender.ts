import { useGetKalendarAkademikQuery } from '@/store/slices/akademik/kalendarAkademikAPI'
import { GetKalendarAkademikType } from '@/store/type/akademik/kalendarAkademik'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { Bounce, toast } from 'react-toastify'

export function useAkademikKalender() {
  const navigate = useNavigate()

  //   --- Tahun Aktif ---
  const [dataKalender, setDataKalender] = useState<GetKalendarAkademikType[]>()

  const {
    data: Kalender,
    isLoading: isLoadingKalender,
    isFetching: isFetchingKalender,
    isError: isErrorKalender,
    error: errorKalender,
  } = useGetKalendarAkademikQuery()

  useEffect(() => {
    if (Kalender) {
      setDataKalender(Kalender?.data)
    }
  }, [Kalender])

  const loadingKalender = isLoadingKalender || isFetchingKalender

  useEffect(() => {
    if (isErrorKalender) {
      const errorMsg = errorKalender as { data?: { message?: string } }

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
  }, [isErrorKalender, errorKalender])

  return { dataKalender, loadingKalender }
}
