import { LabelTentangInfo } from '@/components/LabelComponent'
import { Loading } from '@/components/Loading'
import { useProfil } from '@/data/useProfil'

export function AkademikTentangInstitusiInfo() {
  const { dataInstitusi, loadingInstitusi } = useProfil()
  return (
    <div className="flex flex-col gap-12 rounded-2x bg-primary-50 p-32 font-mono text-primary-900">
      {loadingInstitusi ? (
        <Loading />
      ) : (
        <>
          <LabelTentangInfo
            label1="Nama Institusi"
            value1={dataInstitusi?.nama_institusi}
            label2="Kelurahan"
            value2={dataInstitusi?.kelurahan}
          />
          <LabelTentangInfo
            label1="Status Pengelolaan"
            value1={dataInstitusi?.status_pengelolaan}
            label2="Kecamatan"
            value2={dataInstitusi?.kecamatan}
          />
          <LabelTentangInfo
            label1="Telepon"
            value1={dataInstitusi?.telepon}
            label2="Kabupaten / Kota"
            value2={dataInstitusi?.kabupaten}
          />
          <LabelTentangInfo
            label1="Email"
            value1={dataInstitusi?.email}
            label2="Provinsi"
            value2={dataInstitusi?.provinsi}
          />
          <LabelTentangInfo label1="Alamat" value1={dataInstitusi?.alamat} />
        </>
      )}
    </div>
  )
}
