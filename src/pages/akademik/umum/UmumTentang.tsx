import {
  AkademikTentangDeskripsiSingkat,
  AkademikTentangInstitusiInfo,
  AkademikTentangMisi,
  AkademikTentangTujuan,
  AkademikTentangVisi,
} from '@/features/akademik/umum'
import { convertSlugToText } from '@/utils/formatText'
import { usePathname } from '@/utils/usePathname'

export default function AkademikUmumTentang() {
  const { lastPathname } = usePathname()

  return (
    <div className="scrollbar flex h-full w-full flex-col gap-32 overflow-y-auto">
      <div className="scrollbar flex h-full flex-col gap-32 overflow-y-auto">
        <div className="flex items-center justify-between gap-32 border-b border-[#9c9c9c] pb-8">
          <p className="font-roboto text-[3.2rem]">
            {convertSlugToText(lastPathname)}
          </p>
        </div>
        <div className="scrollbar flex h-full flex-1 flex-col gap-32 overflow-y-auto">
          <AkademikTentangInstitusiInfo />
          <AkademikTentangVisi />
          <AkademikTentangMisi />
          <AkademikTentangTujuan />
          <AkademikTentangDeskripsiSingkat />
        </div>
      </div>
    </div>
  )
}
