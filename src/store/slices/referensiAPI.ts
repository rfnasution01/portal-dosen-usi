import { Res, api } from '../api'
import { GetReferensiNegaraType, GetReferensiType } from '../type/referensiType'

export const ReferensiEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getReferensi: builder.query<Res<GetReferensiType[]>, { q: string }>({
      query: ({ q }) => ({
        url: `referensi`,
        method: 'GET',
        params: {
          q: q,
        },
      }),
    }),
    getReferensiNegara: builder.query<Res<GetReferensiNegaraType[]>, void>({
      query: () => ({
        url: `ref_negara`,
        method: 'GET',
      }),
    }),
    getReferensiProvinsi: builder.query<Res<GetReferensiType[]>, void>({
      query: () => ({
        url: `ref_provinsi`,
        method: 'GET',
      }),
    }),
    getReferensiKabupaten: builder.query<
      Res<GetReferensiType[]>,
      { id_provinsi: string }
    >({
      query: ({ id_provinsi }) => ({
        url: `ref_kabupaten`,
        method: 'GET',
        params: {
          id_provinsi: id_provinsi,
        },
      }),
    }),
    getReferensiKecamatan: builder.query<
      Res<GetReferensiType[]>,
      { id_kabupaten: string }
    >({
      query: ({ id_kabupaten }) => ({
        url: `ref_kecamatan`,
        method: 'GET',
        params: {
          id_kabupaten: id_kabupaten,
        },
      }),
    }),
  }),
})

export const {
  useGetReferensiKabupatenQuery,
  useGetReferensiKecamatanQuery,
  useGetReferensiNegaraQuery,
  useGetReferensiProvinsiQuery,
  useGetReferensiQuery,
} = ReferensiEndpoints
