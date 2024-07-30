import { FormInputFileAppend, FormInputText } from '@/components/InputComponent'
import { SelectListReferensi } from '@/components/SelectComponent'
import { useProfil } from '@/data/useProfil'
import { Dispatch, SetStateAction } from 'react'
import { UseFormReturn } from 'react-hook-form'

export function FormAkademikDanLain({
  form,
  isLoading,
  isEdit,
  setFile,
  fileUrl,
  setFileUrl,
}: {
  form: UseFormReturn
  isLoading?: boolean
  isEdit: boolean
  setFile: Dispatch<SetStateAction<File>>
  setFileUrl: Dispatch<SetStateAction<string>>
  fileUrl: string
}) {
  const disabled = !isEdit || isLoading
  const { dataProfil } = useProfil()

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
        <FormInputFileAppend
          name="file"
          form={form}
          label="File Tanda Tangan"
          className="w-1/2 text-primary-100 phones:w-full"
          disabled={disabled}
          isRow
          setFile={setFile}
          fileUrl={fileUrl}
          setFileUrl={setFileUrl}
          image={dataProfil?.datalain?.['File Tanda Tangan']}
        />
        <div className="w-1/2 phones:hidden" />
      </div>
    </>
  )
}
