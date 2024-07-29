import { Loading } from '@/components/Loading'
import { MenubarPerPage } from '@/components/Menubar/MenubarPerPage'
import { Pagination } from '@/components/Pagination'
import { Searching } from '@/components/Searching'
import { useAkademikPengumuman } from '@/data/akademik/usePengumuman'
import dayjs from 'dayjs'
import 'dayjs/locale/id'
import { Link } from 'react-router-dom'

export default function AkademikUmumPengumuman() {
  const {
    dataPengumuman,
    loadingPengumuman,
    pageNumber,
    pageSize,
    search,
    setPageNumber,
    setPageSize,
    setSearch,
    meta,
  } = useAkademikPengumuman()

  return (
    <div className="scrollbar flex h-full w-full flex-col gap-32 overflow-y-auto">
      <div className="scrollbar flex h-full flex-col gap-32 overflow-y-auto rounded-2x bg-primary-50 p-32 text-primary-900">
        <p className="font-sans text-[3.2rem] font-bold text-neutral-black">
          Daftar Pengumuman Dosen
        </p>
        <div className="flex justify-end">
          <Searching
            setPageNumber={setPageNumber}
            setSearch={setSearch}
            className="w-1/3 phones:w-full"
            search={search}
          />
        </div>
        <div className="scrollbar flex h-full w-full flex-1 overflow-y-auto">
          {loadingPengumuman ? (
            <Loading />
          ) : dataPengumuman?.length > 0 ? (
            <div className="grid grid-cols-12 gap-32">
              {dataPengumuman?.map((item, idx) => (
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
                      {dayjs(item?.tanggal).locale('id').format('DD MMMM YYYY')}
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
          ) : (
            <p>Data tidak ditemukan.</p>
          )}
        </div>

        {dataPengumuman?.length > 0 && (
          <div className="flex justify-end">
            <div className="flex items-center gap-32">
              <MenubarPerPage
                pageSize={pageSize}
                setPageSize={setPageSize}
                isCard
              />

              <Pagination
                pageNow={pageNumber ?? 0}
                lastPage={meta?.last_page ?? 0}
                setPageNumber={setPageNumber}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
