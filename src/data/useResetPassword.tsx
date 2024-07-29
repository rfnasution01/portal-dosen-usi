import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { Bounce, toast } from 'react-toastify'
import { useResetPasswordMutation } from '@/store/slices/loginAPI'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { ResetPasswordSchema } from '@/store/schema/loginSchema'

export function useResetPassword() {
  const navigate = useNavigate()

  const [isShow, setIsShow] = useState<boolean>(false)
  const [isSubmit, setIsSubmit] = useState<boolean>(false)

  const form = useForm<zod.infer<typeof ResetPasswordSchema>>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {},
  })

  // --- Create Reset ---
  const [
    createResetPassword,
    {
      isError: isErrorResetPassword,
      error: errorResetPassword,
      isLoading: isLoadingResetPassword,
      isSuccess: isSuccessResetPassword,
    },
  ] = useResetPasswordMutation()

  const handleSubmit = async () => {
    const body = {
      token: Cookies.get('token'),
      new_password: 'admin1123',
    }

    console.log({ body })

    if (isShow && isSubmit) {
      try {
        await createResetPassword({ data: body })
      } catch (error) {
        console.error(error)
      }
    }
  }

  useEffect(() => {
    if (isSuccessResetPassword) {
      toast.success('Reset password berhasil. Silahkan login kembali', {
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
      toast.success('Password baru anda: admin123', {
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
      form.reset()
      setTimeout(() => {
        Cookies.remove('token')
        navigate(`/login`)
      }, 5000)
    }
  }, [isSuccessResetPassword])

  useEffect(() => {
    if (isErrorResetPassword) {
      const errorMsg = errorResetPassword as { data?: { message?: string } }

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
  }, [isErrorResetPassword, errorResetPassword])

  return {
    form,
    handleSubmit,
    loadingResetPassword: isLoadingResetPassword,
    isShow,
    isSubmit,
    setIsShow,
    setIsSubmit,
  }
}
