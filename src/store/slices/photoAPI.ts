import { api } from '../api'

export const PhotoEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    updatePhoto: builder.mutation<void, FormData>({
      query: (foto) => ({
        url: `profil/photo`,
        method: 'POST',
        body: foto,
      }),
      invalidatesTags: ['profil'],
    }),
  }),
})

export const { useUpdatePhotoMutation } = PhotoEndpoints
