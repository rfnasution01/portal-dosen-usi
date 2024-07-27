import {
  useGetPengumumanDetailQuery,
  useGetPengumumanQuery,
} from '@/store/slices/akademik/pengumumanAPI'
import { GetPengumumanType } from '@/store/type/akademik/pengumumanType'
import { useEffect, useState } from 'react'

export function useAkademikPengumuman() {
  const id = localStorage.getItem('editID') ?? ''

  //   --- Pengumuman ---
  const [dataPengumuman, setDataPengumuman] = useState<GetPengumumanType[]>()

  const {
    data: Pengumuman,
    isLoading: isLoadingPengumuman,
    isFetching: isFetchingPengumuman,
  } = useGetPengumumanQuery()

  useEffect(() => {
    if (Pengumuman) {
      setDataPengumuman(Pengumuman?.data)
    }
  }, [Pengumuman])

  const loadingPengumuman = isLoadingPengumuman || isFetchingPengumuman

  //   --- Pengumuman ---
  const [dataPengumumanDetail, setDataPengumumanDetail] =
    useState<GetPengumumanType>()

  const {
    data: PengumumanDetail,
    isLoading: isLoadingPengumumanDetail,
    isFetching: isFetchingPengumumanDetail,
  } = useGetPengumumanDetailQuery({ id }, { skip: !id || id === '' })

  useEffect(() => {
    if (PengumumanDetail) {
      setDataPengumumanDetail(PengumumanDetail?.data)
    }
  }, [PengumumanDetail])

  const loadingPengumumanDetail =
    isLoadingPengumumanDetail || isFetchingPengumumanDetail

  return {
    dataPengumuman,
    dataPengumumanDetail,
    loadingPengumuman,
    loadingPengumumanDetail,
  }
}
