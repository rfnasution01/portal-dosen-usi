import { LabelJadwalKuliah } from '@/components/LabelComponent'

export function AkademikPreviewDosen({
  id_sinta,
  id_scopus,
  id_orcid,
  nidn,
  nidk,
  nupn,
  id_rumpun_ilmu,
  serdos_status,
  serdos_tanggal,
  serdos_nomor,
}: {
  id_sinta: string
  id_orcid: string
  id_scopus: string
  nidn: string
  nidk: string
  nupn: string
  id_rumpun_ilmu: string
  serdos_status: string
  serdos_tanggal: string
  serdos_nomor: string
}) {
  return (
    <div className="flex flex-col gap-32 phones:flex-col phones:gap-24">
      <LabelJadwalKuliah
        label1="Id Sinta"
        value1={id_sinta}
        label2="Id Orcid"
        value2={id_orcid}
      />
      <LabelJadwalKuliah
        label1="Id Scopus"
        value1={id_scopus}
        label2="NIDN"
        value2={nidn}
      />
      <LabelJadwalKuliah
        label1="NIDK"
        value1={nidk}
        label2="NUPN"
        value2={nupn}
      />
      <LabelJadwalKuliah
        label1="Id Rumpun Ilmu"
        value1={id_rumpun_ilmu}
        label2="Serdos Status"
        value2={serdos_status}
      />
      <LabelJadwalKuliah
        label1="Serdos Tanggal"
        value1={serdos_tanggal}
        label2="Serdos Nomor"
        value2={serdos_nomor}
      />
    </div>
  )
}
