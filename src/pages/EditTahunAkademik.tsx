import FormUpdateTahunAkademik from '@/components/FormComponent/akademik/FormUpdateTahunAkademik'
import { useAkademikTahunAktif } from '@/data/akademik/useTahunAktif'

export default function EditTahunAkademik() {
  const {
    form,
    handleSubmit,
    isLoadingEditTahunAkademik,
    isShow,
    isSubmit,
    setIsShow,
    setIsSubmit,
  } = useAkademikTahunAktif()

  return (
    <div className="scrollbar flex h-auto w-full overflow-y-auto rounded-3x bg-white font-mono shadow phones:flex-col">
      <div className="scrollbar flex h-full w-1/6 flex-col items-center justify-center gap-32 overflow-y-auto bg-primary-50 p-32 text-center font-sans text-primary-900 phones:w-full">
        <p className="text-[3.2rem] font-bold">Penjelasan</p>
        <p className="text-[2.2rem]" style={{ lineHeight: '130%' }}>
          Ubah data aktif berfungsi untuk mengaktifkan tahun akademik menurut
          tahun, tahapan / semester dan memilih Program Studi
        </p>
      </div>
      <div className="scrollbar flex h-full w-5/6 flex-col gap-32 overflow-y-auto p-32 font-mono text-[2.2rem] phones:w-full">
        <p className="font-sans text-[2.8rem] font-bold text-black-300">
          Ubah Data Aktif Tahun Akademik
        </p>
        <FormUpdateTahunAkademik
          form={form}
          handleSubmit={handleSubmit}
          isLoading={isLoadingEditTahunAkademik}
          isShow={isShow}
          isSubmit={isSubmit}
          setIsShow={setIsShow}
          setIsSubmit={setIsSubmit}
        />
      </div>
    </div>
  )
}
