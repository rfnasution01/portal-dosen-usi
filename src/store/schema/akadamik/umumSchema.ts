import zod from 'zod'

export const AkademikKepegawaianSchema = zod.object({
  nama: zod.string().nullable().nullish().optional(),
  gelar_depan: zod.string().nullable().nullish().optional(),
  gelar_belakang: zod.string().nullable().nullish().optional(),
  id_agama: zod.string().nullable().nullish().optional(),
  agama: zod.string().nullable().nullish().optional(),
  id_jenis_kelamin: zod.string().nullable().nullish().optional(),
  jenis_kelamin: zod.string().nullable().nullish().optional(),
  tempat_lahir: zod.string().nullable().nullish().optional(),
  tanggal_lahir: zod.string().nullable().nullish().optional(),
  id_status_nikah: zod.string().nullable().nullish().optional(),
  status_nikah: zod.string().nullable().nullish().optional(),
  id_unit_kerja: zod.string().nullable().nullish().optional(),
  unit_kerja: zod.string().nullable().nullish().optional(),
  email_perguruan_tinggi: zod.string().nullable().nullish().optional(),
  no_akun_finger: zod.string().nullable().nullish().optional(),
  id_jabatan_akademik: zod.string().nullable().nullish().optional(),
  jabatan_akademik: zod.string().nullable().nullish().optional(),
})

export const AkademikDosenSchema = zod.object({
  id_sinta: zod.string().nullable().nullish().optional(),
  sinta: zod.string().nullable().nullish().optional(),
  id_orcid: zod.string().nullable().nullish().optional(),
  orcid: zod.string().nullable().nullish().optional(),
  id_scopus: zod.string().nullable().nullish().optional(),
  scopus: zod.string().nullable().nullish().optional(),
  nidn: zod.string().nullable().nullish().optional(),
  nidk: zod.string().nullable().nullish().optional(),
  nupn: zod.string().nullable().nullish().optional(),
  id_rumpun_ilmu: zod.string().nullable().nullish().optional(),
  rumpun_ilmu: zod.string().nullable().nullish().optional(),
  serdos_status: zod.string().nullable().nullish().optional(),
  serdos_tanggal: zod.string().nullable().nullish().optional(),
  serdos_nomor: zod.string().nullable().nullish().optional(),
})

export const AkademikDomisiliSchema = zod.object({
  id_provinsi: zod.string().nullable().nullish().optional(),
  provinsi: zod.string().nullable().nullish().optional(),
  id_kabupaten: zod.string().nullable().nullish().optional(),
  kabupaten: zod.string().nullable().nullish().optional(),
  id_kecamatan: zod.string().nullable().nullish().optional(),
  kecamatan: zod.string().nullable().nullish().optional(),
  alamat_lengkap: zod.string().nullable().nullish().optional(),
  kode_pos: zod.string().nullable().nullish().optional(),
  jarak_rumah_kantor: zod.string().nullable().nullish().optional(),
  nomor_telepon: zod.string().nullable().nullish().optional(),
  nomor_telepon_kantor: zod.string().nullable().nullish().optional(),
})

export const AkademikKependudukanSchema = zod.object({
  nomor_ktp: zod.string().nullable().nullish().optional(),
  nomor_kk: zod.string().nullable().nullish().optional(),
  alamat: zod.string().nullable().nullish().optional(),
  kode_pos: zod.string().nullable().nullish().optional(),
  id_suku: zod.string().nullable().nullish().optional(),
  suku: zod.string().nullable().nullish().optional(),
  id_negara: zod.string().nullable().nullish().optional(),
  negara: zod.string().nullable().nullish().optional(),
  id_provinsi: zod.string().nullable().nullish().optional(),
  provinsi: zod.string().nullable().nullish().optional(),
  id_kabupaten: zod.string().nullable().nullish().optional(),
  kabupaten: zod.string().nullable().nullish().optional(),
  id_kecamatan: zod.string().nullable().nullish().optional(),
  kecamatan: zod.string().nullable().nullish().optional(),
  file_ktp: zod.string().nullable().nullish().optional(),
  file_kk: zod.string().nullable().nullish().optional(),
})

export const AkademikRekeningSchema = zod.object({
  id_bank: zod.string().nullable().nullish().optional(),
  bank: zod.string().nullable().nullish().optional(),
  nomor_rekening: zod.string().nullable().nullish().optional(),
  nama_rekening: zod.string().nullable().nullish().optional(),
  cabang_bank: zod.string().nullable().nullish().optional(),
  file: zod.string().nullable().nullish().optional(),
})

export const AkademikDokumenSchema = zod.object({
  nomor_karpeg: zod.string().nullable().nullish().optional(),
  npwp: zod.string().nullable().nullish().optional(),
  nomor_bpjs: zod.string().nullable().nullish().optional(),
  nomor_bpjs_ketenagakerjaan: zod.string().nullable().nullish().optional(),
  nomor_bpjs_pensiun: zod.string().nullable().nullish().optional(),
  file_npwp: zod.string().nullable().nullish().optional(),
  file_bpjs: zod.string().nullable().nullish().optional(),
  file_bpjs_ketenagakerjaan: zod.string().nullable().nullish().optional(),
  file_bpjs_pensiun: zod.string().nullable().nullish().optional(),
})

export const AkademikDataLainSchema = zod.object({
  id_golongan_darah: zod.string().nullable().nullish().optional(),
  golongan_darah: zod.string().nullable().nullish().optional(),
  tinggi_badan: zod.string().nullable().nullish().optional(),
  berat_badan: zod.string().nullable().nullish().optional(),
  id_hobby: zod.string().nullable().nullish().optional(),
  file: zod.string().nullable().nullish().optional(),
})

export const AkademikFilterProdiSchema = zod.object({
  id: zod.string().nullable().nullish().optional(),
})
