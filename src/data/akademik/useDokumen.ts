import { useGetDokumenAkademikQuery } from '@/store/slices/akademik/dokumenAkademikAPI'
import { GetDokumenAkademikType } from '@/store/type/akademik/dokumenAkademik'
import { useEffect, useState } from 'react'

export function useAkademikDokumen() {
  //   --- Tahun Aktif ---
  const [dataDokumen, setDataDokumen] = useState<GetDokumenAkademikType[]>()

  const {
    data: Dokumen,
    isLoading: isLoadingDokumen,
    isFetching: isFetchingDokumen,
  } = useGetDokumenAkademikQuery()

  useEffect(() => {
    if (Dokumen) {
      setDataDokumen(Dokumen?.data)
    }
  }, [Dokumen])

  const loadingDokumen = isLoadingDokumen || isFetchingDokumen

  return { dataDokumen, loadingDokumen }
}
