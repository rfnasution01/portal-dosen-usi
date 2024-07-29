import zod from 'zod'

export const LoginSchema = zod.object({
  username: zod.string({
    required_error: 'Username harus di isi',
    invalid_type_error: 'Format username tidak valid',
  }),
  password: zod.string({
    required_error: 'Password harus di isi',
    invalid_type_error: 'Format password tidak valid',
  }),
  hasil: zod.string({
    required_error: 'Hasil harus di isi',
    invalid_type_error: 'Format hasil tidak valid',
  }),
})

export const UbahPasswordSchema = zod.object({
  old_password: zod.string({
    required_error: 'Password harus di isi',
    invalid_type_error: 'Format password tidak valid',
  }),
  new_password: zod.string({
    required_error: 'Password harus di isi',
    invalid_type_error: 'Format password tidak valid',
  }),
})

export const ResetPasswordSchema = zod.object({
  token: zod.string().optional().nullable().nullish(),
  new_password: zod.string().optional().nullable().nullish(),
})
