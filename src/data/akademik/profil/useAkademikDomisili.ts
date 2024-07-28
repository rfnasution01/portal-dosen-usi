import { useEffect, useState } from 'react'
import { Bounce, toast } from 'react-toastify'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { AkademikDomisiliSchema } from '@/store/schema/akadamik/umumSchema'
import { useUpdateDomisiliMutation } from '@/store/slices/profilAPI'

export function useAkademikDomisili() {
  const [isShow, setIsShow] = useState<boolean>(false)
  const [isSubmit, setIsSubmit] = useState<boolean>(false)
  const [isEdit, setIsEdit] = useState<boolean>(false)

  const formDomisili = useForm<zod.infer<typeof AkademikDomisiliSchema>>({
    resolver: zodResolver(AkademikDomisiliSchema),
    defaultValues: {},
  })

  // --- Update Domisili ---
  const [
    updateDomisili,
    {
      isSuccess: successUpdateDomisili,
      isError: isErrorUpdateDomisili,
      error: errorUpdateDomisili,
      isLoading: loadingUpdateDomisili,
    },
  ] = useUpdateDomisiliMutation()

  const handleSubmitDomisili = async (values) => {
    const formData = new FormData()

    formData.append('id_provinsi', values?.id_provinsi)
    formData.append('id_kabupaten', values?.id_kabupaten)
    formData.append('id_kecamatan', values?.id_kecamatan)
    formData.append('alamat_lengkap', values?.alamat_lengkap)
    formData.append('kode_pos', values?.kode_pos)
    formData.append('jarak_rumah_kantor', values?.jarak_rumah_kantor)
    formData.append('nomor_telepon', values?.nomor_telepon)
    formData.append('nomor_telepon_kantor', values?.nomor_telepon_kantor)

    if (isEdit) {
      try {
        await updateDomisili({ data: formData })
      } catch (error) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    if (successUpdateDomisili) {
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
  }, [successUpdateDomisili])

  useEffect(() => {
    if (isErrorUpdateDomisili) {
      const errorMsg = errorUpdateDomisili as { data?: { message?: string } }

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
  }, [isErrorUpdateDomisili, errorUpdateDomisili])

  return {
    isShow,
    isSubmit,
    setIsShow,
    setIsSubmit,
    loadingUpdateDomisili,
    handleSubmitDomisili,
    formDomisili,
    isEdit,
    setIsEdit,
  }
}
