import { Loading } from '@/components/Loading'
import { useAkademikProdi } from '@/data/akademik/useProdi'
import { Link } from 'react-router-dom'

export default function AkademikUmumTentangProdi() {
  const { dataProdi, loadingProdi } = useAkademikProdi()

  return (
    <div className="scrollbar flex h-full w-full flex-col gap-32 overflow-y-auto">
      <div className="scrollbar flex flex-col gap-32 overflow-y-auto rounded-2x bg-white p-32">
        {loadingProdi ? (
          <Loading />
        ) : (
          <>
            <p className="font-sans text-[3.2rem] font-bold text-neutral-black">
              Daftar Program Studi Universitas Simalungun
            </p>
            <div className="flex flex-col gap-12">
              {dataProdi?.map((item, idx) => (
                <div
                  className="flex flex-col gap-12 phones:flex-col phones:items-start"
                  key={idx}
                >
                  <p className="w-3/5 text-[2.4rem] phones:w-full">
                    {idx + 1}. {item?.nama_fakultas}
                  </p>
                  <div className="mx-32 flex w-2/3 flex-col gap-12 phones:w-full">
                    {item?.daftar_program_studi?.map((list, id) => (
                      <div
                        key={id}
                        className="flex items-center justify-between gap-32 text-[2rem] phones:flex-col phones:items-start phones:justify-start phones:gap-12"
                      >
                        <p>{list?.nama_prodi}</p>
                        <div className="flex justify-end phones:w-full phones:justify-start">
                          <Link
                            to={'detail'}
                            onClick={() => {
                              localStorage.setItem('prodiID', list?.id)
                            }}
                            className="rounded-2xl border border-primary-100 px-32 py-12 text-[1.8rem] text-primary-100 hover:bg-primary-100 hover:text-white"
                          >
                            Baca Selengkapnya
                          </Link>
                        </div>
                      </div>
                    ))}
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
