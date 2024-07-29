import { api, Res } from '@/store/api'
import { GetKalendarAkademikType } from '@/store/type/akademik/kalendarAkademik'

export const KalendarAkademikEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getKalendarAkademik: builder.query<Res<GetKalendarAkademikType[]>, void>({
      query: () => ({
        url: `kalender_akademik`,
        method: 'GET',
      }),
      providesTags: ['dan-lain-lain'],
    }),
  }),
})

export const { useGetKalendarAkademikQuery } = KalendarAkademikEndpoints
