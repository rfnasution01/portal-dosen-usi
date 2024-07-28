import { TableMahasiswaPerAspek } from '@/components/TableComponent/TableNilaiMahasiswaPerAspek'
import { useAkademikJadwalKuliah } from '@/data/akademik'

export default function NilaiMahasiswaPerAspek() {
  const {
    nilaiMahasiswaTransform,
    dataJadwalNilai,
    form,
    handleSubmit,
    isSuccessEditNilai,
  } = useAkademikJadwalKuliah()
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
      />
    </>
  )
}
