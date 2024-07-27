import { Loading } from '@/components/Loading'
import { useProfil } from '@/data/useProfil'
import { createMarkup } from '@/utils/usePurify'

export function AkademikTentangDeskripsiSingkat() {
  const { dataInstitusi, loadingInstitusi } = useProfil()

  return (
    <>
      {dataInstitusi?.deskripsi_singkat &&
        dataInstitusi?.deskripsi_singkat !== '' && (
          <div className="flex flex-col gap-12 rounded-2x bg-primary-100 p-32 font-sans text-[2rem] text-neutral-white">
            <p className="font-roboto text-[3.2rem]">Deskripsi Singkat</p>
            {loadingInstitusi ? (
              <Loading />
            ) : (
              <div
                className="article-content"
                dangerouslySetInnerHTML={createMarkup(
                  dataInstitusi?.deskripsi_singkat,
                )}
              />
            )}
          </div>
        )}
    </>
  )
}
