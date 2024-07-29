import { api, Res } from '@/store/api'
import { GetKataMutiaraType } from '@/store/type/akademik/dashboardType'

export const KataMutiaraEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getKataMutiara: builder.query<Res<GetKataMutiaraType>, void>({
      query: () => ({
        url: `kata_mutiara`,
        method: 'GET',
      }),
      providesTags: ['dan-lain-lain'],
    }),
  }),
})

export const { useGetKataMutiaraQuery } = KataMutiaraEndpoints
