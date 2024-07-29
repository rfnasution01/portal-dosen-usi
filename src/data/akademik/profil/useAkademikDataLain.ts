import { useEffect, useState } from 'react'
import { Bounce, toast } from 'react-toastify'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { AkademikDataLainSchema } from '@/store/schema/akadamik/umumSchema'
import { useUpdateDataLainMutation } from '@/store/slices/profilAPI'
import { useProfil } from '@/data/useProfil'

export function useAkademikDataLain() {
  const { dataProfil } = useProfil()

  const [isShow, setIsShow] = useState<boolean>(false)
  const [isSubmit, setIsSubmit] = useState<boolean>(false)
  const [isEdit, setIsEdit] = useState<boolean>(false)

  const form = useForm<zod.infer<typeof AkademikDataLainSchema>>({
    resolver: zodResolver(AkademikDataLainSchema),
    defaultValues: {},
  })

  // --- Update DanLain ---
  const [
    updateDanLain,
    {
      isSuccess: successUpdate,
      isError: isErrorUpdate,
      error: errorUpdate,
      isLoading: loadingUpdate,
    },
  ] = useUpdateDataLainMutation()

  const handleSubmit = async () => {
    const values = form.watch()
    const formData = new FormData()

    formData.append('id_golongan_darah', values?.id_golongan_darah ?? '-')
    formData.append('tinggi_badan', values?.tinggi_badan ?? '-')
    formData.append('berat_badan', values?.berat_badan ?? '-')
    formData.append('id_hobby', values?.id_hobby ?? '-')
    formData.append('file', values?.file ?? '-')

    if (isEdit && isShow && isSubmit) {
      try {
        await updateDanLain({ data: formData })
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
      const data = dataProfil?.datalain

      console.log(data)

      form.setValue('berat_badan', data?.berat_badan)
      form.setValue('file', data?.file_tanda_tangan)
      form.setValue('golongan_darah', data?.golongan_darah)
      form.setValue('id_golongan_darah', data?.id_golongan_darah)
      form.setValue('id_hobby', data?.id_hobby)
      form.setValue('golongan_darah', data?.golongan_darah)
      form.setValue('hobby', data?.Hobby)
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
