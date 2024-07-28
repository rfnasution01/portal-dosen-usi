import { useUpdateKepegawaianMutation } from '@/store/slices/profilAPI'
import { useEffect, useState } from 'react'
import { Bounce, toast } from 'react-toastify'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { AkademikKepegawaianSchema } from '@/store/schema/akadamik/umumSchema'
import { useProfil } from '@/data/useProfil'

export function useAkademikKepegawaian() {
  const [isShow, setIsShow] = useState<boolean>(false)
  const [isSubmit, setIsSubmit] = useState<boolean>(false)
  const [isEdit, setIsEdit] = useState<boolean>(false)

  const { dataProfil } = useProfil()

  const form = useForm<zod.infer<typeof AkademikKepegawaianSchema>>({
    resolver: zodResolver(AkademikKepegawaianSchema),
    defaultValues: {},
  })

  // --- Update Kepegawaian ---
  const [
    updateKepegawaian,
    {
      isSuccess: successUpdate,
      isError: isErrorUpdate,
      error: errorUpdate,
      isLoading: loadingUpdate,
    },
  ] = useUpdateKepegawaianMutation()

  const handleSubmit = async () => {
    const values = form.watch()
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

    if (isEdit && isShow && isSubmit) {
      try {
        await updateKepegawaian({ data: formData })
      } catch (error) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    if (successUpdate) {
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
      setIsEdit(false)
    }
  }, [successUpdate])

  useEffect(() => {
    if (isErrorUpdate) {
      const errorMsg = errorUpdate as { data?: { message?: string } }

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
      setIsEdit(false)
    }
  }, [isErrorUpdate, errorUpdate])

  useEffect(() => {
    if (dataProfil) {
      const data = dataProfil?.kepegawaian
      const datax = dataProfil?.header_profil

      form.setValue('agama', datax?.agama)
      form.setValue('email_perguruan_tinggi', data?.email_perguruan_tinggi)
      form.setValue('gelar_belakang', datax?.gelar_belakang)
      form.setValue('gelar_depan', datax?.gelar_depan)
      form.setValue('id_agama', datax?.id_agama)
      form.setValue('id_jabatan_akademik', data?.id_jabatan_akademik)
      form.setValue('id_jenis_kelamin', datax?.id_jenis_kelamin)
      form.setValue('id_status_nikah', datax?.id_status_nikah)
      form.setValue('id_unit_kerja', data?.id_unit_kerja)
      form.setValue('jabatan_akademik', data?.jabatan_akademik)
      form.setValue('jenis_kelamin', datax?.jenis_kelamin)
      form.setValue('nama', datax?.nama)
      form.setValue('no_akun_finger', data?.no_akun_finger)
      form.setValue('status_nikah', datax?.status_nikah)
      form.setValue('tanggal_lahir', datax?.tanggal_lahir)
      form.setValue('tempat_lahir', datax?.tempat_lahir)
      form.setValue('unit_kerja', data?.unit_kerja)
    }
  }, [dataProfil])

  return {
    isShow,
    isSubmit,
    setIsShow,
    setIsSubmit,
    loadingUpdate,
    handleSubmit,
    form,
    isEdit,
    setIsEdit,
  }
}
