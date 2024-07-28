/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormInputText } from '@/components/InputComponent'
import { SelectListReferensi } from '@/components/SelectComponent'
import { UseFormReturn } from 'react-hook-form'

export function FormAkademikKepegawaian({
  form,
  isLoading,
  isEdit,
}: {
  form: UseFormReturn
  isLoading?: boolean
  isEdit: boolean
}) {
  const disabled = !isEdit || isLoading
  return (
    <>
      {/* --- Field --- */}
      <div className="flex gap-64 phones:flex-col phones:gap-24">
        <FormInputText
          name="nama"
          form={form}
          placeholder="Nama"
          label="Nama"
          className="w-1/2 text-primary-100 phones:w-full"
          type="text"
          isDisabled={disabled}
          isRow
        />
        <div className="w-1/2 phones:hidden" />
      </div>
      <div className="flex gap-64 phones:flex-col phones:gap-24">
        <FormInputText
          name="gelar_depan"
          form={form}
          placeholder="Gelar Depan"
          label="Gelar Depan"
          className="w-1/2 text-primary-100 phones:w-full"
          type="text"
          isDisabled={disabled}
          isRow
        />
        <FormInputText
          name="gelar_belakang"
          form={form}
          placeholder="Gelar Belakang"
          label="Gelar Belakang"
          className="w-1/2 text-primary-100 phones:w-full"
          type="text"
          isDisabled={disabled}
          isRow
        />
      </div>
      <div className="flex gap-64 phones:flex-col phones:gap-24">
        <SelectListReferensi
          useFormReturn={form}
          name="id_jenis_kelamin"
          placeholder="Pilih"
          headerLabel="Jenis Kelamin"
          isDisabled={disabled}
          q="jenis_kelamin"
          level1
          isRow
        />
        <SelectListReferensi
          useFormReturn={form}
          name="id_agama"
          placeholder="Pilih"
          headerLabel="Agama"
          isDisabled={disabled}
          q="agama"
          level2
          isRow
        />
      </div>
      <div className="flex gap-64 phones:flex-col phones:gap-24">
        <FormInputText
          name="tempat_lahir"
          form={form}
          placeholder="Tempat Lahir"
          label="Tempat Lahir"
          className="text-primary-100"
          type="text"
          isDisabled={disabled}
          isRow
        />
        <FormInputText
          name="tanggal_lahir"
          form={form}
          placeholder="Tanggal Lahir"
          label="Tanggal Lahir"
          className="text-primary-100"
          type="date"
          isDisabled={disabled}
          isRow
        />
      </div>
      <div className="flex gap-64 phones:flex-col phones:gap-24">
        <SelectListReferensi
          useFormReturn={form}
          name="id_status_nikah"
          placeholder="Pilih"
          headerLabel="Status Nikah"
          isDisabled={disabled}
          q="status_nikah"
          level3
          isRow
        />
        <SelectListReferensi
          useFormReturn={form}
          name="id_unit_kerja"
          placeholder="Pilih"
          headerLabel="Unit Kerja"
          isDisabled={disabled}
          q="unit_kerja"
          level4
          isRow
        />
      </div>
      <div className="flex gap-64 phones:flex-col phones:gap-24">
        <FormInputText
          name="email_perguruan_tinggi"
          form={form}
          placeholder="Email Perguruan Tinggi"
          label="Email Perguruan Tinggi"
          className="text-primary-100"
          type="text"
          isDisabled={disabled}
          isRow
        />
        <FormInputText
          name="no_akun_finger"
          form={form}
          placeholder="No Akun Finger"
          label="No Akun Finger"
          className="text-primary-100"
          type="text"
          isDisabled={disabled}
          isRow
        />
      </div>
      <div className="flex gap-64 phones:flex-col phones:gap-24">
        <SelectListReferensi
          useFormReturn={form}
          name="id_jabatan_akademik"
          placeholder="Pilih"
          headerLabel="Jabatan Akademik"
          isDisabled={disabled}
          className="w-1/2 phones:w-full"
          q="jabatan_akademik"
          level5
          isRow
        />
        <div className="w-1/2 phones:hidden" />
      </div>
    </>
  )
}
