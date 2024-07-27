import { LabelJadwalKuliah } from '@/components/LabelComponent'
import { GetJadwalDetailType } from '@/store/type/akademik/jadwalKuliahType'

export function JadwalKuliahInfo({
  jadwalKuliahDetail,
}: {
  jadwalKuliahDetail: GetJadwalDetailType
}) {
  return (
    <>
      <LabelJadwalKuliah
        label1="Mata Kuliah"
        value1={jadwalKuliahDetail?.nama_makul}
        label2="Tahun Ajaran / Tahapan"
        value2={jadwalKuliahDetail?.tahun_akademik}
      />
      <LabelJadwalKuliah
        label1="Fakultas"
        value1={jadwalKuliahDetail?.fakultas}
        label2="Ruangan"
        jadwal={jadwalKuliahDetail?.jadwal_kuliah}
      />
      <LabelJadwalKuliah
        label1="Program Studi"
        value1={jadwalKuliahDetail?.prodi}
        label2="Hari / Sesi"
        jadwal={jadwalKuliahDetail?.jadwal_kuliah}
      />
      <LabelJadwalKuliah
        label1="Dosen"
        dosen={jadwalKuliahDetail?.dosen}
        label2="Kelas Perkuliahan"
        value2={jadwalKuliahDetail?.nama_kelas}
      />
    </>
  )
}
