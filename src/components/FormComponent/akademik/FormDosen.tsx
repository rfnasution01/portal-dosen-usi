/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from '@/components/Form'
import { FormInputText } from '@/components/InputComponent'
import { SelectListReferensi } from '@/components/SelectComponent'
import { UseFormReturn } from 'react-hook-form'

export function FormAkademikDosen({
  form,
  isLoading,
  handleSubmit,
}: {
  form: UseFormReturn
  isLoading: boolean
  handleSubmit: (values: any) => Promise<void>
}) {
  return (
    <Form {...form}>
      <form
        className="flex h-full w-full flex-col gap-32"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        {/* --- Field --- */}
        <div className="flex gap-24 phones:flex-col">
          <FormInputText
            name="id_sinta"
            form={form}
            placeholder="Id Sinta"
            label="Id Sinta"
            className="w-1/2 text-black-200 phones:w-full"
            type="text"
            isDisabled={isLoading}
          />
          <FormInputText
            name="id_orcid"
            form={form}
            placeholder="Id Orcid"
            label="Id Orcid"
            className="w-1/2 text-black-200 phones:w-full"
            type="text"
            isDisabled={isLoading}
          />
        </div>
        <div className="flex gap-24 phones:flex-col">
          <FormInputText
            name="id_scopus"
            form={form}
            placeholder="Id Scopus"
            label="Id Scopus"
            className="w-1/2 text-black-200 phones:w-full"
            type="text"
            isDisabled={isLoading}
          />
          <FormInputText
            name="nidn"
            form={form}
            placeholder="NIDN"
            label="NIDN"
            className="w-1/2 text-black-200 phones:w-full"
            type="text"
            isDisabled={isLoading}
          />
        </div>
        <div className="flex gap-24 phones:flex-col">
          <FormInputText
            name="nidk"
            form={form}
            placeholder="NIDK"
            label="NIDK"
            className="w-1/2 text-black-200 phones:w-full"
            type="text"
            isDisabled={isLoading}
          />
          <FormInputText
            name="nupn"
            form={form}
            placeholder="NUPN"
            label="NUPN"
            className="w-1/2 text-black-200 phones:w-full"
            type="text"
            isDisabled={isLoading}
          />
        </div>
        <div className="flex gap-24 phones:flex-col">
          <FormInputText
            name="id_rumpun_ilmu"
            form={form}
            placeholder="Id Rumpun Ilmu"
            label="Id Rumpun Ilmu"
            className="w-1/2 text-black-200 phones:w-full"
            type="text"
            isDisabled={isLoading}
          />
          <FormInputText
            name="serdos_status"
            form={form}
            placeholder="Serdos Status"
            label="Serdos Status"
            className="w-1/2 text-black-200 phones:w-full"
            type="text"
            isDisabled={isLoading}
          />
        </div>
        <div className="flex gap-24 phones:flex-col">
          <FormInputText
            name="serdos_tanggal"
            form={form}
            placeholder="Serdos Tanggal"
            label="Serdos Tanggal"
            className="w-1/2 text-black-200 phones:w-full"
            type="date"
            isDisabled={isLoading}
          />
          <FormInputText
            name="serdos_nomor"
            form={form}
            placeholder="Serdos Nomor"
            label="Serdos Nomor"
            className="w-1/2 text-black-200 phones:w-full"
            type="text"
            isDisabled={isLoading}
          />
        </div>
        <div className="flex gap-24 phones:flex-col">
          <FormInputText
            name="email_perguruan_tinggi"
            form={form}
            placeholder="Email Perguruan Tinggi"
            label="Email Perguruan Tinggi"
            className="text-black-200"
            type="text"
            isDisabled={isLoading}
          />
          <FormInputText
            name="no_akun_finger"
            form={form}
            placeholder="No Akun Finger"
            label="No Akun Finger"
            className="text-black-200"
            type="text"
            isDisabled={isLoading}
          />
        </div>
        <div className="flex gap-24 phones:flex-col">
          <SelectListReferensi
            useFormReturn={form}
            name="id_jabatan_akademik"
            placeholder="Pilih"
            headerLabel="Jabatan Akademik"
            isDisabled={isLoading}
            className="w-1/2 phones:w-full"
            q="jabatan_akademik"
            level5
          />
          <div className="w-1/2 phones:hidden" />
        </div>
      </form>
    </Form>
  )
}
