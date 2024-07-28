import { Table } from '@/components/TableComponent'
import { columnsListJadwalKuliah } from '@/components/TableComponent/column/akademik'
import { useAkademikJadwalKuliah } from '@/data/akademik'

export default function JadwalKuliahDetail() {
  const { dataJadwalKuliah, loadingJadwalKuliah } = useAkademikJadwalKuliah()

  return (
    <div className="scrollbar flex h-full  w-full flex-col gap-32 overflow-y-auto">
      <p className="font-sans text-[2.8rem] font-bold text-black-300">
        Jadwal Perkuliahan
      </p>
      <Table
        data={dataJadwalKuliah}
        columns={columnsListJadwalKuliah}
        loading={loadingJadwalKuliah}
        isNumber
        currentPage={1}
        pageSize={1000}
        isAksi
      />
    </div>
  )
}
