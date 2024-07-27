import { useEffect, useState } from 'react'
import { Bounce, toast } from 'react-toastify'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { AkademikDataLainSchema } from '@/store/schema/akadamik/umumSchema'
import { useUpdateDataLainMutation } from '@/store/slices/profilAPI'

export function useAkademikDataLain() {
  const [isShow, setIsShow] = useState<boolean>(false)
  const [isSubmit, setIsSubmit] = useState<boolean>(false)

  const formDataLain = useForm<zod.infer<typeof AkademikDataLainSchema>>({
    resolver: zodResolver(AkademikDataLainSchema),
    defaultValues: {},
  })

  // --- Update DanLain ---
  const [
    updateDanLain,
    {
      isSuccess: successUpdateDanLain,
      isError: isErrorUpdateDanLain,
      error: errorUpdateDanLain,
      isLoading: loadingUpdateDanLain,
    },
  ] = useUpdateDataLainMutation()

  const handleSubmitDanLain = async (values) => {
    const formData = new FormData()

    formData.append('id_golongan_darah', values?.id_golongan_darah)
    formData.append('tinggi_badan', values?.tinggi_badan)
    formData.append('berat_badan', values?.berat_badan)
    formData.append('id_hobby', values?.id_hobby)
    formData.append('file', values?.file)

    try {
      await updateDanLain({ data: formData })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (successUpdateDanLain) {
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
  }, [successUpdateDanLain])

  useEffect(() => {
    if (isErrorUpdateDanLain) {
      const errorMsg = errorUpdateDanLain as { data?: { message?: string } }

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
  }, [isErrorUpdateDanLain, errorUpdateDanLain])

  return {
    isShow,
    isSubmit,
    setIsShow,
    setIsSubmit,
    loadingUpdateDanLain,
    handleSubmitDanLain,
    formDataLain,
  }
}
