import { Loading } from '@/components/Loading'
import { Table } from '@/components/TableComponent'
import { columnsListJadwalKuliahMingguIni } from '@/components/TableComponent/column/akademik'
import { useAkademikJadwalKuliah } from '@/data/akademik'
import { getDayName } from '@/utils/formatText'
import dayjs from 'dayjs'
import 'dayjs/locale/id'

export default function JadwalMingguIni() {
  const { dataJadwalKuliahMingguIni, loadingJadwalKuliahMingguIni } =
    useAkademikJadwalKuliah()

  return (
    <div className="scrollbar flex h-full w-full flex-col gap-32 overflow-y-auto">
      <div className="scrollbar flex h-full flex-col gap-32 overflow-y-auto">
        {loadingJadwalKuliahMingguIni ? (
          <Loading />
        ) : (
          <div className="flex flex-col gap-24 rounded-2x bg-white p-32 text-neutral-black shadow-md">
            <div className="flex items-center justify-between gap-32">
              <p className="font-roboto text-[3.2rem]">Jadwal Minggu Ini</p>
            </div>
            <div className="flex flex-col gap-32">
              {dataJadwalKuliahMingguIni?.map((item, idx) => (
                <div className="flex flex-col gap-16" key={idx}>
                  <p className="text-primary-100">
                    {getDayName(Number(item?.tanggal?.hari))},{' '}
                    {dayjs(item?.tanggal?.tanggal)
                      .locale('id')
                      .format('DD MMMM YYYY')}
                  </p>
                  <Table
                    data={item?.jadwal}
                    columns={columnsListJadwalKuliahMingguIni}
                    loading={loadingJadwalKuliahMingguIni}
                    isNumber
                    currentPage={1}
                    pageSize={1000}
                    isAksi
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
