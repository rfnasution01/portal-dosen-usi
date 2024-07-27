import { useGetKataMutiaraQuery } from '@/store/slices/akademik/kataMutiaraAPI'
import { GetKataMutiaraType } from '@/store/type/akademik/dashboardType'
import { useEffect, useState } from 'react'

export function useAkademikKataMutiara() {
  //   --- Kata Mutiara ---
  const [dataKataMutiara, setDataKataMutiara] = useState<GetKataMutiaraType>()

  const {
    data: kataMutiara,
    isLoading: isLoadingKataMutiara,
    isFetching: isFetchingKataMutiara,
  } = useGetKataMutiaraQuery()

  useEffect(() => {
    if (kataMutiara) {
      setDataKataMutiara(kataMutiara?.data)
    }
  }, [kataMutiara])

  const loadingKataMutiara = isLoadingKataMutiara || isFetchingKataMutiara

  return {
    dataKataMutiara,
    loadingKataMutiara,
  }
}
