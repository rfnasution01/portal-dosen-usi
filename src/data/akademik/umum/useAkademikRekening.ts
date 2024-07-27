import { useUpdateRekeningMutation } from '@/store/slices/profilAPI'
import { useEffect, useState } from 'react'
import { Bounce, toast } from 'react-toastify'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { AkademikRekeningSchema } from '@/store/schema/akadamik/umumSchema'

export function useAkademikRekening() {
  const [isShow, setIsShow] = useState<boolean>(false)
  const [isSubmit, setIsSubmit] = useState<boolean>(false)

  const formRekening = useForm<zod.infer<typeof AkademikRekeningSchema>>({
    resolver: zodResolver(AkademikRekeningSchema),
    defaultValues: {},
  })

  // --- Update Rekening ---
  const [
    updateRekening,
    {
      isSuccess: successUpdateRekening,
      isError: isErrorUpdateRekening,
      error: errorUpdateRekening,
      isLoading: loadingUpdateRekening,
    },
  ] = useUpdateRekeningMutation()

  const handleSubmitRekening = async (values) => {
    const formData = new FormData()

    formData.append('id_bank', values?.id_bank)
    formData.append('nomor_rekening', values?.nomor_rekening)
    formData.append('nama_rekening', values?.nama_rekening)
    formData.append('cabang_bank', values?.cabang_bank)
    formData.append('file', values?.file)

    try {
      await updateRekening({ data: formData })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (successUpdateRekening) {
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
  }, [successUpdateRekening])

  useEffect(() => {
    if (isErrorUpdateRekening) {
      const errorMsg = errorUpdateRekening as { data?: { message?: string } }

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
  }, [isErrorUpdateRekening, errorUpdateRekening])

  return {
    isShow,
    isSubmit,
    setIsShow,
    setIsSubmit,
    loadingUpdateRekening,
    handleSubmitRekening,
    formRekening,
  }
}
