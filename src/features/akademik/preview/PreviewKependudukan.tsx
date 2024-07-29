import { LabelJadwalKuliah } from '@/components/LabelComponent'

export function AkademikPreviewKependudukan({
  nomor_ktp,
  nomor_kk,
  alamat_lengkap,
  kode_pos,
  provinsi,
  kabupaten,
  kecamatan,
}: {
  nomor_ktp: string
  nomor_kk: string
  alamat_lengkap: string
  kode_pos: string
  provinsi: string
  kabupaten: string
  kecamatan: string
}) {
  return (
    <div className="flex flex-col gap-32 phones:flex-col phones:gap-24">
      <LabelJadwalKuliah
        label1="Nomor KTP"
        value1={nomor_ktp}
        label2="Nomor KK"
        value2={nomor_kk}
      />
      <LabelJadwalKuliah
        label1="Alamat Lengkap"
        value1={alamat_lengkap}
        label2="Kode Pos"
        value2={kode_pos}
      />
      <LabelJadwalKuliah
        label1="Provinsi"
        value1={provinsi}
        label2="Kabupaten"
        value2={kabupaten}
      />
      <LabelJadwalKuliah label1="Kecamatan" value1={kecamatan} />
    </div>
  )
}
