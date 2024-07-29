import { useUpdateKependudukanMutation } from '@/store/slices/profilAPI'
import { useEffect, useState } from 'react'
import { Bounce, toast } from 'react-toastify'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { AkademikKependudukanSchema } from '@/store/schema/akadamik/umumSchema'
import { useProfil } from '@/data/useProfil'

export function useAkademikKependudukan() {
  const { dataProfil } = useProfil()

  const [isShow, setIsShow] = useState<boolean>(false)
  const [isSubmit, setIsSubmit] = useState<boolean>(false)
  const [isEdit, setIsEdit] = useState<boolean>(false)

  const form = useForm<zod.infer<typeof AkademikKependudukanSchema>>({
    resolver: zodResolver(AkademikKependudukanSchema),
    defaultValues: {},
  })

  // --- Update Kependudukan ---
  const [
    updateKependudukan,
    {
      isSuccess: successUpdate,
      isError: isErrorUpdate,
      error: errorUpdate,
      isLoading: loadingUpdate,
    },
  ] = useUpdateKependudukanMutation()

  const handleSubmit = async () => {
    const values = form.watch()
    const formData = new FormData()

    formData.append('nomor_ktp', values?.nomor_ktp ?? '-')
    formData.append('nomor_kk', values?.nomor_kk ?? '-')
    formData.append('alamat', values?.alamat ?? '-')
    formData.append('kode_pos', values?.kode_pos ?? '-')
    formData.append('id_suku', values?.id_suku ?? '-')
    formData.append('id_negara', values?.id_negara ?? '-')
    formData.append('id_provinsi', values?.id_provinsi ?? '-')
    formData.append('id_kabupaten', values?.id_kabupaten ?? '-')
    formData.append('id_kecamatan', values?.id_kecamatan ?? '-')
    formData.append('file_ktp', values?.file_ktp ?? '-')
    formData.append('file_kk', values?.file_kk ?? '-')

    if (isEdit && isShow && isSubmit) {
      try {
        await updateKependudukan({ data: formData })
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
      const errorMsg = errorUpdate as {
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
      setIsEdit(false)
      setIsShow(false)
      setIsSubmit(false)
    }
  }, [isErrorUpdate, errorUpdate])

  useEffect(() => {
    if (dataProfil) {
      const data = dataProfil?.kependudukan

      form.setValue('alamat', data?.alamat)
      form.setValue('file_kk', data?.file_kk)
      form.setValue('file_ktp', data?.file_kk)
      form.setValue('id_kabupaten', data?.id_kabupaten)
      form.setValue('id_kecamatan', data?.id_kecamatan)
      form.setValue('id_negara', data?.id_negara)
      form.setValue('id_provinsi', data?.id_provinsi)
      form.setValue('id_suku', data?.id_suku)
      form.setValue('kabupaten', data?.kabupaten)
      form.setValue('kecamatan', data?.kecamatan)
      form.setValue('kode_pos', data?.kode_pos)
      form.setValue('negara', data?.negara)
      form.setValue('nomor_kk', data?.nomor_kk)
      form.setValue('nomor_ktp', data?.nomor_ktp)
      form.setValue('provinsi', data?.provinsi)
      form.setValue('suku', data?.suku)
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
