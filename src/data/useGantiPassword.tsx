import { UbahPasswordSchema } from '@/store/schema/loginSchema'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import Cookies from 'js-cookie'
import { Bounce, toast } from 'react-toastify'
import { useUpdatePasswordMutation } from '@/store/slices/loginAPI'

export function useGantiPassword() {
  const navigate = useNavigate()

  const [isShow, setIsShow] = useState<boolean>(false)
  const [isSubmit, setIsSubmit] = useState<boolean>(false)

  const form = useForm<zod.infer<typeof UbahPasswordSchema>>({
    resolver: zodResolver(UbahPasswordSchema),
    defaultValues: {},
  })

  // --- Create Ubah ---
  const [
    createUbahPassword,
    {
      isError: isErrorUbahPassword,
      error: errorUbahPassword,
      isLoading: isLoadingUbahPassword,
      isSuccess: isSuccessUbahPassword,
    },
  ] = useUpdatePasswordMutation()

  const handleSubmit = async () => {
    const values = form.watch()

    const body = {
      old_password: values?.old_password,
      new_password: values?.new_password,
    }

    if (isShow && isSubmit) {
      try {
        await createUbahPassword({ data: body })
      } catch (error) {
        console.error(error)
      }
    }
  }

  useEffect(() => {
    if (isSuccessUbahPassword) {
      toast.success('Ubah password berhasil. Silahkan login kembali', {
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
      setTimeout(() => {
        Cookies.remove('token')
        navigate(`/login`)
      }, 3000)
    }
  }, [isSuccessUbahPassword])

  useEffect(() => {
    if (isErrorUbahPassword) {
      const errorMsg = errorUbahPassword as { data?: { message?: string } }

      toast.error(`${errorMsg?.data?.message ?? 'Terjadi Kesalahan'}`, {
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
  }, [isErrorUbahPassword, errorUbahPassword])

  return {
    form,
    handleSubmit,
    loadingUbahPassword: isLoadingUbahPassword,
    isShow,
    isSubmit,
    setIsShow,
    setIsSubmit,
  }
}
