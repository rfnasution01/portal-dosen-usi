import { LabelJadwalKuliah } from '@/components/LabelComponent'
import { columnsListPengajuanKRSDetail } from '@/components/TableComponent/column/akademik/mahasiswaColumn'
import { TablePengajuanKRS } from '@/components/TableComponent/TablePengajuanKRS'
import { useAkademikBimbinganAkademik } from '@/data/akademik/useBimbinganAkademik'
import { useProfil } from '@/data/useProfil'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

export default function PengajuanKRSDetail() {
  const navigate = useNavigate()
  const { dataProfil } = useProfil()
  const {
    dataKRSDetail,
    loadingKRSDetail,
    setIsShow,
    isShow,
    handleSubmit,
    isLoadingCreateKRS,
    setkrs,
  } = useAkademikBimbinganAkademik()

  return (
    <div className="scrollbar flex h-full w-full flex-1 flex-col gap-32 overflow-y-auto">
      <div className="scrollbar flex h-full flex-col overflow-y-auto">
        <div className="scrollbar flex h-full flex-col gap-32 overflow-y-auto">
          <div
            onClick={() => {
              navigate('/akademik/jadwal-perkuliahan')
            }}
            className="flex items-center gap-12 font-sans text-[2.2rem] text-black-300 hover:cursor-pointer hover:text-primary-active"
          >
            <FontAwesomeIcon icon={faArrowLeftLong} />
            <p>Kembali</p>
          </div>
          <div className="flex flex-col gap-8 rounded-2x bg-primary-50 p-32 text-primary-900 shadow">
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
          <div className="flex flex-col gap-8 rounded-2x bg-primary-50 p-32 text-primary-900 shadow">
            <LabelJadwalKuliah
              label1="Status"
              value1="Pengajuan"
              label2="Tahun Ajaran"
              value2={dataKRSDetail?.mahasiswa?.tahun_ajaran}
            />
            <LabelJadwalKuliah
              label1="Nomor Kartu Studi"
              value1={dataKRSDetail?.mahasiswa?.nomor_kartu_studi}
              label2="Semester"
              value2={dataKRSDetail?.mahasiswa?.semester}
            />
            <LabelJadwalKuliah
              label1="Program Studi"
              value1={dataKRSDetail?.mahasiswa?.prodi}
              label2="Dosen Pembimbing Akademik"
              value2={dataKRSDetail?.mahasiswa?.dosen_pa}
            />
            <LabelJadwalKuliah
              label1="NIM / NPM"
              value1={dataKRSDetail?.mahasiswa?.nim}
              label2="Indeks Prestasi Sebelumnya"
              value2={dataKRSDetail?.mahasiswa?.ips_lalu}
            />
            <LabelJadwalKuliah
              label1="Nama"
              value1={dataKRSDetail?.mahasiswa?.nama}
              label2="Jumlah Kredit"
              value2={dataKRSDetail?.mahasiswa?.jlh_sks}
            />
          </div>
          <div className="scrollbar flex h-full flex-1 overflow-y-auto phones:overflow-visible">
            <TablePengajuanKRS
              data={dataKRSDetail?.mata_kuliah}
              columns={columnsListPengajuanKRSDetail}
              loading={loadingKRSDetail || isLoadingCreateKRS}
              isNumber
              currentPage={1}
              pageSize={1000}
              setIsShow={setIsShow}
              setkrs={setkrs}
              isShow={isShow}
              handleSubmit={handleSubmit}
              isKRS
              isAksi
            />
          </div>
        </div>
      </div>
    </div>
  )
}
