import {
  useGetDosenDetailQuery,
  useGetDosenQuery,
} from '@/store/slices/akademik/dosenAPI'
import {
  GetDosenDetailType,
  GetDosenType,
} from '@/store/type/akademik/dosenType'
import { useEffect, useState } from 'react'

export function useAkademikDosen() {
  const id = localStorage.getItem('editID') ?? ''

  //   --- Dosen ---
  const [dataDosen, setDataDosen] = useState<GetDosenType[]>()

  const {
    data: Dosen,
    isLoading: isLoadingDosen,
    isFetching: isFetchingDosen,
  } = useGetDosenQuery()

  useEffect(() => {
    if (Dosen) {
      setDataDosen(Dosen?.data)
    }
  }, [Dosen])

  const loadingDosen = isLoadingDosen || isFetchingDosen

  //   --- Dosen ---
  const [dataDosenDetail, setDataDosenDetail] = useState<GetDosenDetailType>()

  const {
    data: DosenDetail,
    isLoading: isLoadingDosenDetail,
    isFetching: isFetchingDosenDetail,
  } = useGetDosenDetailQuery({ id }, { skip: !id || id === '' })

  useEffect(() => {
    if (DosenDetail) {
      setDataDosenDetail(DosenDetail?.data)
    }
  }, [DosenDetail])

  const loadingDosenDetail = isLoadingDosenDetail || isFetchingDosenDetail

  return {
    dataDosen,
    dataDosenDetail,
    loadingDosen,
    loadingDosenDetail,
  }
}
