import 'react-toastify/dist/ReactToastify.css'

import { useProfil } from '@/data/useProfil'
import { ToastContainer } from 'react-toastify'
import { MainHeader } from '@/layouts/rootLayout/MainHeader'
import { FormGantiPasswords } from '@/components/FormComponent'
import { useGantiPassword } from '@/data/useGantiPassword'

export default function GantiPassword() {
  const { dataIdentitas, dataInstitusi, loadingIdentitas, loadingInstitusi } =
    useProfil()

  const {
    form,
    handleSubmit,
    loadingUbahPassword,
    isShow,
    isSubmit,
    setIsShow,
    setIsSubmit,
  } = useGantiPassword()

  const petunjukKeamanan = [
    "Jangan gunakan password yang mudah ditebak seperti 'password','123456', atau informasi pribadi lainnya.",
    'Hindari menggunakan password yang sama dengan akun lain untuk menjaga keamanan akun Anda.',
    'Simpan password Anda di tempat yang aman dan jangan membagikannya kepada orang lain.',
  ]

  return (
    <div className="flex h-screen w-full items-center justify-center text-[2rem] phones:text-[2.4rem]">
      <div className="scrollbar flex h-auto max-h-[98vh] w-[80%] flex-col overflow-y-auto rounded-4x shadow-md phones:h-full phones:max-h-full phones:w-full phones:rounded-none phones:border-0">
        <div className="rounded-tl-4x rounded-tr-4x bg-primary-100 p-32 text-white phones:rounded-none">
          <MainHeader
            institusi={dataInstitusi}
            identitas={dataIdentitas}
            loadingIdentitas={loadingIdentitas}
            loadingInstitusi={loadingInstitusi}
          />
        </div>
        <div className="scrollbar flex h-full w-full overflow-y-auto">
          <div className="flex w-full gap-80 bg-white p-32 phones:flex-col phones:gap-32">
            <div className="flex w-1/2 flex-col gap-12 rounded-2x bg-primary-50 p-32 text-primary-900 phones:w-full">
              <p className="font-roboto text-[3.2rem]">Petunjuk Keamanan</p>
              <ol className="ml-32 list-disc">
                {petunjukKeamanan?.map((item, idx) => (
                  <li className="py-8" style={{ lineHeight: '130%' }} key={idx}>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
            <div className="flex w-1/2 flex-col gap-32 phones:w-full">
              <p className="font-roboto text-[3.2rem]">Form Ubah Password</p>
              <FormGantiPasswords
                form={form}
                isLoading={loadingUbahPassword}
                handleSubmit={handleSubmit}
                setIsShow={setIsShow}
                setIsSubmit={setIsSubmit}
                isShow={isShow}
                isSubmit={isSubmit}
              />
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  )
}
