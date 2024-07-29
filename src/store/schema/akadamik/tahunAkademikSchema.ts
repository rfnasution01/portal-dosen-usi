import zod from 'zod'

export const AkademikTahunAkademikSchema = zod.object({
  tahun: zod.string().nullable().nullish().optional(),
  tahap: zod.string().nullable().nullish().optional(),
  id_tahap: zod.string().nullable().nullish().optional(),
  kode_prodi: zod.string().nullable().nullish().optional(),
  id_kode_prodi: zod.string().nullable().nullish().optional(),
})
