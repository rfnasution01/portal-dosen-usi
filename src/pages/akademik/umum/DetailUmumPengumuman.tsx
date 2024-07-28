import { Loading } from '@/components/Loading'
import { useAkademikPengumuman } from '@/data/akademik/usePengumuman'
import { createMarkup } from '@/utils/usePurify'
import dayjs from 'dayjs'
import 'dayjs/locale/id'
import { Link } from 'react-router-dom'

export default function AkademikUmumTentangPengumuman() {
  const {
    dataPengumumanDetail,
    loadingPengumumanDetail,
    dataPengumumanRelated,
  } = useAkademikPengumuman()

  console.log(dataPengumumanDetail)

  return (
    <div className="scrollbar flex h-full w-full flex-col gap-32 overflow-y-auto">
      <div className="scrollbar flex h-full flex-col gap-32 overflow-y-auto">
        {loadingPengumumanDetail ? (
          <Loading />
        ) : (
          <div className="flex flex-col gap-24 rounded-2x bg-white p-32 text-neutral-black">
            {dataPengumumanDetail ? (
              <>
                <p className="text-[2.4rem] font-bold text-primary-100">
                  {dataPengumumanDetail?.judul}
                </p>
                <div className="flex items-center gap-32">
                  <div className="flex flex-col gap-4">
                    <p className="line-clamp-3 text-[1.8rem] text-[#6C6C6C]">
                      Diterbitkan pada tanggal
                    </p>
                    <p>
                      {dayjs(dataPengumumanDetail?.tanggal)
                        .locale('id')
                        .format('DD MMMM YYYY')}
                    </p>
                  </div>
                </div>
                <div
                  className="article-content"
                  dangerouslySetInnerHTML={createMarkup(
                    dataPengumumanDetail?.isi,
                  )}
                />
                <p className="text-[2.4rem] font-bold text-primary-100">
                  Pengumuman Lainnya
                </p>
                <div className="grid grid-cols-12 gap-32">
                  {dataPengumumanRelated?.slice(0, 3)?.map((item, idx) => (
                    <Link
                      to={`/akademik/umum/pengumuman/${item?.judul}`}
                      onClick={() => {
                        localStorage.setItem('pengumumanID', item?.id)
                      }}
                      className="col-span-4 h-full phones:col-span-12"
                      key={idx}
                    >
                      <div className="flex h-full flex-col gap-12 font-sans">
                        <p className="text-[1.8rem] text-[#6C6C6C]">
                          {dayjs(item?.tanggal)
                            .locale('id')
                            .format('DD MMMM YYYY')}
                        </p>
                        <p className="text-[2.4rem] font-bold text-primary-100">
                          {item?.judul}
                        </p>
                        <p className="line-clamp-3 text-[1.8rem] text-[#6C6C6C]">
                          {item?.isi}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <p>Data tidak ditemukan</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
