import { FormLogin } from '@/components/FormComponent'
import { useLogin } from '@/data/useLogin'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import BgImg from '@/assets/imgs/danau-toba.jpg'

export default function LoginLayout() {
  const { form, angka1, angka2, loadingLogin, handleSubmit } = useLogin()

  return (
    <div className="relative flex h-screen w-full items-center justify-center text-[2rem] phones:text-[2.4rem]">
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BgImg})` }}
      />
      <div className="relative z-10 flex w-4/12 rounded-4x bg-white bg-opacity-20 p-32 phones:w-5/6 phones:p-16">
        <div className="flex w-full flex-col gap-32 rounded-3x bg-white p-48 shadow-lg phones:w-full">
          <div className="flex flex-col items-center justify-center gap-12">
            <img
              src="https://administrator.universitassimalungun.ac.id/assets/img/aplikasi/logo-usi_(1).png"
              className="w-[12rem]"
              alt="Logo"
              loading="lazy"
            />
            <p className="text-center font-sans text-[3rem] text-black-100">
              Portal Akademik Dosen
            </p>
          </div>
          <FormLogin
            form={form}
            isLoading={loadingLogin}
            handleSubmit={handleSubmit}
            angka1={angka1}
            angka2={angka2}
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}
