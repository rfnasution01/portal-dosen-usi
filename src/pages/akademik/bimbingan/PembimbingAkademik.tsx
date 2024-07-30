import { Table } from '@/components/TableComponent'
import { columnsListBimbinganAkademik } from '@/components/TableComponent/column/akademik/mahasiswaColumn'
import { useAkademikBimbinganAkademik } from '@/data/akademik/useBimbinganAkademik'

export default function PembimbingAkademik() {
  const { dataBimbingan, loadingBimbingan } = useAkademikBimbinganAkademik()

  return (
    <div className="scrollbar flex h-full w-full flex-col gap-32 overflow-y-auto">
      <p className="font-sans text-[2.8rem] font-bold text-black-300">
        Pembimbing Akademik
      </p>
      <div className="scrollbar flex h-full w-full overflow-y-auto">
        <Table
          data={dataBimbingan}
          columns={columnsListBimbinganAkademik}
          loading={loadingBimbingan}
          isNumber
          currentPage={1}
          pageSize={1000}
          isAksi
          isBimbingan
        />
      </div>
    </div>
  )
}
