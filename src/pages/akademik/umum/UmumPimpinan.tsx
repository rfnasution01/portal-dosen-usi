import { Table } from '@/components/TableComponent'
import { columnsListPimpinan } from '@/components/TableComponent/column/akademik'
import { useAkademikPimpinan } from '@/data/akademik/usePimpinan'

export default function AkademikUmumPimpinan() {
  const { dataPimpinan, loadingPimpinan } = useAkademikPimpinan()

  return (
    <div className="scrollbar flex h-full w-full flex-col gap-32 overflow-y-auto">
      <div className="scrollbar flex h-full flex-col gap-32 overflow-y-auto rounded-2x bg-white p-32">
        <p className="font-sans text-[3.2rem] font-bold text-neutral-black">
          Daftar Pimpinan Universitas Simalungun
        </p>

        <div className="scrollbar flex h-full w-full flex-1 overflow-y-auto">
          <Table
            data={dataPimpinan}
            columns={columnsListPimpinan}
            loading={loadingPimpinan}
            isNumber
            currentPage={1}
            pageSize={1000}
            isAksi
            isPimpin
          />
        </div>
      </div>
    </div>
  )
}
