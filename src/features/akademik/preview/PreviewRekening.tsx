import { LabelJadwalKuliah } from '@/components/LabelComponent'

export function AkademikPreviewRekening({
  id_bank,
  nomor_rekening,
  nama_rekening,
  cabang_bank,
  file,
}: {
  id_bank: string
  nomor_rekening: string
  nama_rekening: string
  cabang_bank: string
  file: string
}) {
  return (
    <div className="flex flex-col gap-32 phones:flex-col phones:gap-24">
      <LabelJadwalKuliah
        label1="Nama Bank"
        value1={id_bank}
        label2="Nomor Rekening"
        value2={nomor_rekening}
      />
      <LabelJadwalKuliah
        label1="Nama Rekening"
        value1={nama_rekening}
        label2="Cabang Rekening"
        value2={cabang_bank}
      />
      {file && (
        <img
          src={file}
          className="w-1/4 rounded-2xl"
          alt={nama_rekening}
          loading="lazy"
        />
      )}
    </div>
  )
}
