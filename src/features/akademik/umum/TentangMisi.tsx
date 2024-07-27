import { Loading } from '@/components/Loading'
import { useProfil } from '@/data/useProfil'
import { createMarkup } from '@/utils/usePurify'

export function AkademikTentangMisi() {
  const { dataInstitusi, loadingInstitusi } = useProfil()

  return (
    <div className="flex flex-col gap-12 rounded-2x bg-primary-100 p-32 font-sans text-[2rem] text-neutral-white">
      <p className="font-roboto text-[3.2rem]">Misi</p>
      {loadingInstitusi ? (
        <Loading />
      ) : (
        <div
          className="article-content"
          style={{ lineHeight: '130%' }}
          dangerouslySetInnerHTML={createMarkup(dataInstitusi?.misi)}
        />
      )}
    </div>
  )
}
