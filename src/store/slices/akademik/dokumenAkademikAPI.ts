import { api, Res } from '@/store/api'
import { GetDokumenAkademikType } from '@/store/type/akademik/dokumenAkademik'

export const DokumenAkademikEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getDokumenAkademik: builder.query<Res<GetDokumenAkademikType[]>, void>({
      query: () => ({
        url: `dokumen_akademik`,
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetDokumenAkademikQuery } = DokumenAkademikEndpoints
