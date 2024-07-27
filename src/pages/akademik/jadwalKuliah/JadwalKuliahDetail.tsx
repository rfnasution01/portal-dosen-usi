import SkeletonText from '@/components/SkeletonComonent/SkeletonText'
import { Table } from '@/components/TableComponent'
import { columnsListJadwalMahasiswa } from '@/components/TableComponent/column/akademik'
import { useAkademikJadwalKuliah } from '@/data/akademik'
import { JadwalKuliahInfo } from '@/features/akademik/jadwalKuliah'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

export default function JadwalKuliahDetail() {
  const navigate = useNavigate()
  const {
    dataJadwalMahasiswa,
    loadingJadwalMahasiswa,
    dataJadwalDetail,
    loadingJadwalDetail,
  } = useAkademikJadwalKuliah()

  return (
    <div className="scrollbar flex h-full w-full flex-col gap-32 overflow-y-auto p-32 font-sans">
      <div
        onClick={() => {
          navigate(-1)
        }}
        className="flex items-center gap-12 font-sans text-[2.2rem] text-black-300 hover:cursor-pointer hover:text-primary-active"
      >
        <FontAwesomeIcon icon={faArrowLeftLong} />
        <p>Kembali</p>
      </div>

      <p className="font-sans text-[2.8rem] font-bold text-black-300">
        Jadwal Perkuliahan
      </p>
      <div className="flex flex-col gap-8 border-l-2 border-primary-900 bg-primary-50 p-32">
        {loadingJadwalDetail ? (
          <SkeletonText lines={4} />
        ) : (
          <JadwalKuliahInfo jadwalKuliahDetail={dataJadwalDetail} />
        )}
      </div>
      <p className="font-sans text-[2.8rem] font-bold text-black-300">
        Daftar Mahasiswa Peserta
      </p>
      <Table
        data={dataJadwalMahasiswa}
        columns={columnsListJadwalMahasiswa}
        loading={loadingJadwalMahasiswa}
        isNumber
        currentPage={1}
        pageSize={1000}
      />
    </div>
  )
}
