import { ValidasiAjukan } from '@/components/DialogComponent/ValidasiAjukan'
import { TableMahasiswa } from '@/components/TableComponent/TableNilaiMahasiswa'
import { useAkademikJadwalKuliah } from '@/data/akademik'
import {
  GetAspekNilaiType,
  GetJadwalNilaiType,
} from '@/store/type/akademik/jadwalKuliahType'
import { faFile, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'

export default function NilaiMahasiswa() {
  const {
    dataJadwalNilai,
    loadingJadwalNilai,
    isShow,
    setIsShow,
    handleSubmitAjukan,
    isLoadingAjukanNilai,
    dataJadwalDetail,
  } = useAkademikJadwalKuliah()

  const isDisabled = ['1', '2', '4', '5', '6'].includes(
    dataJadwalDetail?.status,
  )

  function transformData(data: GetJadwalNilaiType) {
    const { data: mahasiswaData, aspek_nilai: aspekNilai } = data

    // Inisialisasi objek untuk menyimpan jumlah nilai null atau kosong
    const nullOrEmptyCount = {}

    // Inisialisasi objek untuk menyimpan jumlah total nilai per aspek
    const totalCount = {}

    // Iterasi untuk menginisialisasi objek nullOrEmptyCount dan totalCount
    aspekNilai?.forEach((aspek) => {
      nullOrEmptyCount[aspek?.id] = 0
      totalCount[aspek?.id] = 0
    })

    const transformedMahasiswaData = mahasiswaData?.map((mahasiswa) => {
      const nilaiAspekDetail = mahasiswa?.nilai_aspek?.map((nilaiAspek) => {
        const aspekDetail = aspekNilai?.find(
          (aspek) => aspek?.id === nilaiAspek?.id,
        )

        // Hitung jumlah nilai null atau kosong
        if (nilaiAspek?.nilai === null || nilaiAspek?.nilai === '') {
          nullOrEmptyCount[nilaiAspek?.id]++
        }

        // Hitung total nilai per aspek
        totalCount[nilaiAspek?.id]++

        return {
          ...nilaiAspek,
          jenis_nilai: aspekDetail?.jenis_nilai || null,
          persentase: aspekDetail?.persentase || null,
        }
      })

      return {
        ...mahasiswa,
        nilai_aspek_detail: nilaiAspekDetail,
      }
    })

    // Menghitung persentase nilai null atau kosong per aspek
    const persentaseNullAtauKosong = Object?.keys(nullOrEmptyCount)?.map(
      (id) => {
        const nullCount = nullOrEmptyCount[id]
        const total = totalCount[id]
        const persentase = (nullCount / total) * 100
        return {
          id,
          persentaseNullAtauKosong: persentase,
        }
      },
    )

    const adaDibawah60 = persentaseNullAtauKosong?.some(
      (aspek) => aspek.persentaseNullAtauKosong > 40,
    )

    return {
      transformedMahasiswaData,
      persentaseNullAtauKosong,
      adaDibawah60,
    }
  }

  const transform = dataJadwalNilai && transformData(dataJadwalNilai)

  const disabledNull = transform?.adaDibawah60

  function hasInvalidNilai(aspekNilai: GetAspekNilaiType[]): boolean {
    return aspekNilai?.some(
      (item) =>
        item.nilai === null ||
        item.nilai === undefined ||
        item.nilai === '' ||
        item.nilai === '0' ||
        item.nilai === '0.00',
    )
  }

  // Function to filter data based on invalid nilai_aspek
  function filterDataByNilaiAspek(data: GetJadwalNilaiType) {
    // Filter data based on nilai_aspek
    const filteredData = data?.data?.filter((item) =>
      hasInvalidNilai(item?.nilai_aspek),
    )

    // Return data with nilai_aspek unchanged
    return {
      data: filteredData,
      aspek_nilai: data?.aspek_nilai,
    }
  }

  const filteredData = filterDataByNilaiAspek(dataJadwalNilai)

  return (
    <>
      <TableMahasiswa
        response={dataJadwalNilai}
        loading={loadingJadwalNilai}
        pageSize={1000}
        currentPage={1}
      />
      <div className="flex w-full justify-end gap-32">
        <button
          onClick={() => {
            setIsShow(true)
          }}
          disabled={
            isDisabled || dataJadwalNilai?.data?.length === 0 || disabledNull
          }
          className={clsx(
            'flex items-center gap-12 rounded-2xl bg-success px-24 py-12 text-white hover:bg-opacity-80 disabled:cursor-not-allowed disabled:bg-green-200',
          )}
        >
          <FontAwesomeIcon icon={faFile} />
          <p>Ajukan Nilai Ke Program Studi</p>
        </button>
      </div>
      <ValidasiAjukan
        isOpen={isShow}
        setIsOpen={setIsShow}
        dataChild={
          <TableMahasiswa
            response={filteredData}
            loading={loadingJadwalNilai}
            pageSize={1000}
            currentPage={1}
          />
        }
        child={
          <button
            onClick={handleSubmitAjukan}
            className="flex items-center gap-12 rounded-2xl  bg-success px-24 py-12 text-white hover:bg-opacity-80"
          >
            {isLoadingAjukanNilai ? (
              <span className="animate-spin duration-300">
                <FontAwesomeIcon icon={faSpinner} />
              </span>
            ) : (
              <FontAwesomeIcon icon={faFile} />
            )}
            <p>Ya, Saya yakin</p>
          </button>
        }
      />
    </>
  )
}
