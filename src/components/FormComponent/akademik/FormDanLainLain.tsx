import { FormInputText } from '@/components/InputComponent'
import { SelectListReferensi } from '@/components/SelectComponent'
import { UseFormReturn } from 'react-hook-form'

export function FormAkademikDanLain({
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
          name="id_golongan_darah"
          placeholder="Pilih"
          headerLabel="Golongan Darah"
          isDisabled={disabled}
          className="w-1/2 phones:w-full"
          q="golongan_darah"
          level1
          isRow
        />
        <SelectListReferensi
          useFormReturn={form}
          name="id_hobby"
          placeholder="Pilih"
          headerLabel="Hobi"
          isDisabled={disabled}
          className="w-1/2 phones:w-full"
          q="hobby"
          level2
          isRow
        />
      </div>

      <div className="flex gap-64 phones:flex-col phones:gap-24">
        <FormInputText
          name="tinggi_badan"
          form={form}
          placeholder="Tinggi Badan"
          label="Tinggi Badan"
          className="w-1/2 text-primary-100 phones:w-full"
          type="text"
          isDisabled={disabled}
          isRow
        />
        <FormInputText
          name="berat_badan"
          form={form}
          placeholder="Berat Badan"
          label="Berat Badan"
          className="w-1/2 text-primary-100 phones:w-full"
          type="text"
          isDisabled={disabled}
          isRow
        />
      </div>

      <div className="flex gap-64 phones:flex-col phones:gap-24">
        <FormInputText
          name="file"
          form={form}
          placeholder="File Tanda Tangan"
          label="File Tanda Tangan"
          className="w-1/2 text-primary-100 phones:w-full"
          type="file"
          isDisabled={disabled}
          isRow
        />
        <div className="w-1/2 phones:hidden" />
      </div>
      <div className="flex gap-64 phones:flex-col phones:gap-24"></div>
      <div className="flex gap-64 phones:flex-col phones:gap-24"></div>
      <div className="flex gap-64 phones:flex-col phones:gap-24"></div>
    </>
  )
}
