/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormInputText } from '@/components/InputComponent'
import { FormInputRadio } from '@/components/InputComponent/FormInputRadio'
import { UseFormReturn } from 'react-hook-form'

export function FormAkademikDosen({
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
          name="id_sinta"
          form={form}
          placeholder="Id Sinta"
          label="Id Sinta"
          className="w-1/2 text-black-200 phones:w-full"
          type="text"
          isDisabled={disabled}
          isRow
        />
        <FormInputText
          name="id_orcid"
          form={form}
          placeholder="Id Orcid"
          label="Id Orcid"
          className="w-1/2 text-black-200 phones:w-full"
          type="text"
          isDisabled={disabled}
          isRow
        />
      </div>
      <div className="flex gap-64 phones:flex-col phones:gap-24">
        <FormInputText
          name="id_scopus"
          form={form}
          placeholder="Id Scopus"
          label="Id Scopus"
          className="w-1/2 text-black-200 phones:w-full"
          type="text"
          isDisabled={disabled}
          isRow
        />
        <FormInputText
          name="nidn"
          form={form}
          placeholder="NIDN"
          label="NIDN"
          className="w-1/2 text-black-200 phones:w-full"
          type="text"
          isDisabled={disabled}
          isRow
        />
      </div>
      <div className="flex gap-64 phones:flex-col phones:gap-24">
        <FormInputText
          name="nidk"
          form={form}
          placeholder="NIDK"
          label="NIDK"
          className="w-1/2 text-black-200 phones:w-full"
          type="text"
          isDisabled={disabled}
          isRow
        />
        <FormInputText
          name="nupn"
          form={form}
          placeholder="NUPN"
          label="NUPN"
          className="w-1/2 text-black-200 phones:w-full"
          type="text"
          isDisabled={disabled}
          isRow
        />
      </div>
      <div className="flex gap-64 phones:flex-col phones:gap-24">
        <FormInputText
          name="id_rumpun_ilmu"
          form={form}
          placeholder="Id Rumpun Ilmu"
          label="Id Rumpun Ilmu"
          className="w-1/2 text-black-200 phones:w-full"
          type="text"
          isDisabled={disabled}
          isRow
        />
        <FormInputRadio
          name="serdos_status"
          form={form}
          className="w-1/2 text-black-200 phones:w-full"
          label={'Serdos Status'}
          isDisabled={disabled}
          isRow
        />
      </div>
      <div className="flex gap-64 phones:flex-col phones:gap-24">
        <FormInputText
          name="serdos_tanggal"
          form={form}
          placeholder="Serdos Tanggal"
          label="Serdos Tanggal"
          className="w-1/2 text-black-200 phones:w-full"
          type="date"
          isDisabled={disabled}
          isRow
        />
        <FormInputText
          name="serdos_nomor"
          form={form}
          placeholder="Serdos Nomor"
          label="Serdos Nomor"
          className="w-1/2 text-black-200 phones:w-full"
          type="text"
          isDisabled={disabled}
          isRow
        />
      </div>
    </>
  )
}
