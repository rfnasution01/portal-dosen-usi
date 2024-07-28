import { LabelJadwalKuliah } from '@/components/LabelComponent'

export function AkademikPreviewDomisili({
  id_provinsi,
  id_kecamatan,
  id_kabupaten,
  alamat_lengkap,
  jarak_rumah_kantor,
  kode_pos,
  handphone,
  no_telp_kantor,
}: {
  id_provinsi: string
  id_kabupaten: string
  id_kecamatan: string
  alamat_lengkap: string
  jarak_rumah_kantor: string
  kode_pos: string
  handphone: string
  no_telp_kantor: string
}) {
  return (
    <div className="flex flex-col gap-32 phones:flex-col phones:gap-24">
      <LabelJadwalKuliah
        label1="Provinsi"
        value1={id_provinsi}
        label2="Kabupaten"
        value2={id_kabupaten}
      />
      <LabelJadwalKuliah
        label1="Kecamatan"
        value1={id_kecamatan}
        label2="Alamat Lengkap"
        value2={alamat_lengkap}
      />
      <LabelJadwalKuliah
        label1="Jarak Rumah Lantor"
        value1={jarak_rumah_kantor}
        label2="Kode Pos"
        value2={kode_pos}
      />
      <LabelJadwalKuliah
        label1="Hp"
        value1={handphone}
        label2="No. Telp Kantor"
        value2={no_telp_kantor}
      />
    </div>
  )
}
