import {
  useGetProdiDetailQuery,
  useGetProdiQuery,
} from '@/store/slices/akademik/prodiAPI'
import {
  GetProdiDetailType,
  GetProdiType,
} from '@/store/type/akademik/prodiType'
import { useEffect, useState } from 'react'

export function useAkademikProdi() {
  const id = localStorage.getItem('editID') ?? ''

  //   --- Prodi ---
  const [dataProdi, setDataProdi] = useState<GetProdiType[]>()

  const {
    data: Prodi,
    isLoading: isLoadingProdi,
    isFetching: isFetchingProdi,
  } = useGetProdiQuery()

  useEffect(() => {
    if (Prodi) {
      setDataProdi(Prodi?.data)
    }
  }, [Prodi])

  const loadingProdi = isLoadingProdi || isFetchingProdi

  //   --- Prodi ---
  const [dataProdiDetail, setDataProdiDetail] = useState<GetProdiDetailType>()

  const {
    data: ProdiDetail,
    isLoading: isLoadingProdiDetail,
    isFetching: isFetchingProdiDetail,
  } = useGetProdiDetailQuery({ id }, { skip: !id || id === '' })

  useEffect(() => {
    if (ProdiDetail) {
      setDataProdiDetail(ProdiDetail?.data)
    }
  }, [ProdiDetail])

  const loadingProdiDetail = isLoadingProdiDetail || isFetchingProdiDetail

  return {
    dataProdi,
    dataProdiDetail,
    loadingProdi,
    loadingProdiDetail,
  }
}
