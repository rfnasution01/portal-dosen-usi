import 'react-toastify/dist/ReactToastify.css'

import { useProfil } from '@/data/useProfil'
import { ToastContainer } from 'react-toastify'
import { useState } from 'react'
import { MainHeader } from './MainHeader'
import { MainAplikasi } from './MainAplikasi'

export default function RootLayout() {
  const {
    dataAplikasi,
    dataIdentitas,
    dataInstitusi,
    loadingAplikasi,
    loadingIdentitas,
    loadingInstitusi,
  } = useProfil()

  const [fitur, setFitur] = useState<string>()

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
            />
          </div>
          <div className="w-1/3 bg-white p-48 phones:hidden phones:w-full">
            <div className="flex flex-col gap-0">
              <p className="text-warna-dark font-roboto text-[3.2rem]">
                Keterangan
              </p>
              {fitur && (
                <div
                  dangerouslySetInnerHTML={{ __html: fitur }}
                  className="article-content"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  )
}
