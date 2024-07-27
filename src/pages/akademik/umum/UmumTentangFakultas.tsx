import { Loading } from '@/components/Loading'
import { useAkademikFakultas } from '@/data/akademik/useFakultas'
import { Link } from 'react-router-dom'

export default function AkademikUmumTentangFakultas() {
  const { dataFakultas, loadingFakultas } = useAkademikFakultas()

  return (
    <div className="scrollbar flex h-full w-full flex-col gap-32 overflow-y-auto">
      <div className="scrollbar flex flex-col gap-32 overflow-y-auto rounded-2x bg-white p-32">
        {loadingFakultas ? (
          <Loading />
        ) : (
          <>
            <p className="font-sans text-[3.2rem] font-bold text-neutral-black">
              Daftar Fakultas Universitas Simalungun
            </p>
            <div className="flex flex-col gap-12">
              {dataFakultas?.map((item, idx) => (
                <div
                  className="flex items-center gap-32 phones:flex-col phones:items-start"
                  key={idx}
                >
                  <p className="w-3/5 phones:w-full">
                    {idx + 1}. {item?.nama_fak}
                  </p>
                  <div className="flex w-2/5 phones:w-full">
                    <Link
                      to={'detail'}
                      onClick={() => {
                        localStorage.setItem('fakultasID', item?.id)
                      }}
                      className="rounded-2xl border border-primary-100 px-32 py-12 text-[1.8rem] text-primary-100 hover:bg-primary-100 hover:text-white"
                    >
                      Baca Selengkapnya
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
