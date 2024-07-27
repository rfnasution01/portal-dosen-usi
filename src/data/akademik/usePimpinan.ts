import {
  useGetPimpinanDetailQuery,
  useGetPimpinanQuery,
} from '@/store/slices/akademik/pimpinanAPI'
import {
  GetPimpinanDetailType,
  GetPimpinanType,
} from '@/store/type/akademik/pimpinanType'
import { useEffect, useState } from 'react'

export function useAkademikPimpinan() {
  const id = localStorage.getItem('editID') ?? ''

  //   --- Pimpinan ---
  const [dataPimpinan, setDataPimpinan] = useState<GetPimpinanType[]>()

  const {
    data: Pimpinan,
    isLoading: isLoadingPimpinan,
    isFetching: isFetchingPimpinan,
  } = useGetPimpinanQuery()

  useEffect(() => {
    if (Pimpinan) {
      setDataPimpinan(Pimpinan?.data)
    }
  }, [Pimpinan])

  const loadingPimpinan = isLoadingPimpinan || isFetchingPimpinan

  //   --- Pimpinan ---
  const [dataPimpinanDetail, setDataPimpinanDetail] =
    useState<GetPimpinanDetailType>()

  const {
    data: PimpinanDetail,
    isLoading: isLoadingPimpinanDetail,
    isFetching: isFetchingPimpinanDetail,
  } = useGetPimpinanDetailQuery({ id }, { skip: !id || id === '' })

  useEffect(() => {
    if (PimpinanDetail) {
      setDataPimpinanDetail(PimpinanDetail?.data)
    }
  }, [PimpinanDetail])

  const loadingPimpinanDetail =
    isLoadingPimpinanDetail || isFetchingPimpinanDetail

  return {
    dataPimpinan,
    dataPimpinanDetail,
    loadingPimpinan,
    loadingPimpinanDetail,
  }
}
