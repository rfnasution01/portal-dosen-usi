/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from '@/components/Form'
import { FormInputText } from '@/components/InputComponent'
import { SelectListReferensi } from '@/components/SelectComponent'
import { UseFormReturn } from 'react-hook-form'

export function FormAkademikKepegawaian({
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
            name="nama"
            form={form}
            placeholder="Nama"
            label="Nama"
            className="w-1/2 text-black-200 phones:w-full"
            type="text"
            isDisabled={isLoading}
          />
          <div className="w-1/2 phones:hidden" />
        </div>
        <div className="flex gap-24 phones:flex-col">
          <FormInputText
            name="gelar_depan"
            form={form}
            placeholder="Gelar Depan"
            label="Gelar Depan"
            className="w-1/2 text-black-200 phones:w-full"
            type="text"
            isDisabled={isLoading}
          />
          <FormInputText
            name="gelar_belakang"
            form={form}
            placeholder="Gelar Belakang"
            label="Gelar Belakang"
            className="w-1/2 text-black-200 phones:w-full"
            type="text"
            isDisabled={isLoading}
          />
        </div>
        <div className="flex gap-24 phones:flex-col">
          <SelectListReferensi
            useFormReturn={form}
            name="id_jenis_kelamin"
            placeholder="Pilih"
            headerLabel="Jenis Kelamin"
            isDisabled={isLoading}
            q="jenis_kelamin"
            level1
          />
          <SelectListReferensi
            useFormReturn={form}
            name="id_agama"
            placeholder="Pilih"
            headerLabel="Agama"
            isDisabled={isLoading}
            q="agama"
            level2
          />
        </div>
        <div className="flex gap-24 phones:flex-col">
          <FormInputText
            name="tempat-lahir"
            form={form}
            placeholder="Tempat Lahir"
            label="Tempat Lahir"
            className="text-black-200"
            type="text"
            isDisabled={isLoading}
          />
          <FormInputText
            name="tanggal_lahir"
            form={form}
            placeholder="Tanggal Lahir"
            label="Tanggal Lahir"
            className="text-black-200"
            type="date"
            isDisabled={isLoading}
          />
        </div>
        <div className="flex gap-24 phones:flex-col">
          <SelectListReferensi
            useFormReturn={form}
            name="id_status_nikah"
            placeholder="Pilih"
            headerLabel="Status Nikah"
            isDisabled={isLoading}
            q="status_nikah"
            level3
          />
          <SelectListReferensi
            useFormReturn={form}
            name="id_unit_kerja"
            placeholder="Pilih"
            headerLabel="Unit Kerja"
            isDisabled={isLoading}
            q="unit_kerja"
            level4
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
