import { ConvertHTMLtoText } from '@/components/HTMLtoText'
import { Loading } from '@/components/Loading'
import { useProfil } from '@/data/useProfil'
import { AkademikTentangInstitusiInfo } from '@/features/akademik/umum'
import { convertSlugToText } from '@/utils/formatText'
import { usePathname } from '@/utils/usePathname'

export default function AkademikUmumTentangInstitusi() {
  const { lastPathname } = usePathname()
  const { dataInstitusi, loadingInstitusi } = useProfil()

  return (
    <div className="scrollbar flex h-full w-full flex-col gap-32 overflow-y-auto">
      <div className="scrollbar flex h-full flex-col gap-32 overflow-y-auto">
        <div className="flex items-center justify-between gap-32 border-b border-[#9c9c9c] pb-8">
          <p className="font-roboto text-[3.2rem]">
            {convertSlugToText(lastPathname)}
          </p>
        </div>
        <div className="scrollbar flex h-full flex-1 flex-col gap-32 overflow-y-auto">
          {loadingInstitusi ? (
            <Loading />
          ) : (
            <>
              <AkademikTentangInstitusiInfo />
              {dataInstitusi?.visi && dataInstitusi?.visi !== '' && (
                <ConvertHTMLtoText html={dataInstitusi?.visi} title="Visi" />
              )}
              {dataInstitusi?.misi && dataInstitusi?.misi !== '' && (
                <ConvertHTMLtoText html={dataInstitusi?.misi} title="Misi" />
              )}
              {dataInstitusi?.tujuan && dataInstitusi?.tujuan !== '' && (
                <ConvertHTMLtoText
                  html={dataInstitusi?.tujuan}
                  title="Tujuan"
                />
              )}
              {dataInstitusi?.deskripsi_singkat &&
                dataInstitusi?.deskripsi_singkat !== '' && (
                  <ConvertHTMLtoText
                    html={dataInstitusi?.deskripsi_singkat}
                    title="Deskripsi Singkat"
                  />
                )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
