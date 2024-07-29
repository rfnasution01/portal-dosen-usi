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
    <div className="scrollbar flex h-full w-full flex-col gap-32 overflow-y-auto">
      <div className="flex flex-col gap-32 rounded-2xl border bg-white p-32 font-mono text-[2.2rem] text-neutral-black">
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
