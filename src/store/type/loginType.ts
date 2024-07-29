export type PostLoginParams = {
  username: string
  password: string
  hasil?: string
}

export type LoginResponseType = {
  token: string
}

export type PostUbahPasswordType = {
  old_password: string
  new_password: string
}

export type PostResetPasswordType = {
  token: string
  new_password: string
}
