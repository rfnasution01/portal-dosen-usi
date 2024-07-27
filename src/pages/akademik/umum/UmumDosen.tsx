import { Form } from '@/components/Form'
import { SelectListProdi } from '@/components/SelectComponent'
import { Table } from '@/components/TableComponent'
import { columnsListDosen } from '@/components/TableComponent/column/akademik'
import { useAkademikDosen } from '@/data/akademik/useDosen'

export default function AkademikUmumDosen() {
  const { dataDosen, loadingDosen, formFilterProdi } = useAkademikDosen()

  return (
    <div className="scrollbar flex h-full w-full flex-col gap-32 overflow-y-auto">
      <div className="scrollbar flex h-full flex-col gap-32 overflow-y-auto rounded-2x bg-white p-32">
        <p className="font-sans text-[3.2rem] font-bold text-neutral-black">
          Daftar Dosen Program Studi Universitas Simalungun
        </p>
        <Form {...formFilterProdi}>
          <form>
            <SelectListProdi
              useFormReturn={formFilterProdi}
              placeholder="Pilih Prodi"
              name="id"
              className="w-1/4 phones:w-full"
              level1
            />
          </form>
        </Form>
        <div className="scrollbar flex h-full w-full flex-1 overflow-y-auto">
          <Table
            data={dataDosen}
            columns={columnsListDosen}
            loading={loadingDosen}
            isNumber
            currentPage={1}
            pageSize={1000}
            isAksi
            isDosen
          />
        </div>
      </div>
    </div>
  )
}
