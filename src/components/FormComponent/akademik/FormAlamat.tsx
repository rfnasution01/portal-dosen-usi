import { FormInputText } from '@/components/InputComponent'
import {
  SelectListKabupaten,
  SelectListKecamatan,
  SelectListProvinsi,
} from '@/components/SelectComponent'
import { UseFormReturn } from 'react-hook-form'

export function FormAkademikAlamat({
  form,
  isLoading,
  isEdit,
}: {
  form: UseFormReturn
  isLoading?: boolean
  isEdit: boolean
}) {
  const disabled = isLoading || !isEdit

  const provinsi = form.watch('id_provinsi')
  const kabupaten = form.watch('id_kabupaten')
  const kecamatan = form.watch('id_kecamatan')

  return (
    <>
      <div className="flex gap-64 phones:flex-col phones:gap-24">
        <SelectListProvinsi
          key={`id_provinsi-${provinsi}`}
          name="id_provinsi"
          useFormReturn={form}
          headerLabel="Provinsi"
          placeholder="Pilih"
          isDisabled={disabled}
          className="w-full"
          level1
          isRow
        />

        <div className="w-full phones:hidden" />
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
          level2
          isRow
        />
        <SelectListKecamatan
          key={`id_kecamatan-${provinsi}-${kabupaten}-${kecamatan}`}
          name="id_kecamatan"
          useFormReturn={form}
          headerLabel="Kecamatan"
          placeholder="Pilih"
          isDisabled={!provinsi || !kabupaten || isLoading || disabled}
          level3
          isRow
        />
      </div>
      <div className="flex gap-64 phones:flex-col phones:gap-24">
        <FormInputText
          name={`alamat_lengkap`}
          form={form}
          label="Alamat Lengkap"
          placeholder="Alamat"
          className="w-1/2 text-primary-100 phones:w-full"
          type="text"
          isDisabled={disabled}
          isRow
        />

        <div className="w-1/2 phones:hidden" />
      </div>

      <div className="flex gap-64 phones:flex-col phones:gap-24">
        <FormInputText
          name={`jarak_rumah_kantor`}
          form={form}
          label="Jarak Rumah Kantor"
          placeholder="Jarak Rumah Kantor"
          className="w-1/2 text-primary-100 phones:w-full"
          type="text"
          isDisabled={disabled}
          isRow
        />

        <FormInputText
          name={`kode_pos`}
          form={form}
          label="Kode Pos"
          placeholder="Kode Pos"
          className="w-1/2 text-primary-100 phones:w-full"
          type="text"
          isDisabled={disabled}
          isRow
        />
      </div>
      <div className="flex gap-64 phones:flex-col phones:gap-24">
        <FormInputText
          name={`nomor_telepon`}
          form={form}
          label="Handphone"
          placeholder="Handphone"
          className="w-1/2 text-primary-100 phones:w-full"
          type="text"
          isDisabled={disabled}
          isRow
        />

        <FormInputText
          name={`nomor_telepon_kantor`}
          form={form}
          label="No. Telp Kantor"
          placeholder="No. Telp Kantor"
          className="w-1/2 text-primary-100 phones:w-full"
          type="text"
          isDisabled={disabled}
          isRow
        />
      </div>
    </>
  )
}
