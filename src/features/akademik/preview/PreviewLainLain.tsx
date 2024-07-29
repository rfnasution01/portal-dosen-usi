import { LabelJadwalKuliah } from '@/components/LabelComponent'

export function AkademikPreviewDanLainLain({
  tinggi_badan,
  berat_badan,
  golongan_darah,
  hobby,
}: {
  tinggi_badan: string
  berat_badan: string
  golongan_darah: string
  hobby: string
}) {
  return (
    <div className="flex flex-col gap-32 phones:flex-col phones:gap-24">
      <LabelJadwalKuliah
        label1="Tinggi Badan"
        value1={tinggi_badan}
        label2="Berat Badan"
        value2={berat_badan}
      />
      <LabelJadwalKuliah
        label1="Golongan Darah"
        value1={golongan_darah}
        label2="Hobby"
        value2={hobby}
      />
    </div>
  )
}
