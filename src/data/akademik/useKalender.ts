import { useGetKalendarAkademikQuery } from '@/store/slices/akademik/kalendarAkademikAPI'
import { GetKalendarAkademikType } from '@/store/type/akademik/kalendarAkademik'
import { useEffect, useState } from 'react'

export function useAkademikKalender() {
  //   --- Tahun Aktif ---
  const [dataKalender, setDataKalender] = useState<GetKalendarAkademikType>()

  const {
    data: Kalender,
    isLoading: isLoadingKalender,
    isFetching: isFetchingKalender,
  } = useGetKalendarAkademikQuery()

  useEffect(() => {
    if (Kalender) {
      setDataKalender(Kalender?.data)
    }
  }, [Kalender])

  const loadingKalender = isLoadingKalender || isFetchingKalender

  return { dataKalender, loadingKalender }
}
