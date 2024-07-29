/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { Form } from '@/components/Form'
import { useNavigate } from 'react-router-dom'
import { SelectListReferensi } from '@/components/SelectComponent'
import { ValidasiUpdate } from '@/components/DialogComponent/ValidasiUpdate'
import { PreviewUpdateTA } from '@/components/Preview/siakad'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faSave, faSpinner } from '@fortawesome/free-solid-svg-icons'

export default function FormUpdateTahunAkademik({
  form,
  isLoading,
  handleSubmit,
  setIsShow,
  setIsSubmit,
  isSubmit,
  isShow,
}: {
  form: UseFormReturn
  isLoading: boolean
  handleSubmit: () => Promise<void>
  setIsSubmit: Dispatch<SetStateAction<boolean>>
  setIsShow: Dispatch<SetStateAction<boolean>>
  isShow: boolean
  isSubmit: boolean
}) {
  const navigate = useNavigate()

  return (
    <div>
      <Form {...form}>
        <form
          className="flex flex-col gap-16"
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          {/* --- Field --- */}
          <SelectListReferensi
            useFormReturn={form}
            name="tahun"
            placeholder="Pilih"
            headerLabel="Tahun"
            isDisabled={isLoading}
            q="tahun_akademik"
            level1
          />
          <SelectListReferensi
            useFormReturn={form}
            name="id_tahap"
            placeholder="Pilih"
            headerLabel="Tahapan"
            isDisabled={isLoading}
            q="tahapan"
            level2
          />
          <SelectListReferensi
            useFormReturn={form}
            name="id_kode_prodi"
            placeholder="Pilih"
            headerLabel="Prodi"
            isDisabled={isLoading}
            q="prodi"
            level3
          />
          {/* --- Button Group --- */}
          <div className="flex items-center justify-end gap-32">
            <button
              type="reset"
              onClick={async () => {
                navigate(-1)
              }}
              className="flex items-center justify-center gap-12 rounded-2xl bg-danger px-32 py-12 text-white disabled:cursor-not-allowed"
            >
              <p>Batal</p>
            </button>
            <button
              type="submit"
              onClick={async () => {
                const isValid = await form.trigger()

                if (isValid) {
                  setIsShow(true)
                }
              }}
              className="flex items-center justify-center gap-12 rounded-2xl bg-success px-32 py-12 text-white disabled:cursor-not-allowed"
            >
              <p>Simpan</p>
            </button>
          </div>
          <div className="flex w-1/2 flex-col gap-32 phones:hidden" />
        </form>
      </Form>
      <ValidasiUpdate
        isOpen={isShow}
        setIsOpen={setIsShow}
        child={
          <div className="flex w-full flex-col gap-32 rounded-2x bg-primary-50 p-32 text-[2rem] text-black-300 phones:text-[2.4rem]">
            <PreviewUpdateTA
              tahun={form.watch('tahun')}
              tahapan={form.watch('tahap')}
              kode_prodi={form.watch('kode_prodi')}
            />
          </div>
        }
        childButton={
          <button
            type="submit"
            onClick={() => {
              setIsSubmit(true)
              handleSubmit()
            }}
            disabled={isLoading}
            className="flex items-center gap-12 rounded-2xl bg-success px-24 py-12 text-white hover:bg-opacity-80 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="animate-spin duration-300">
                <FontAwesomeIcon icon={faSpinner} />
              </div>
            ) : isSubmit ? (
              <FontAwesomeIcon icon={faSave} />
            ) : (
              <FontAwesomeIcon icon={faCheck} />
            )}
            {isSubmit ? 'Simpan' : 'Sudah Benar'}
          </button>
        }
      />
    </div>
  )
}
