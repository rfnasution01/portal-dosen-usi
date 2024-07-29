import { useUpdateDokumenMutation } from '@/store/slices/profilAPI'
import { useEffect, useState } from 'react'
import { Bounce, toast } from 'react-toastify'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { AkademikDokumenSchema } from '@/store/schema/akadamik/umumSchema'
import { useProfil } from '@/data/useProfil'

export function useAkademikDokumen() {
  const { dataProfil } = useProfil()

  const [isShow, setIsShow] = useState<boolean>(false)
  const [isSubmit, setIsSubmit] = useState<boolean>(false)
  const [isEdit, setIsEdit] = useState<boolean>(false)

  const form = useForm<zod.infer<typeof AkademikDokumenSchema>>({
    resolver: zodResolver(AkademikDokumenSchema),
    defaultValues: {},
  })

  // --- Update Dokumen ---
  const [
    updateDokumen,
    {
      isSuccess: successUpdate,
      isError: isErrorUpdate,
      error: errorUpdate,
      isLoading: loadingUpdate,
    },
  ] = useUpdateDokumenMutation()

  const handleSubmit = async () => {
    const values = form.watch()
    const formData = new FormData()

    formData.append('nomor_karpeg', values?.nomor_karpeg ?? '-')
    formData.append('npwp', values?.npwp ?? '-')
    formData.append('nomor_bpjs', values?.nomor_bpjs ?? '-')
    formData.append(
      'nomor_bpjs_ketenagakerjaan',
      values?.nomor_bpjs_ketenagakerjaan ?? '-',
    )
    formData.append('nomor_bpjs_pensiun', values?.nomor_bpjs_pensiun ?? '-')
    formData.append('file_karpeg', values?.file_karpeg ?? '-')
    formData.append('file_npwp', values?.file_npwp ?? '-')
    formData.append('file_bpjs', values?.file_bpjs ?? '-')
    formData.append(
      'file_bpjs_ketenagakerjaan',
      values?.file_bpjs_ketenagakerjaan ?? '-',
    )
    formData.append('file_bpjs_pensiun', values?.file_bpjs_pensiun ?? '-')

    if (isEdit && isShow && isSubmit) {
      try {
        await updateDokumen({ data: formData })
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
      const data = dataProfil?.dokumen

      form.setValue('file_bpjs', data?.file_bpjs)
      form.setValue(
        'file_bpjs_ketenagakerjaan',
        data?.file_bpjs_ketenagakerjaan,
      )
      form.setValue('file_bpjs_pensiun', data?.file_bpjs_pensiun)
      form.setValue('file_karpeg', data?.file_karpeg)
      form.setValue('file_npwp', data?.file_npwp)
      form.setValue('nomor_bpjs', data?.nomor_karpeg)
      form.setValue(
        'nomor_bpjs_ketenagakerjaan',
        data?.nomor_bpjs_ketenagakerjaan,
      )
      form.setValue('nomor_bpjs_pensiun', data?.nomor_bpjs_pensiun)
      form.setValue('nomor_karpeg', data?.nomor_karpeg)
      form.setValue('npwp', data?.npwp)
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
