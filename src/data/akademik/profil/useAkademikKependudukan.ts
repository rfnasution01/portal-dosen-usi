import { useUpdateKependudukanMutation } from '@/store/slices/profilAPI'
import { useEffect, useState } from 'react'
import { Bounce, toast } from 'react-toastify'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { AkademikKependudukanSchema } from '@/store/schema/akadamik/umumSchema'

export function useAkademikKependudukan() {
  const [isShow, setIsShow] = useState<boolean>(false)
  const [isSubmit, setIsSubmit] = useState<boolean>(false)
  const [isEdit, setIsEdit] = useState<boolean>(false)

  const formKependudukan = useForm<
    zod.infer<typeof AkademikKependudukanSchema>
  >({
    resolver: zodResolver(AkademikKependudukanSchema),
    defaultValues: {},
  })

  // --- Update Kependudukan ---
  const [
    updateKependudukan,
    {
      isSuccess: successUpdateKependudukan,
      isError: isErrorUpdateKependudukan,
      error: errorUpdateKependudukan,
      isLoading: loadingUpdateKependudukan,
    },
  ] = useUpdateKependudukanMutation()

  const handleSubmitKependudukan = async (values) => {
    const formData = new FormData()

    formData.append('nomor_ktp', values?.nomor_ktp)
    formData.append('nomor_kk', values?.nomor_kk)
    formData.append('alamat', values?.alamat)
    formData.append('kode_pos', values?.kode_pos)
    formData.append('id_suku', values?.id_suku)
    formData.append('id_negara', values?.id_negara)
    formData.append('id_provinsi', values?.id_provinsi)
    formData.append('id_kabupaten', values?.id_kabupaten)
    formData.append('id_kecamatan', values?.id_kecamatan)
    formData.append('file_ktp', values?.file_ktp)
    formData.append('file_kk', values?.file_kk)

    if (isEdit) {
      try {
        await updateKependudukan({ data: formData })
      } catch (error) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    if (successUpdateKependudukan) {
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
  }, [successUpdateKependudukan])

  useEffect(() => {
    if (isErrorUpdateKependudukan) {
      const errorMsg = errorUpdateKependudukan as {
        data?: { message?: string }
      }

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
  }, [isErrorUpdateKependudukan, errorUpdateKependudukan])

  return {
    isShow,
    isSubmit,
    setIsShow,
    setIsSubmit,
    loadingUpdateKependudukan,
    handleSubmitKependudukan,
    formKependudukan,
    isEdit,
    setIsEdit,
  }
}
