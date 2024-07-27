import { useEffect, useState } from 'react'
import { Bounce, toast } from 'react-toastify'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { AkademikDosenSchema } from '@/store/schema/akadamik/umumSchema'
import { useUpdateDosenMutation } from '@/store/slices/profilAPI'

export function useAkademikDosen() {
  const [isShow, setIsShow] = useState<boolean>(false)
  const [isSubmit, setIsSubmit] = useState<boolean>(false)

  const formDosen = useForm<zod.infer<typeof AkademikDosenSchema>>({
    resolver: zodResolver(AkademikDosenSchema),
    defaultValues: {},
  })

  // --- Update Dosen ---
  const [
    updateDosen,
    {
      isSuccess: successUpdateDosen,
      isError: isErrorUpdateDosen,
      error: errorUpdateDosen,
      isLoading: loadingUpdateDosen,
    },
  ] = useUpdateDosenMutation()

  const handleSubmitDosen = async (values) => {
    const formData = new FormData()

    formData.append('id_sinta', values?.id_sinta)
    formData.append('id_orcid', values?.id_orcid)
    formData.append('id_scopus', values?.id_scopus)
    formData.append('nidn', values?.nidn)
    formData.append('nidk', values?.nidk)
    formData.append('nupn', values?.nupn)
    formData.append('id_rumpun_ilmu', values?.id_rumpun_ilmu)
    formData.append('serdos_status', values?.serdos_status)
    formData.append('serdos_tanggal', values?.serdos_tanggal)
    formData.append('serdos_nomor', values?.serdos_nomor)

    try {
      await updateDosen({ data: formData })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (successUpdateDosen) {
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
  }, [successUpdateDosen])

  useEffect(() => {
    if (isErrorUpdateDosen) {
      const errorMsg = errorUpdateDosen as { data?: { message?: string } }

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
  }, [isErrorUpdateDosen, errorUpdateDosen])

  return {
    isShow,
    isSubmit,
    setIsShow,
    setIsSubmit,
    loadingUpdateDosen,
    handleSubmitDosen,
    formDosen,
  }
}
