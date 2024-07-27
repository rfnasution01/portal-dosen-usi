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
    }),
  }),
})

export const {
  useGetAplikasiQuery,
  useGetIdentitasQuery,
  useGetInstitusiQuery,
  useGetProfilQuery,
} = ProfilEndpoints