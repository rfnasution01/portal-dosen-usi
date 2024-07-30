import { useUpdateRekeningMutation } from '@/store/slices/profilAPI'
import { useEffect, useState } from 'react'
import { Bounce, toast } from 'react-toastify'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { AkademikRekeningSchema } from '@/store/schema/akadamik/umumSchema'
import { useProfil } from '@/data/useProfil'

export function useAkademikRekening() {
  const { dataProfil } = useProfil()
  const [file, setFile] = useState<File | null>(null)
  const [fileUrl, setFileUrl] = useState<string | null>(null)

  const [isShow, setIsShow] = useState<boolean>(false)
  const [isSubmit, setIsSubmit] = useState<boolean>(false)
  const [isEdit, setIsEdit] = useState<boolean>(false)

  const form = useForm<zod.infer<typeof AkademikRekeningSchema>>({
    resolver: zodResolver(AkademikRekeningSchema),
    defaultValues: {},
  })

  // --- Update Rekening ---
  const [
    updateRekening,
    {
      isSuccess: successUpdate,
      isError: isErrorUpdate,
      error: errorUpdate,
      isLoading: loadingUpdate,
    },
  ] = useUpdateRekeningMutation()

  const handleSubmit = async () => {
    const values = form.watch()

    const formData = new FormData()

    formData.append('id_bank', values?.id_bank ?? '')
    formData.append('nomor_rekening', values?.nomor_rekening ?? '')
    formData.append('nama_rekening', values?.nama_rekening ?? '')
    formData.append('cabang_bank', values?.cabang_bank ?? '')
    formData.append('file', file ?? '')

    if (isEdit && isShow && isSubmit) {
      try {
        await updateRekening({ data: formData })
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
      const data = dataProfil?.rekening

      form.setValue('bank', data?.nama_bank)
      form.setValue('cabang_bank', data?.cabang_bank)
      form.setValue('file', data?.file_rekening)
      form.setValue('id_bank', data?.id_jenis_bank)
      form.setValue('nama_rekening', data?.nama_rekening)
      form.setValue('nomor_rekening', data?.nomor_rekening)
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
    file,
    setFile,
    fileUrl,
    setFileUrl,
  }
}
