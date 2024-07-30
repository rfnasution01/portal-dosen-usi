import { MainHeader } from './mainHeader'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { MainAside } from './mainAside'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import clsx from 'clsx'
import { useAkademikBimbinganAkademik } from '@/data/akademik/useBimbinganAkademik'
import PengajuanKRS from '@/pages/akademik/bimbingan/PengajuanKRS'

export default function Mainlayout() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { adaDataPengajuanKrs, tindakLanjutiPengajuan } =
    useAkademikBimbinganAkademik()

  return (
    <div className="scrollbar flex h-screen w-full flex-col overflow-y-auto text-[2rem] phones:text-[2.4rem]">
      {/* --- Header --- */}
      <MainHeader setIsOpen={setIsOpen} isOpen={isOpen} />
      <div
        className={clsx('scrollbar flex h-full flex-1 overflow-y-auto', {
          'phones:hidden': isOpen,
        })}
      >
        {/* --- Aside --- */}
        <div className="scrollbar flex h-full w-[40rem] overflow-y-auto  bg-primary-900 p-32 text-neutral-white phones:hidden">
          <MainAside setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
        {/* --- Konten --- */}
        {adaDataPengajuanKrs && !tindakLanjutiPengajuan ? (
          <PengajuanKRS />
        ) : (
          <div className="scrollbar flex h-full w-full flex-1 flex-col gap-32 overflow-y-auto">
            <div className="scrollbar flex h-full flex-col overflow-y-auto p-32">
              <Outlet />
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  )
}
