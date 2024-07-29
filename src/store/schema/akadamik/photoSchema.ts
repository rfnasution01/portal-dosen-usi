import zod from 'zod'

export const AkademikPhotoSchema = zod.object({
  photo: zod.string().nullable().nullish().optional(),
})
