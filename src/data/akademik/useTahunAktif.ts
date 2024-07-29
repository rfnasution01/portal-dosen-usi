import {
  useGetTahunAktifQuery,
  useUpdateTahunAktifMutation,
} from '@/store/slices/akademik/tahunAktifAPI'
import { GetTahunAkktifType } from '@/store/type/akademik/tahunAktifType'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { AkademikTahunAkademikSchema } from '@/store/schema/akadamik/tahunAkademikSchema'
import { Bounce, toast } from 'react-toastify'
import Cookies from 'js-cookie'

export function useAkademikTahunAktif() {
  const navigate = useNavigate()

  const [isSubmit, setIsSubmit] = useState<boolean>(false)
  const [isShow, setIsShow] = useState<boolean>(false)

  const form = useForm<zod.infer<typeof AkademikTahunAkademikSchema>>({
    resolver: zodResolver(AkademikTahunAkademikSchema),
    defaultValues: {},
  })

  //   --- Tahun Aktif ---
  const [dataTahunAktif, setDataTahunAktif] = useState<GetTahunAkktifType>()

  const {
    data: TahunAktif,
    isLoading: isLoadingTahunAktif,
    isFetching: isFetchingTahunAktif,
    isError: isErrorTa,
    error: errorTa,
  } = useGetTahunAktifQuery()

  useEffect(() => {
    if (TahunAktif) {
      setDataTahunAktif(TahunAktif?.data)
    }
  }, [TahunAktif])

  const loadingTahunAktif = isLoadingTahunAktif || isFetchingTahunAktif

  // --- Create Edit Tahun Akademik ---
  const [
    createEditTahunAkademik,
    {
      isError: isErrorEditTahunAkademik,
      error: errorEditTahunAkademik,
      isLoading: isLoadingEditTahunAkademik,
      isSuccess: isSuccessEditTahunAkademik,
    },
  ] = useUpdateTahunAktifMutation()

  const handleSubmit = async () => {
    const values = form.getValues()

    const body = {
      tahun: values?.tahun,
      id_tahapan: values?.id_tahap,
      id_prodi: values?.id_kode_prodi,
    }

    if (isSubmit && isShow) {
      try {
        await createEditTahunAkademik({ body: body })
      } catch (error) {
        console.error(error)
      }
    }
  }

  useEffect(() => {
    if (isSuccessEditTahunAkademik) {
      toast.success(`Update Tahun Akademik berhasil`, {
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
      setIsSubmit(false)
      setTimeout(() => {
        form.reset()
        navigate(-1)
      }, 3000)
    }
  }, [isSuccessEditTahunAkademik])

  useEffect(() => {
    if (isErrorEditTahunAkademik) {
      const errorMsg = errorEditTahunAkademik as { data?: { message?: string } }

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
      setIsSubmit(false)
    }
  }, [isErrorEditTahunAkademik, errorEditTahunAkademik])

  useEffect(() => {
    if (dataTahunAktif) {
      form.setValue('tahun', dataTahunAktif?.tahun_akademik)
      form.setValue('tahap', dataTahunAktif?.tahapan)
      form.setValue('id_tahap', dataTahunAktif?.id_tahapan)
      form.setValue('id_kode_prodi', dataTahunAktif?.id_prodi)
      form.setValue('kode_prodi', dataTahunAktif?.prodi)
    }
  }, [dataTahunAktif])

  useEffect(() => {
    if (isErrorTa) {
      const errorMsg = errorTa as { data?: { message?: string } }

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
  }, [isErrorTa, errorTa])

  return {
    dataTahunAktif,
    loadingTahunAktif,
    isShow,
    isSubmit,
    setIsShow,
    setIsSubmit,
    handleSubmit,
    isLoadingEditTahunAkademik,
    form,
  }
}
