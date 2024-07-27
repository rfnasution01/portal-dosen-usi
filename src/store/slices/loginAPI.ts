import { Res, api } from '../api'
import { LoginResponseType, PostLoginParams } from '../type/loginType'

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
    }),
  }),
})

export const { usePostLoginMutation } = LoginEndpoints
