import { useGetTahunAktifQuery } from '@/store/slices/akademik/tahunAktifAPI'
import { GetTahunAkktifType } from '@/store/type/akademik/tahunAktifType'
import { useEffect, useState } from 'react'

export function useAkademikTahunAktif() {
  //   --- Tahun Aktif ---
  const [dataTahunAktif, setDataTahunAktif] = useState<GetTahunAkktifType>()

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

  return { dataTahunAktif, loadingTahunAktif }
}
