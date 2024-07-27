import {
  useGetAplikasiQuery,
  useGetIdentitasQuery,
  useGetInstitusiQuery,
  useGetProfilQuery,
  useGetTahunAktifQuery,
} from '@/store/slices/profilType'
import {
  GetAplikasiType,
  GetIdentitasType,
  GetInstitusiType,
  GetProfilType,
  GetTahunAkademikType,
} from '@/store/type/identitasType'
import { useEffect, useState } from 'react'

export function useProfil() {
  // --- Identitas ---
  const [dataIdentitas, setDataIdentitas] = useState<GetIdentitasType>()

  const {
    data: identitas,
    isLoading: isLoadingIdentitas,
    isFetching: isFetchingIdentitas,
  } = useGetIdentitasQuery()

  useEffect(() => {
    if (identitas) {
      setDataIdentitas(identitas?.data)
    }
  }, [identitas])

  const loadingIdentitas = isLoadingIdentitas || isFetchingIdentitas

  //   --- Profil ---
  const [dataProfil, setDataProfil] = useState<GetProfilType>()

  const {
    data: profil,
    isLoading: isLoadingProfil,
    isFetching: isFetchingProfil,
  } = useGetProfilQuery()

  useEffect(() => {
    if (profil) {
      setDataProfil(profil?.data)
    }
  }, [profil])

  const loadingProfil = isLoadingProfil || isFetchingProfil

  //   --- Institusi ---
  const [dataInstitusi, setDataInstitusi] = useState<GetInstitusiType>()

  const {
    data: institusi,
    isLoading: isLoadingInstitusi,
    isFetching: isFetchingInstitusi,
  } = useGetInstitusiQuery()

  useEffect(() => {
    if (institusi) {
      setDataInstitusi(institusi?.data)
    }
  }, [institusi])

  const loadingInstitusi = isLoadingInstitusi || isFetchingInstitusi

  //   --- Aplikasi ---
  const [dataAplikasi, setDataAplikasi] = useState<GetAplikasiType[]>()

  const {
    data: aplikasi,
    isLoading: isLoadingAplikasi,
    isFetching: isFetchingAplikasi,
  } = useGetAplikasiQuery()

  useEffect(() => {
    if (aplikasi) {
      setDataAplikasi(aplikasi?.data)
    }
  }, [aplikasi])

  const loadingAplikasi = isLoadingAplikasi || isFetchingAplikasi

  //   --- Tahun Aktif ---
  const [dataTahunAktif, setDataTahunAktif] = useState<GetTahunAkademikType>()

  const {
    data: TahunAktif,
    isLoading: isLoadingTahunAktif,
    isFetching: isFetchingTahunAktif,
  } = useGetTahunAktifQuery()

  useEffect(() => {
    if (TahunAktif) {
      setDataTahunAktif(TahunAktif?.data)
    }
  }, [TahunAktif])

  const loadingTahunAktif = isLoadingTahunAktif || isFetchingTahunAktif

  return {
    dataIdentitas,
    loadingIdentitas,
    dataProfil,
    loadingProfil,
    dataInstitusi,
    loadingInstitusi,
    dataAplikasi,
    loadingAplikasi,
    dataTahunAktif,
    loadingTahunAktif,
  }
}
