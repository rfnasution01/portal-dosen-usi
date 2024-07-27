import { useProfil } from '@/data/useProfil'
import { LabelJadwalKuliah } from '../LabelComponent'
import { Loading } from '../Loading'

export function JadwalKuliahInfo() {
  const { dataProfil, loadingProfil } = useProfil()

  return (
    <div className="flex flex-col gap-8 border-l-2 border-primary-900 bg-primary-50 p-32">
      {loadingProfil ? (
        <Loading />
      ) : (
        <>
          <LabelJadwalKuliah
            label1="No. Kampus"
            value1="-"
            label2="Jenis Kelamin"
            value2={dataProfil?.header_profil?.jenis_kelamin ?? '-'}
          />
          <LabelJadwalKuliah
            label1="NIP"
            value1={dataProfil?.header_profil?.nip ?? '-'}
            label2="Agama"
            value2={dataProfil?.header_profil?.agama ?? '-'}
          />
          <LabelJadwalKuliah
            label1="NIDN"
            value1={dataProfil?.dosen?.nidn ?? '-'}
            label2="Tempat Lahir"
            value2={dataProfil?.header_profil?.tempat_lahir ?? '-'}
          />
          <LabelJadwalKuliah
            label1="Nama Lengkap"
            value1={dataProfil?.header_profil?.nama ?? '-'}
            label2="Tanggal Lahir"
            value2={dataProfil?.header_profil?.tanggal_lahir ?? '-'}
          />
          <LabelJadwalKuliah
            label1="Gelar Depan"
            value1={dataProfil?.header_profil?.gelar_depan ?? '-'}
            label2="Status Nikah"
            value2={dataProfil?.header_profil?.status_nikah ?? '-'}
          />
          <LabelJadwalKuliah
            label1="Gelar Belakang"
            value1={dataProfil?.header_profil?.gelar_belakang ?? '-'}
          />
        </>
      )}
    </div>
  )
}
