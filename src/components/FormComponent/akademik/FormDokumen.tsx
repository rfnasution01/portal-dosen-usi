import { FormInputFileAppend, FormInputText } from '@/components/InputComponent'
import { useProfil } from '@/data/useProfil'
import { Dispatch, SetStateAction } from 'react'
import { UseFormReturn } from 'react-hook-form'

export function FormAkademikDokumen({
  form,
  isLoading,
  isEdit,
  setFileBPJS,
  setFileBPJSKetenagakerjaan,
  setFileBPJSPensiun,
  setFileKarpeg,
  setFileNPWP,
  fileUrlBPJS,
  fileUrlBPJSKetenagakerjaan,
  fileUrlBPJSPensiun,
  fileUrlKarpeg,
  fileUrlNPWP,
  setFileUrlBPJS,
  setFileUrlBPJSKetenagakerjaan,
  setFileUrlBPJSPensiun,
  setFileUrlKarpeg,
  setFileUrlNPWP,
}: {
  form: UseFormReturn
  isLoading?: boolean
  isEdit: boolean
  setFileKarpeg: Dispatch<SetStateAction<File>>
  setFileUrlKarpeg: Dispatch<SetStateAction<string>>
  fileUrlKarpeg: string
  setFileNPWP: Dispatch<SetStateAction<File>>
  setFileUrlNPWP: Dispatch<SetStateAction<string>>
  fileUrlNPWP: string
  setFileBPJS: Dispatch<SetStateAction<File>>
  setFileUrlBPJS: Dispatch<SetStateAction<string>>
  fileUrlBPJS: string
  setFileBPJSKetenagakerjaan: Dispatch<SetStateAction<File>>
  setFileUrlBPJSKetenagakerjaan: Dispatch<SetStateAction<string>>
  fileUrlBPJSKetenagakerjaan: string
  setFileBPJSPensiun: Dispatch<SetStateAction<File>>
  setFileUrlBPJSPensiun: Dispatch<SetStateAction<string>>
  fileUrlBPJSPensiun: string
}) {
  const disabled = !isEdit || isLoading
  const { dataProfil } = useProfil()

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
          name="npwp"
          form={form}
          placeholder="NPWP"
          label="NPWP"
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
          name="nomor_bpjs_ketenagakerjaan"
          form={form}
          placeholder="Nomor BPJS Ketenagakerjaan"
          label="Nomor BPJS Ketenagakerjaans"
          className="w-1/2 text-primary-100 phones:w-full"
          type="text"
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
        <div className="w-1/2 phones:hidden" />
      </div>
      <div className="flex gap-64 phones:flex-col phones:gap-24">
        <FormInputFileAppend
          name="file_karpeg"
          form={form}
          label="File Karpeg"
          className="w-1/2 text-primary-100 phones:w-full"
          disabled={disabled}
          isRow
          setFile={setFileKarpeg}
          fileUrl={fileUrlKarpeg}
          setFileUrl={setFileUrlKarpeg}
          image={dataProfil?.dokumen?.file_karpeg}
        />
        <FormInputFileAppend
          name="file_npwp"
          form={form}
          label="File NPWP"
          className="w-1/2 text-primary-100 phones:w-full"
          disabled={disabled}
          isRow
          setFile={setFileNPWP}
          fileUrl={fileUrlNPWP}
          setFileUrl={setFileUrlNPWP}
          image={dataProfil?.dokumen?.file_npwp}
        />
      </div>

      <div className="flex gap-64 phones:flex-col phones:gap-24">
        <FormInputFileAppend
          name="file_bpjs"
          form={form}
          label="File BPJS"
          className="w-1/2 text-primary-100 phones:w-full"
          disabled={disabled}
          isRow
          setFile={setFileBPJS}
          fileUrl={fileUrlBPJS}
          setFileUrl={setFileUrlBPJS}
          image={dataProfil?.dokumen?.file_bpjs}
        />
        <FormInputFileAppend
          name="file_bpjs_ketenagakerjaan"
          form={form}
          label="File BPJS Ketenagakerjaan"
          className="w-1/2 text-primary-100 phones:w-full"
          disabled={disabled}
          isRow
          setFile={setFileBPJSKetenagakerjaan}
          fileUrl={fileUrlBPJSKetenagakerjaan}
          setFileUrl={setFileUrlBPJSKetenagakerjaan}
          image={dataProfil?.dokumen?.file_bpjs_ketenagakerjaan}
        />
      </div>
      <div className="flex gap-64 phones:flex-col phones:gap-24">
        <FormInputFileAppend
          name="file_bpjs_pensiun"
          form={form}
          label="File BPJS Pensiun"
          className="w-1/2 text-primary-100 phones:w-full"
          disabled={disabled}
          isRow
          setFile={setFileBPJSPensiun}
          fileUrl={fileUrlBPJSPensiun}
          setFileUrl={setFileUrlBPJSPensiun}
          image={dataProfil?.dokumen?.file_bpjs_pensiun}
        />
        <div className="w-1/2 phones:hidden" />
      </div>
    </>
  )
}
