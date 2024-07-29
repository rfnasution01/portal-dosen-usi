import { FormInputText } from '@/components/InputComponent'
import { UseFormReturn } from 'react-hook-form'

export function FormAkademikDokumen({
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
        <FormInputText
          name="nomor_karpeg"
          form={form}
          placeholder="Nomor Karpeg"
          label="Nomor Karpeg"
          className="w-1/2 text-primary-100 phones:w-full"
          type="text"
          isDisabled={disabled}
          isRow
        />
        <FormInputText
          name="file_karpeg"
          form={form}
          placeholder="File Karpeg"
          label="File Karpeg"
          className="w-1/2 text-primary-100 phones:w-full"
          type="file"
          isDisabled={disabled}
          isRow
        />
      </div>
      <div className="flex gap-64 phones:flex-col phones:gap-24">
        <FormInputText
          name="npwp"
          form={form}
          placeholder="NPWP"
          label="NPWP"
          className="w-1/2 text-primary-100 phones:w-full"
          type="text"
          isDisabled={disabled}
          isRow
        />
        <FormInputText
          name="file_npwp"
          form={form}
          placeholder="File NPWP"
          label="File NPWP"
          className="w-1/2 text-primary-100 phones:w-full"
          type="text"
          isDisabled={disabled}
          isRow
        />
      </div>

      <div className="flex gap-64 phones:flex-col phones:gap-24">
        <FormInputText
          name="nomor_bpjs"
          form={form}
          placeholder="Nomor BPJS"
          label="Nomor BPJS"
          className="w-1/2 text-primary-100 phones:w-full"
          type="text"
          isDisabled={disabled}
          isRow
        />
        <FormInputText
          name="file_bpjs"
          form={form}
          placeholder="File BPJS"
          label="File BPJS"
          className="w-1/2 text-primary-100 phones:w-full"
          type="file"
          isDisabled={disabled}
          isRow
        />
      </div>
      <div className="flex gap-64 phones:flex-col phones:gap-24">
        <FormInputText
          name="nomor_bpjs_ketenagakerjaan"
          form={form}
          placeholder="Nomor BPJS Ketenagakerjaan"
          label="Nomor BPJS Ketenagakerjaans"
          className="w-1/2 text-primary-100 phones:w-full"
          type="text"
          isDisabled={disabled}
          isRow
        />
        <FormInputText
          name="file_bpjs_ketenagakerjaan"
          form={form}
          placeholder="File BPJS Ketenagakerjaan"
          label="File BPJS Ketenagakerjaan"
          className="w-1/2 text-primary-100 phones:w-full"
          type="file"
          isDisabled={disabled}
          isRow
        />
      </div>
      <div className="flex gap-64 phones:flex-col phones:gap-24">
        <FormInputText
          name="nomor_bpjs_pensiun"
          form={form}
          placeholder="Nomor BPJS Pensiun"
          label="Nomor BPJS Pensiun"
          className="w-1/2 text-primary-100 phones:w-full"
          type="text"
          isDisabled={disabled}
          isRow
        />
        <FormInputText
          name="file_bpjs_pensiun"
          form={form}
          placeholder="File BPJS Pensiun"
          label="File BPJS Pensiun"
          className="w-1/2 text-primary-100 phones:w-full"
          type="file"
          isDisabled={disabled}
          isRow
        />
      </div>
    </>
  )
}
