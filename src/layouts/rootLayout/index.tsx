import 'react-toastify/dist/ReactToastify.css'

import { useProfil } from '@/data/useProfil'
import { ToastContainer } from 'react-toastify'
import { useState } from 'react'
import { MainHeader } from './MainHeader'
import { MainAplikasi } from './MainAplikasi'
import { Link } from 'react-router-dom'
import { convertToSlug } from '@/utils/formatText'

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
          <div className="scrollbar h-full w-2/3 overflow-y-auto bg-white p-48 phones:w-full">
            <MainAplikasi
              setFitur={setFitur}
              aplikasi={dataAplikasi}
              loadingAplikasi={loadingAplikasi}
              fitur={fitur}
              setRoute={setRoute}
            />
          </div>
          <div className="w-1/3 bg-white p-48 phones:hidden phones:w-full">
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
                  className="flex flex-col gap-12 rounded-2xl bg-primary-900 p-32 text-neutral-white shadow hover:opacity-90"
                >
                  <p className="text-[2.8rem]">
                    {dataProfil?.kepegawaian?.hubungan_kerja}
                  </p>
                  <p>{dataProfil?.kepegawaian?.unit_kerja}</p>
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
