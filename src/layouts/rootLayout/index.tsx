import 'react-toastify/dist/ReactToastify.css'

import { useProfil } from '@/data/useProfil'
import { ToastContainer } from 'react-toastify'
import { useState } from 'react'
import { MainHeader } from './MainHeader'
import { MainAplikasi } from './MainAplikasi'
import { Link } from 'react-router-dom'
import { convertToSlug } from '@/utils/formatText'
import BgImg from '@/assets/imgs/danau-toba.jpg'

export default function RootLayout() {
  const {
    dataAplikasi,
    dataIdentitas,
    dataInstitusi,
    loadingAplikasi,
    loadingIdentitas,
    loadingInstitusi,
    dataProfil,
  } = useProfil()

  const [fitur, setFitur] = useState<string>()
  const [route, setRoute] = useState<string>()

  return (
    <div className="relative flex h-screen w-full items-center justify-center text-[2rem] phones:text-[2.4rem]">
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BgImg})` }}
      />
      <div className="scrollbar relative z-10 flex h-auto max-h-[98vh] w-[70%] flex-col overflow-y-auto rounded-4x bg-white bg-opacity-25 p-32 shadow-md phones:h-full phones:max-h-full phones:w-full phones:rounded-none phones:border-0">
        <div className="rounded-tl-3x rounded-tr-3x bg-primary-100 p-32 text-white phones:rounded-none">
          <MainHeader
            institusi={dataInstitusi}
            identitas={dataIdentitas}
            loadingIdentitas={loadingIdentitas}
            loadingInstitusi={loadingInstitusi}
          />
        </div>
        <div className="scrollbar flex h-full w-full overflow-y-auto rounded-bl-3x rounded-br-3x phones:flex-col">
          <div className="scrollbar h-full w-2/3 overflow-y-auto bg-[#f5f5f5] p-48 phones:w-full">
            <MainAplikasi
              setFitur={setFitur}
              aplikasi={dataAplikasi}
              loadingAplikasi={loadingAplikasi}
              fitur={fitur}
              setRoute={setRoute}
            />
          </div>
          <div className="w-1/3 bg-[#eeeeee] p-48 phones:w-full">
            {fitur && route && (
              <div className="flex flex-col gap-32">
                <div className="flex flex-col gap-12">
                  <p className="text-warna-dark font-roboto text-[3.2rem]">
                    Data Role
                  </p>
                  {fitur && (
                    <div
                      dangerouslySetInnerHTML={{ __html: fitur }}
                      className="article-content"
                    />
                  )}
                </div>
                <Link
                  to={convertToSlug(route)}
                  className="flex flex-col gap-12 rounded-2xl bg-white p-32 text-slate-900 shadow hover:bg-primary-900 hover:text-white hover:opacity-90"
                >
                  <p className="text-[2.8rem] font-semibold">Dosen</p>
                  <p className="">{dataProfil?.kepegawaian?.unit_kerja}</p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  )
}
