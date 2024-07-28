import * as zod from 'zod'

export const AkademikJadwalKuliahKomposisiSchema = zod.object({
  id_kelas_makul: zod.string().nullable().nullish().optional(),
  komposisi_nilai: zod.record(
    zod.string().uuid(),
    zod.string().nullable().nullish().optional(),
  ),
})

export type PostKomposisiBody = zod.infer<
  typeof AkademikJadwalKuliahKomposisiSchema
>

export const AkademikJadwalKuliahSchema = zod
  .object({
    idm: zod.string().nullable().nullish().optional(),
    id_mk: zod.string().nullable().nullish().optional(),
    id_aspek: zod.string().nullable().nullish().optional(),
    nilai: zod.string().nullable().nullish().optional(),
  })
  .catchall(zod.string().nullable().nullish().optional())
