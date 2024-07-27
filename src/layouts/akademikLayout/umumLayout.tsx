import { convertSlugToText } from '@/utils/formatText'
import { usePathname } from '@/utils/usePathname'
import { ButtonGroup } from './buttonGroup'
import { JadwalKuliahInfo } from '@/components/JadwalKuliahInfo'
import { UmumTabs } from './umumtab'
import { useAkademikKepegawaian } from '@/data/akademik/umum'
import { AkademikProfilPage } from '@/pages/akademik/umum/profil'
import { useState } from 'react'

export default function AkademikUmumLayout() {
  const { lastPathname } = usePathname()
  const { formKepegawaian, handleSubmitKepegawaian } = useAkademikKepegawaian()

  const tab = [
    'Kepegawaian',
    'Dosen',
    'Alamat Domisili & Kontak',
    'Kependudukan',
    'Rekening Bank',
    'Dokumen',
    'Lain-lain',
  ]

  const [menu, setMenu] = useState<string>(tab?.[0])

  return (
    <div className="scrollbar flex h-full w-full flex-col gap-32 overflow-y-auto p-32">
      <div className="scrollbar flex h-full flex-col gap-32 overflow-y-auto">
        <div className="flex items-center justify-between gap-32 border-b border-[#9c9c9c] pb-8">
          <p className="font-roboto text-[3.2rem]">
            {convertSlugToText(lastPathname)}
          </p>
          <ButtonGroup
            form={formKepegawaian}
            handleSubmitKepegawaian={handleSubmitKepegawaian}
          />
        </div>
        <JadwalKuliahInfo />
        <div className="flex">
          <UmumTabs menu={menu} setMenu={setMenu} menuList={tab} />
        </div>
        <AkademikProfilPage menu={menu} />
      </div>
    </div>
  )
}
