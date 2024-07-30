import { Table } from '@/components/TableComponent'
import { columnsListPengajuanKRS } from '@/components/TableComponent/column/akademik/mahasiswaColumn'
import { useAkademikBimbinganAkademik } from '@/data/akademik/useBimbinganAkademik'
import { useProfil } from '@/data/useProfil'
import clsx from 'clsx'

export default function PengajuanKRS() {
  const { dataProfil } = useProfil()
  const { dataKRS, loadingKRS } = useAkademikBimbinganAkademik()

  return (
    <div className="scrollbar flex h-full w-full flex-1 flex-col gap-32 overflow-y-auto">
      <div
        className={clsx('scrollbar flex h-full flex-col overflow-y-auto', {
          'p-32': dataKRS?.length > 0,
        })}
      >
        <div className="scrollbar flex h-full flex-col gap-32 overflow-y-auto">
          <div className="flex flex-col gap-8 rounded-2x bg-primary-50 p-32 text-primary-900">
            <p>
              Halo{' '}
              {dataProfil?.header_profil?.jenis_kelamin === 'Laki-Laki'
                ? 'Pak'
                : dataProfil?.header_profil?.jenis_kelamin === 'Perempuan'
                  ? 'Bu'
                  : ''}{' '}
              {dataProfil?.header_profil?.nama}
            </p>
            <p>
              Silahkan tindak lanjuti Pengajuan KRS mahasiswa Bimbingan Akademik
              anda di bawah ini.
            </p>
          </div>
          <div className="scrollbar flex h-full flex-1 overflow-y-auto">
            <Table
              data={dataKRS}
              columns={columnsListPengajuanKRS}
              loading={loadingKRS}
              isNumber
              currentPage={1}
              pageSize={1000}
              isKRS
              isAksi
            />
          </div>
        </div>
      </div>
    </div>
  )
}
