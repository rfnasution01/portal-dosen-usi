/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormInputText } from '@/components/InputComponent'
import { SelectListReferensi } from '@/components/SelectComponent'
import { UseFormReturn } from 'react-hook-form'

export function FormAkademikRekeningBank({
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
      <div className="flex gap-64 phones:flex-col phones:gap-24">
        <SelectListReferensi
          useFormReturn={form}
          name="id_bank"
          placeholder="Pilih"
          headerLabel="Bank"
          isDisabled={disabled}
          q="bank"
          level1
          isRow
          className="w-1/2 text-primary-100 phones:w-full"
        />
        <FormInputText
          name="nomor_rekening"
          form={form}
          placeholder="Nomor Rekening"
          label="Nomor Rekening"
          className="w-1/2 text-black-200 phones:w-full"
          type="text"
          isDisabled={disabled}
          isRow
        />
      </div>
      <div className="flex gap-64 phones:flex-col phones:gap-24">
        <FormInputText
          name="nama_rekening"
          form={form}
          placeholder="Nama Rekening"
          label="Nama Rekening"
          className="w-1/2 text-black-200 phones:w-full"
          type="text"
          isDisabled={disabled}
          isRow
        />
        <FormInputText
          name="cabang_bank"
          form={form}
          placeholder="Cabang Bank"
          label="Cabang Bank"
          className="w-1/2 text-black-200 phones:w-full"
          type="text"
          isDisabled={disabled}
          isRow
        />
      </div>
      <div className="flex gap-64 phones:flex-col phones:gap-24">
        <FormInputText
          name="file_rekening"
          form={form}
          placeholder="File Rekening"
          label="File Rekening"
          className="w-1/2 text-black-200 phones:w-full"
          type="file"
          isDisabled={disabled}
          isRow
        />
        <div className="w-1/2 phones:hidden" />
      </div>
    </>
  )
}
