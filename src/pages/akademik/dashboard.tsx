import SkeletonText from '@/components/SkeletonComonent/SkeletonText'
import { Table } from '@/components/TableComponent'
import { columnsListJadwalKuliah } from '@/components/TableComponent/column/akademik'
import {
  useAkademikJadwalKuliah,
  useAkademikKataMutiara,
} from '@/data/akademik'
import { useProfil } from '@/data/useProfil'

export default function AkademikDashboard() {
  const { dataProfil } = useProfil()
  const { dataKataMutiara, loadingKataMutiara } = useAkademikKataMutiara()
  const { dataJadwalKuliah, loadingJadwalKuliah } = useAkademikJadwalKuliah()

  return (
    <div className="scrollbar flex h-full w-full flex-col gap-32 overflow-y-auto">
      <p className="font-sans text-[2.8rem] font-bold text-black-300">
        Selamat Datang,{' '}
        {dataProfil?.header_profil?.jenis_kelamin === 'Perempuan'
          ? 'Bu'
          : 'Pak'}
        {dataProfil?.header_profil?.nama}
      </p>
      <div className="flex flex-col rounded-2xl border bg-neutral-secondary p-32 font-mono text-[2.2rem] text-neutral-black">
        {loadingKataMutiara ? (
          <SkeletonText lines={2} />
        ) : (
          <>
            <p>{dataKataMutiara?.isi}</p>
            <p>~ {dataKataMutiara?.pengarang}</p>
          </>
        )}
      </div>
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
