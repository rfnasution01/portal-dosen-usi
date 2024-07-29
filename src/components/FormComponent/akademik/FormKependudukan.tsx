import { FormInputText } from '@/components/InputComponent'
import {
  SelectListKabupaten,
  SelectListKecamatan,
  SelectListNegara,
  SelectListProvinsi,
  SelectListReferensi,
} from '@/components/SelectComponent'
import { UseFormReturn } from 'react-hook-form'

export function FormAkademikKependudukan({
  form,
  isLoading,
  isEdit,
}: {
  form: UseFormReturn
  isLoading?: boolean
  isEdit: boolean
}) {
  const disabled = !isEdit || isLoading

  const provinsi = form.watch('id_provinsi')
  const kabupaten = form.watch('id_kabupaten')
  const kecamatan = form.watch('id_kecamatan')

  return (
    <>
      <div className="flex gap-64 phones:flex-col phones:gap-24">
        <FormInputText
          name="nomor_ktp"
          form={form}
          placeholder="Nomor KTP"
          label="Nomor KTP"
          className="w-1/2 text-primary-100 phones:w-full"
          type="text"
          isDisabled={disabled}
          isRow
        />
        <FormInputText
          name="file_ktp"
          form={form}
          placeholder="File KTP"
          label="File KTP"
          className="w-1/2 text-primary-100 phones:w-full"
          type="file"
          isDisabled={disabled}
          isRow
        />
      </div>
      <div className="flex gap-64 phones:flex-col phones:gap-24">
        <FormInputText
          name="nomor_kk"
          form={form}
          placeholder="Nomor KK"
          label="Nomor KK"
          className="w-1/2 text-primary-100 phones:w-full"
          type="text"
          isDisabled={disabled}
          isRow
        />
        <FormInputText
          name="file_kk"
          form={form}
          placeholder="File KK"
          label="File KK"
          className="w-1/2 text-primary-100 phones:w-full"
          type="file"
          isDisabled={disabled}
          isRow
        />
      </div>
      <div className="flex gap-64 phones:flex-col phones:gap-24">
        <FormInputText
          name="kode_pos"
          form={form}
          placeholder="Kode Pos"
          label="Kode Pos"
          className="w-1/2 text-primary-100 phones:w-full"
          type="text"
          isDisabled={disabled}
          isRow
        />
        <SelectListReferensi
          useFormReturn={form}
          name="id_suku"
          placeholder="Pilih"
          headerLabel="Suku"
          isDisabled={disabled}
          className="w-1/2 phones:w-full"
          q="suku"
          level1
          isRow
        />
      </div>
      <div className="flex gap-64 phones:flex-col phones:gap-24">
        <SelectListNegara
          useFormReturn={form}
          name="id_negara"
          placeholder="Pilih"
          headerLabel="Negara"
          isDisabled={disabled}
          className="w-1/2 phones:w-full"
          level2
          isRow
        />
        <SelectListProvinsi
          key={`id_provinsi-${provinsi}`}
          name="id_provinsi"
          useFormReturn={form}
          headerLabel="Provinsi"
          placeholder="Pilih"
          isDisabled={disabled}
          className="w-1/2 phones:w-full"
          level3
          isRow
        />
      </div>
      <div className="flex gap-64 phones:flex-col phones:gap-24">
        <SelectListKabupaten
          key={`id_kabupaten-${provinsi}-${kabupaten}`}
          name="id_kabupaten"
          useFormReturn={form}
          headerLabel="Kabupaten"
          placeholder="Pilih"
          isDisabled={!provinsi || isLoading || disabled}
          className="w-full"
          level4
          isRow
        />
        <SelectListKecamatan
          key={`id_kecamatan-${provinsi}-${kabupaten}-${kecamatan}`}
          name="id_kecamatan"
          useFormReturn={form}
          headerLabel="Kecamatan"
          placeholder="Pilih"
          isDisabled={!provinsi || !kabupaten || isLoading || disabled}
          level5
          isRow
        />
      </div>
      <div className="flex gap-64 phones:flex-col phones:gap-24">
        <FormInputText
          name="alamat"
          form={form}
          placeholder="Alamat Lengkap"
          label="Alamat Lengkap"
          className="w-1/2 text-primary-100 phones:w-full"
          type="text"
          isDisabled={disabled}
          isRow
        />
        <div className="w-1/2 phones:hidden" />
      </div>
    </>
  )
}
