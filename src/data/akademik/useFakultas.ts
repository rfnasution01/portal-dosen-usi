import {
  useGetFakultasDetailQuery,
  useGetFakultasQuery,
} from '@/store/slices/akademik/fakultasAPI'
import { GetFakultasType } from '@/store/type/akademik/fakultasType'
import { useEffect, useState } from 'react'

export function useAkademikFakultas() {
  const id = localStorage.getItem('fakultasID') ?? ''

  //   --- Fakultas ---
  const [dataFakultas, setDataFakultas] = useState<GetFakultasType[]>()

  const {
    data: Fakultas,
    isLoading: isLoadingFakultas,
    isFetching: isFetchingFakultas,
  } = useGetFakultasQuery()

  useEffect(() => {
    if (Fakultas) {
      setDataFakultas(Fakultas?.data)
    }
  }, [Fakultas])

  const loadingFakultas = isLoadingFakultas || isFetchingFakultas

  //   --- Fakultas ---
  const [dataFakultasDetail, setDataFakultasDetail] =
    useState<GetFakultasType>()

  const {
    data: FakultasDetail,
    isLoading: isLoadingFakultasDetail,
    isFetching: isFetchingFakultasDetail,
  } = useGetFakultasDetailQuery({ id }, { skip: !id || id === '' })

  useEffect(() => {
    if (FakultasDetail) {
      setDataFakultasDetail(FakultasDetail?.data)
    }
  }, [FakultasDetail])

  const loadingFakultasDetail =
    isLoadingFakultasDetail || isFetchingFakultasDetail

  return {
    dataFakultas,
    dataFakultasDetail,
    loadingFakultas,
    loadingFakultasDetail,
  }
}
