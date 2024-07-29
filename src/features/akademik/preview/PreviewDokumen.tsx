import { LabelJadwalKuliah } from '@/components/LabelComponent'

export function AkademikPreviewDokumen({
  nomor_karpeg,
  npwp,
  nomor_bpjs,
  nomor_bpjs_ketenagakerjaan,
}: {
  nomor_karpeg: string
  npwp: string
  nomor_bpjs: string
  nomor_bpjs_ketenagakerjaan: string
}) {
  return (
    <div className="flex flex-col gap-32 phones:flex-col phones:gap-24">
      <LabelJadwalKuliah
        label1="Nomor Karpeg"
        value1={nomor_karpeg}
        label2="NPWP"
        value2={npwp}
      />
      <LabelJadwalKuliah
        label1="Nomor BPJS"
        value1={nomor_bpjs}
        label2="Nomor BPJS Ketenagakerjaan"
        value2={nomor_bpjs_ketenagakerjaan}
      />
    </div>
  )
}
