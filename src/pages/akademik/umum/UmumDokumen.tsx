import { Table } from '@/components/TableComponent'
import { columnsListDokumen } from '@/components/TableComponent/column/akademik'
import { useAkademikDokumen } from '@/data/akademik/useDokumen'

export default function AkademikUmumDokumen() {
  const { dataDokumen, loadingDokumen } = useAkademikDokumen()

  return (
    <div className="scrollbar flex h-full w-full flex-col gap-32 overflow-y-auto">
      <div className="scrollbar flex h-full flex-col gap-32 overflow-y-auto rounded-2x bg-white p-32">
        <p className="font-sans text-[3.2rem] font-bold text-neutral-black">
          Dokuman Akademik
        </p>

        <div className="scrollbar flex h-full w-full flex-1 overflow-y-auto">
          <Table
            data={dataDokumen}
            columns={columnsListDokumen}
            loading={loadingDokumen}
            isNumber
            currentPage={1}
            pageSize={1000}
            isAksi
            isDokumen
          />
        </div>
      </div>
    </div>
  )
}
