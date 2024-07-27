import { Res, api } from '../api'
import {
  GetAplikasiType,
  GetIdentitasType,
  GetInstitusiType,
  GetProfilType,
} from '../type/identitasType'

export const ProfilEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getAplikasi: builder.query<Res<GetAplikasiType[]>, void>({
      query: () => ({
        url: `aplikasi`,
        method: 'GET',
      }),
    }),
    getIdentitas: builder.query<Res<GetIdentitasType>, void>({
      query: () => ({
        url: `identitas`,
        method: 'GET',
      }),
    }),
    getInstitusi: builder.query<Res<GetInstitusiType>, void>({
      query: () => ({
        url: `institusi`,
        method: 'GET',
      }),
    }),
    getProfil: builder.query<Res<GetProfilType>, void>({
      query: () => ({
        url: `profil`,
        method: 'GET',
      }),
      providesTags: ['profil'],
    }),
    updateKepegawaian: builder.mutation<void, { data: FormData }>({
      query: ({ data }) => ({
        url: `profil/kepegawaian`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['profil'],
    }),
    updateDosen: builder.mutation<void, { data: FormData }>({
      query: ({ data }) => ({
        url: `profil/dosen`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['profil'],
    }),
    updateDomisili: builder.mutation<void, { data: FormData }>({
      query: ({ data }) => ({
        url: `profil/domisili`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['profil'],
    }),
    updateKependudukan: builder.mutation<void, { data: FormData }>({
      query: ({ data }) => ({
        url: `profil/kependudukan`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['profil'],
    }),
    updateRekening: builder.mutation<void, { data: FormData }>({
      query: ({ data }) => ({
        url: `profil/rekening`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['profil'],
    }),
    updateDokumen: builder.mutation<void, { data: FormData }>({
      query: ({ data }) => ({
        url: `profil/dokumen`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['profil'],
    }),
    updateDataLain: builder.mutation<void, { data: FormData }>({
      query: ({ data }) => ({
        url: `profil/datalain`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['profil'],
    }),
  }),
})

export const {
  useGetAplikasiQuery,
  useGetIdentitasQuery,
  useGetInstitusiQuery,
  useGetProfilQuery,
  useUpdateDataLainMutation,
  useUpdateDokumenMutation,
  useUpdateDomisiliMutation,
  useUpdateDosenMutation,
  useUpdateKepegawaianMutation,
  useUpdateKependudukanMutation,
  useUpdateRekeningMutation,
} = ProfilEndpoints
