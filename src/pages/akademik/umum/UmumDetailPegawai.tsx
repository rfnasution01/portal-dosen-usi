import { ComingSoonPage } from '@/routes/loadables'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'
import AkademikDetailKepegawaian from './profil/DetailKepegawaian'
import AkademikDetailDosen from './profil/DetailDosen'
import AkademikDetailDomisili from './profil/DetailDomisili'

export default function AkademikUmumLayout() {
  const [menu, setMenu] = useState<string>('Kepegawaian')

  const tab = [
    'Kepegawaian',
    'Dosen',
    'Alamat Domisili & Kontak',
    'Kependudukan',
    'Rekening Bank',
    'Dokumen',
    'Lain-lain',
  ]

  return (
    <>
      {menu === 'Kepegawaian' ? (
        <AkademikDetailKepegawaian setMenu={setMenu} menu={menu} tabs={tab} />
      ) : menu === 'Dosen' ? (
        <AkademikDetailDosen setMenu={setMenu} menu={menu} tabs={tab} />
      ) : menu === 'Alamat Domisili & Kontak' ? (
        <AkademikDetailDomisili setMenu={setMenu} menu={menu} tabs={tab} />
      ) : (
        <ComingSoonPage />
      )}
      <ToastContainer />
    </>
  )
}
