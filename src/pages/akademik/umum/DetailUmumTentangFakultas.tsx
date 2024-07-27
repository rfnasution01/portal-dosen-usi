import { ConvertHTMLtoText } from '@/components/HTMLtoText'
import { Loading } from '@/components/Loading'
import { useAkademikFakultas } from '@/data/akademik/useFakultas'
import { convertSlugToText } from '@/utils/formatText'
import { usePathname } from '@/utils/usePathname'

export default function AkademikUmumDetailTentangFakultas() {
  const { lastPathname } = usePathname()
  const { dataFakultasDetail, loadingFakultasDetail } = useAkademikFakultas()

  return (
    <div className="scrollbar flex h-full w-full flex-col gap-32 overflow-y-auto">
      {loadingFakultasDetail ? (
        <Loading />
      ) : (
        <div className="scrollbar flex h-full flex-col gap-32 overflow-y-auto">
          <div className="flex items-center justify-between gap-32 border-b border-[#9c9c9c] pb-8">
            <p className="font-roboto text-[3.2rem]">
              {convertSlugToText(lastPathname)} {dataFakultasDetail?.nama_fak}
            </p>
          </div>
          <div className="scrollbar flex h-full flex-1 flex-col gap-32 overflow-y-auto">
            {dataFakultasDetail?.visi && dataFakultasDetail?.visi !== '' && (
              <ConvertHTMLtoText title="Visi" html={dataFakultasDetail?.visi} />
            )}
            {dataFakultasDetail?.misi && dataFakultasDetail?.misi !== '' && (
              <ConvertHTMLtoText title="Misi" html={dataFakultasDetail?.misi} />
            )}
            {dataFakultasDetail?.tujuan &&
              dataFakultasDetail?.tujuan !== '' && (
                <ConvertHTMLtoText
                  title="Tujuan"
                  html={dataFakultasDetail?.tujuan}
                />
              )}
            {dataFakultasDetail?.sasaran &&
              dataFakultasDetail?.sasaran !== '' && (
                <ConvertHTMLtoText
                  title="Sasaran"
                  html={dataFakultasDetail?.sasaran}
                />
              )}
            <ConvertHTMLtoText
              title={`Program Studi ${dataFakultasDetail?.nama_fak}`}
              html={dataFakultasDetail?.sasaran}
            />
          </div>
        </div>
      )}
    </div>
  )
}
