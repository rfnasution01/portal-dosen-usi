import { useEffect, useState } from 'react'
import { Bounce, toast } from 'react-toastify'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { AkademikDosenSchema } from '@/store/schema/akadamik/umumSchema'
import { useUpdateDosenMutation } from '@/store/slices/profilAPI'
import { useProfil } from '@/data/useProfil'

export function useAkademikDosen() {
  const { dataProfil } = useProfil()

  const [isShow, setIsShow] = useState<boolean>(false)
  const [isSubmit, setIsSubmit] = useState<boolean>(false)
  const [isEdit, setIsEdit] = useState<boolean>(false)

  const form = useForm<zod.infer<typeof AkademikDosenSchema>>({
    resolver: zodResolver(AkademikDosenSchema),
    defaultValues: {},
  })

  // --- Update Dosen ---
  const [
    updateDosen,
    {
      isSuccess: successUpdate,
      isError: isErrorUpdate,
      error: errorUpdate,
      isLoading: loadingUpdate,
    },
  ] = useUpdateDosenMutation()

  const handleSubmit = async () => {
    const values = form.watch()
    const formData = new FormData()

    formData.append('id_sinta', values?.id_sinta ?? '')
    formData.append('id_orcid', values?.id_orcid ?? '')
    formData.append('id_scopus', values?.id_scopus ?? '')
    formData.append('nidn', values?.nidn ?? '')
    formData.append('nidk', values?.nidk ?? '')
    formData.append('nupn', values?.nupn ?? '')
    formData.append('id_rumpun_ilmu', values?.id_rumpun_ilmu ?? '')
    formData.append('serdos_status', values?.serdos_status ?? '')
    formData.append('serdos_tanggal', values?.serdos_tanggal ?? '')
    formData.append('serdos_nomor', values?.serdos_nomor ?? '')

    if (isEdit && isShow && isSubmit) {
      try {
        await updateDosen({ data: formData })
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
      setIsShow(false)
      setIsSubmit(false)
      setIsEdit(false)
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
      setIsShow(false)
      setIsSubmit(false)
      setIsEdit(false)
    }
  }, [isErrorUpdate, errorUpdate])

  useEffect(() => {
    if (dataProfil) {
      const data = dataProfil?.dosen

      form.setValue('id_orcid', data?.id_orcid)
      form.setValue('id_rumpun_ilmu', data?.id_rumpun_ilmu)
      form.setValue('id_scopus', data?.id_scopus)
      form.setValue('id_sinta', data?.id_sinta)
      form.setValue('nidk', data?.nidk)
      form.setValue('nidn', data?.nidn)
      form.setValue('nupn', data?.nupn)
      form.setValue('orcid', data?.url_orcid)
      form.setValue('rumpun_ilmu', data?.rumpun_ilmu)
      form.setValue('scopus', data?.url_scopus)
      form.setValue('serdos_nomor', data?.serdos_nomor)
      form.setValue('serdos_status', data?.serdos_status)
      form.setValue('serdos_tanggal', data?.serdos_tanggal)
      form.setValue('sinta', data?.url_sinta)
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
