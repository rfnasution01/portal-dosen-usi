import { ConvertHTMLtoText } from '@/components/HTMLtoText'
import { Loading } from '@/components/Loading'
import { useAkademikProdi } from '@/data/akademik/useProdi'
import { AkademikTentangProdiInfo } from '@/features/akademik/umum'
import { convertSlugToText } from '@/utils/formatText'
import { usePathname } from '@/utils/usePathname'

export default function AkademikUmumDetailTentangFakultas() {
  const { lastPathname } = usePathname()
  const { dataProdiDetail, loadingProdiDetail } = useAkademikProdi()

  return (
    <div className="scrollbar flex h-full w-full flex-col gap-32 overflow-y-auto">
      {loadingProdiDetail ? (
        <Loading />
      ) : (
        <div className="scrollbar flex h-full flex-col gap-32 overflow-y-auto">
          <div className="flex items-center justify-between gap-32 border-b border-[#9c9c9c] pb-8">
            <p className="font-roboto text-[3.2rem]">
              {convertSlugToText(lastPathname)} Program Studi{' '}
              {dataProdiDetail?.nama_prodi}
            </p>
          </div>
          <div className="scrollbar flex h-full flex-1 flex-col gap-32 overflow-y-auto">
            {dataProdiDetail && (
              <AkademikTentangProdiInfo
                prodi={dataProdiDetail?.nama_prodi}
                jenjang={dataProdiDetail?.jenjang}
              />
            )}
            {dataProdiDetail?.visi && dataProdiDetail?.visi !== '' && (
              <ConvertHTMLtoText title="Visi" html={dataProdiDetail?.visi} />
            )}
            {dataProdiDetail?.misi && dataProdiDetail?.misi !== '' && (
              <ConvertHTMLtoText title="Misi" html={dataProdiDetail?.misi} />
            )}
            {dataProdiDetail?.tujuan && dataProdiDetail?.tujuan !== '' && (
              <ConvertHTMLtoText
                title="Tujuan"
                html={dataProdiDetail?.tujuan}
              />
            )}
            {dataProdiDetail?.sasaran && dataProdiDetail?.sasaran !== '' && (
              <ConvertHTMLtoText
                title="Sasaran"
                html={dataProdiDetail?.sasaran}
              />
            )}
          </div>
        </div>
      )}
    </div>
  )
}
