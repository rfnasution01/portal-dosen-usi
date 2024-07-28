import * as zod from 'zod'

export const SiakadJadwalKuliahSchema = zod.object({
  id_kelas_makul: zod.string().nullable().nullish().optional(),
  komposisi_nilai: zod.record(
    zod.string().uuid(),
    zod.string().nullable().nullish().optional(),
  ),
})
