import { useGetDokumenAkademikQuery } from '@/store/slices/akademik/dokumenAkademikAPI'
import { GetDokumenAkademikType } from '@/store/type/akademik/dokumenAkademik'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { Bounce, toast } from 'react-toastify'

export function useAkademikDokumen() {
  const navigate = useNavigate()

  //   --- Dokumen ---
  const [dataDokumen, setDataDokumen] = useState<GetDokumenAkademikType[]>()

  const {
    data: Dokumen,
    isLoading: isLoadingDokumen,
    isFetching: isFetchingDokumen,
    isError: isErrorDokumen,
    error: errorDokumen,
  } = useGetDokumenAkademikQuery()

  useEffect(() => {
    if (Dokumen) {
      setDataDokumen(Dokumen?.data)
    }
  }, [Dokumen])

  const loadingDokumen = isLoadingDokumen || isFetchingDokumen

  useEffect(() => {
    if (isErrorDokumen) {
      const errorMsg = errorDokumen as { data?: { message?: string } }

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
  }, [isErrorDokumen, errorDokumen])

  return { dataDokumen, loadingDokumen }
}
