import { TableMahasiswaPerAspek } from '@/components/TableComponent/TableNilaiMahasiswaPerAspek'
import { useAkademikJadwalKuliah } from '@/data/akademik'

export default function NilaiMahasiswaPerAspek() {
  const {
    nilaiMahasiswaTransform,
    dataJadwalNilai,
    dataJadwalDetail,
    form,
    handleSubmit,
    isSuccessEditNilai,
  } = useAkademikJadwalKuliah()

  const isDisabled = ['1', '2', '4', '5', '6'].includes(
    dataJadwalDetail?.status,
  )

  return (
    <>
      <TableMahasiswaPerAspek
        response={nilaiMahasiswaTransform}
        pageSize={1000}
        currentPage={1}
        nilaiMahasiswa={dataJadwalNilai}
        handleSubmit={handleSubmit}
        form={form}
        isSuccessEditNilai={isSuccessEditNilai}
        disabledPengajuan={isDisabled}
      />
    </>
  )
}
