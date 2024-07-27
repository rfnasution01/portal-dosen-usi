import { useUpdateDokumenMutation } from '@/store/slices/profilAPI'
import { useEffect, useState } from 'react'
import { Bounce, toast } from 'react-toastify'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { AkademikDokumenSchema } from '@/store/schema/akadamik/umumSchema'

export function useAkademikDokumen() {
  const [isShow, setIsShow] = useState<boolean>(false)
  const [isSubmit, setIsSubmit] = useState<boolean>(false)

  const formDokumen = useForm<zod.infer<typeof AkademikDokumenSchema>>({
    resolver: zodResolver(AkademikDokumenSchema),
    defaultValues: {},
  })

  // --- Update Dokumen ---
  const [
    updateDokumen,
    {
      isSuccess: successUpdateDokumen,
      isError: isErrorUpdateDokumen,
      error: errorUpdateDokumen,
      isLoading: loadingUpdateDokumen,
    },
  ] = useUpdateDokumenMutation()

  const handleSubmitDokumen = async (values) => {
    const formData = new FormData()

    formData.append('nomor_karpeg', values?.nomor_karpeg)
    formData.append('npwp', values?.npwp)
    formData.append('nomor_bpjs', values?.nomor_bpjs)
    formData.append(
      'nomor_bpjs_ketenagakerjaan',
      values?.nomor_bpjs_ketenagakerjaan,
    )
    formData.append('nomor_bpjs_pensiun', values?.nomor_bpjs_pensiun)
    formData.append('file_karpeg', values?.file_karpeg)
    formData.append('file_npwp', values?.file_npwp)
    formData.append('file_bpjs', values?.file_bpjs)
    formData.append(
      'file_bpjs_ketenagakerjaan',
      values?.file_bpjs_ketenagakerjaan,
    )
    formData.append('file_bpjs_pensiun', values?.file_bpjs_pensiun)

    try {
      await updateDokumen({ data: formData })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (successUpdateDokumen) {
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
  }, [successUpdateDokumen])

  useEffect(() => {
    if (isErrorUpdateDokumen) {
      const errorMsg = errorUpdateDokumen as { data?: { message?: string } }

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
  }, [isErrorUpdateDokumen, errorUpdateDokumen])

  return {
    isShow,
    isSubmit,
    setIsShow,
    setIsSubmit,
    loadingUpdateDokumen,
    handleSubmitDokumen,
    formDokumen,
  }
}
