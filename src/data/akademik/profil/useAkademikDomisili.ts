import { useEffect, useState } from 'react'
import { Bounce, toast } from 'react-toastify'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { AkademikDomisiliSchema } from '@/store/schema/akadamik/umumSchema'
import { useUpdateDomisiliMutation } from '@/store/slices/profilAPI'
import { useProfil } from '@/data/useProfil'

export function useAkademikDomisili() {
  const { dataProfil } = useProfil()

  const [isShow, setIsShow] = useState<boolean>(false)
  const [isSubmit, setIsSubmit] = useState<boolean>(false)
  const [isEdit, setIsEdit] = useState<boolean>(false)

  const form = useForm<zod.infer<typeof AkademikDomisiliSchema>>({
    resolver: zodResolver(AkademikDomisiliSchema),
    defaultValues: {},
  })

  // --- Update Domisili ---
  const [
    updateDomisili,
    {
      isSuccess: successUpdate,
      isError: isErrorUpdate,
      error: errorUpdate,
      isLoading: loadingUpdate,
    },
  ] = useUpdateDomisiliMutation()

  const handleSubmit = async () => {
    const values = form.watch()

    const formData = new FormData()

    formData.append('id_provinsi', values?.id_provinsi ?? '')
    formData.append('id_kabupaten', values?.id_kabupaten ?? '')
    formData.append('id_kecamatan', values?.id_kecamatan ?? '')
    formData.append('alamat_lengkap', values?.alamat_lengkap ?? '')
    formData.append('kode_pos', values?.kode_pos ?? '')
    formData.append('jarak_rumah_kantor', values?.jarak_rumah_kantor ?? '')
    formData.append('nomor_telepon', values?.nomor_telepon ?? '')
    formData.append('nomor_telepon_kantor', values?.nomor_telepon_kantor ?? '')

    if (isEdit && isShow && isSubmit) {
      try {
        await updateDomisili({ data: formData })
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
      setIsEdit(false)
      setIsShow(false)
      setIsSubmit(false)
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
      setIsEdit(false)
      setIsShow(false)
      setIsSubmit(false)
    }
  }, [isErrorUpdate, errorUpdate])

  useEffect(() => {
    if (dataProfil) {
      const data = dataProfil?.domisili

      form.setValue('alamat_lengkap', data?.alamat_lengkap)
      form.setValue('id_kabupaten', data?.id_kabupaten)
      form.setValue('id_kecamatan', data?.id_kecamatan)
      form.setValue('id_provinsi', data?.id_provinsi)
      form.setValue('jarak_rumah_kantor', data?.jarak_rumah_kantor)
      form.setValue('kabupaten', data?.kabupaten)
      form.setValue('kecamatan', data?.kecamatan)
      form.setValue('kode_pos', data?.kode_pos)
      form.setValue('nomor_telepon', data?.nomor_telepon)
      form.setValue('nomor_telepon_kantor', data?.nomor_telepon_kantor)
      form.setValue('provinsi', data?.provinsi)
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
