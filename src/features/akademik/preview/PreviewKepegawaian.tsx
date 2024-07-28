import { LabelJadwalKuliah } from '@/components/LabelComponent'

export function AkademikPreviewKepegawaian({
  nama,
  gelar_belakang,
  gelar_depan,
  jenis_kelamin,
  jabatan_akademik,
  agama,
  tempat_lahir,
  tanggal_lahir,
  status_nikah,
  unit_kerja,
  email,
  no_akun,
}: {
  nama: string
  gelar_depan: string
  gelar_belakang: string
  jenis_kelamin: string
  agama: string
  tempat_lahir: string
  tanggal_lahir: string
  status_nikah: string
  unit_kerja: string
  email: string
  no_akun: string
  jabatan_akademik: string
}) {
  return (
    <div className="flex flex-col gap-32 phones:flex-col phones:gap-24">
      <LabelJadwalKuliah
        label1="Nama"
        value1={nama}
        label2="Gelar Depan"
        value2={gelar_depan}
      />
      <LabelJadwalKuliah
        label1="Gelar Belakang"
        value1={gelar_belakang}
        label2="Jenis Kelamin"
        value2={jenis_kelamin}
      />
      <LabelJadwalKuliah
        label1="Agama"
        value1={agama}
        label2="Tempat Lahir"
        value2={tempat_lahir}
      />
      <LabelJadwalKuliah
        label1="Tanggal Lahir"
        value1={tanggal_lahir}
        label2="Status Nikah"
        value2={status_nikah}
      />
      <LabelJadwalKuliah
        label1="Unit Kerja"
        value1={unit_kerja}
        label2="Email Perguruan Tinggi"
        value2={email}
      />
      <LabelJadwalKuliah
        label1="No Akun Finger"
        value1={no_akun}
        label2="Jabatan Akademik"
        value2={jabatan_akademik}
      />
    </div>
  )
}
