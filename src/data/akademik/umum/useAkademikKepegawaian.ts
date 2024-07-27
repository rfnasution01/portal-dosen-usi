import { useUpdateKepegawaianMutation } from '@/store/slices/profilAPI'
import { useEffect, useState } from 'react'
import { Bounce, toast } from 'react-toastify'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { AkademikKepegawaianSchema } from '@/store/schema/akadamik/umumSchema'

export function useAkademikKepegawaian() {
  const [isShow, setIsShow] = useState<boolean>(false)
  const [isSubmit, setIsSubmit] = useState<boolean>(false)

  const formKepegawaian = useForm<zod.infer<typeof AkademikKepegawaianSchema>>({
    resolver: zodResolver(AkademikKepegawaianSchema),
    defaultValues: {},
  })

  // --- Update Kepegawaian ---
  const [
    updateKepegawaian,
    {
      isSuccess: successUpdateKepegawaian,
      isError: isErrorUpdateKepegawaian,
      error: errorUpdateKepegawaian,
      isLoading: loadingUpdateKepegawaian,
    },
  ] = useUpdateKepegawaianMutation()

  const handleSubmitKepegawaian = async (values) => {
    const formData = new FormData()

    formData.append('nama', values?.nama)
    formData.append('gelar_depan', values?.gelar_depan)
    formData.append('gelar_belakang', values?.gelar_belakang)
    formData.append('id_agama', values?.id_agama)
    formData.append('id_jenis_kelamin', values?.id_jenis_kelamin)
    formData.append('tempat_lahir', values?.tempat_lahir)
    formData.append('tanggal_lahir', values?.tanggal_lahir)
    formData.append('id_status_nikah', values?.id_status_nikah)
    formData.append('id_unit_kerja', values?.id_unit_kerja)
    formData.append('email_perguruan_tinggi', values?.email_perguruan_tinggi)
    formData.append('no_akun_finger', values?.no_akun_finger)
    formData.append('id_jabatan_akademik', values?.id_jabatan_akademik)

    try {
      await updateKepegawaian({ data: formData })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (successUpdateKepegawaian) {
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
      setIsShow(false)
      setIsSubmit(false)
    }
  }, [successUpdateKepegawaian])

  useEffect(() => {
    if (isErrorUpdateKepegawaian) {
      const errorMsg = errorUpdateKepegawaian as { data?: { message?: string } }

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
      setIsShow(false)
      setIsSubmit(false)
    }
  }, [isErrorUpdateKepegawaian, errorUpdateKepegawaian])

  return {
    isShow,
    isSubmit,
    setIsShow,
    setIsSubmit,
    loadingUpdateKepegawaian,
    handleSubmitKepegawaian,
    formKepegawaian,
  }
}
