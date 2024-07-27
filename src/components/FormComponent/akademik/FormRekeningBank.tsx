/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from '@/components/Form'
import { FormInputText } from '@/components/InputComponent'
import { SelectListReferensi } from '@/components/SelectComponent'
import { UseFormReturn } from 'react-hook-form'

export function FormAkademikRekeningBank({
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
        <div className="flex gap-24 phones:flex-col">
          <SelectListReferensi
            useFormReturn={form}
            name="id_bank"
            placeholder="Pilih"
            headerLabel="Bank"
            isDisabled={isLoading}
            q="bank"
            level1
          />
          <div className="w-1/2 phones:hidden" />
        </div>
        <div className="flex gap-24 phones:flex-col">
          <FormInputText
            name="nomor_rekening"
            form={form}
            placeholder="Nomor Rekening"
            label="Nomor Rekening"
            className="w-1/2 text-black-200 phones:w-full"
            type="text"
            isDisabled={isLoading}
          />
          <FormInputText
            name="nama_rekening"
            form={form}
            placeholder="Nama Rekening"
            label="Nama Rekening"
            className="w-1/2 text-black-200 phones:w-full"
            type="text"
            isDisabled={isLoading}
          />
        </div>
        <div className="flex gap-24 phones:flex-col">
          <FormInputText
            name="cabang_bank"
            form={form}
            placeholder="Cabang Bank"
            label="Cabang Bank"
            className="w-1/2 text-black-200 phones:w-full"
            type="text"
            isDisabled={isLoading}
          />
        </div>
      </form>
    </Form>
  )
}
