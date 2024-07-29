import { Res, api } from '../api'
import {
  LoginResponseType,
  PostLoginParams,
  PostResetPasswordType,
  PostUbahPasswordType,
} from '../type/loginType'

export const LoginEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    postLogin: builder.mutation<
      Res<LoginResponseType>,
      { data: PostLoginParams }
    >({
      query: ({ data }) => ({
        url: `login`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [
        'akademik-tahun-aktif',
        'profil',
        'komposisi',
        'nilai',
        'mahasiswa',
        'dan-lain-lain',
      ],
    }),
    updatePassword: builder.mutation<void, { data: PostUbahPasswordType }>({
      query: ({ data }) => ({
        url: `change_password`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [
        'akademik-tahun-aktif',
        'profil',
        'komposisi',
        'nilai',
        'mahasiswa',
        'dan-lain-lain',
      ],
    }),
    resetPassword: builder.mutation<void, { data: PostResetPasswordType }>({
      query: ({ data }) => ({
        url: `reset_password`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [
        'akademik-tahun-aktif',
        'profil',
        'komposisi',
        'nilai',
        'mahasiswa',
        'dan-lain-lain',
      ],
    }),
  }),
})

export const {
  usePostLoginMutation,
  useUpdatePasswordMutation,
  useResetPasswordMutation,
} = LoginEndpoints
