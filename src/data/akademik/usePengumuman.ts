import { Meta } from '@/store/api'
import {
  useGetPengumumanDetailQuery,
  useGetPengumumanQuery,
} from '@/store/slices/akademik/pengumumanAPI'
import { GetPengumumanType } from '@/store/type/akademik/pengumumanType'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { Bounce, toast } from 'react-toastify'

export function useAkademikPengumuman() {
  const navigate = useNavigate()

  const id = localStorage.getItem('pengumumanID') ?? ''

  const [pageNumber, setPageNumber] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(10)
  const [search, setSearch] = useState<string>('')

  //   --- Pengumuman ---
  const [dataPengumuman, setDataPengumuman] = useState<GetPengumumanType[]>()
  const [meta, setMeta] = useState<Meta>()

  const {
    data: Pengumuman,
    isLoading: isLoadingPengumuman,
    isFetching: isFetchingPengumuman,
    isError: isErrorPengumuman,
    error: errorPengumuman,
  } = useGetPengumumanQuery({
    page_number: pageNumber,
    page_size: pageNumber,
    search: search,
  })

  useEffect(() => {
    if (Pengumuman) {
      setDataPengumuman(Pengumuman?.data)
      setMeta(Pengumuman?.meta)
    }
  }, [Pengumuman])

  const loadingPengumuman = isLoadingPengumuman || isFetchingPengumuman

  //   --- Pengumuman ---
  const [dataPengumumanDetail, setDataPengumumanDetail] =
    useState<GetPengumumanType>()
  const [dataPengumumanRelated, setDataPengumumanRelated] = useState<
    GetPengumumanType[]
  >([])

  const {
    data: PengumumanDetail,
    isLoading: isLoadingPengumumanDetail,
    isFetching: isFetchingPengumumanDetail,
  } = useGetPengumumanDetailQuery({ id: id }, { skip: !id || id === '' })

  useEffect(() => {
    if (PengumumanDetail) {
      setDataPengumumanDetail(PengumumanDetail?.data)
      setDataPengumumanRelated(PengumumanDetail?.related)
    }
  }, [PengumumanDetail])

  const loadingPengumumanDetail =
    isLoadingPengumumanDetail || isFetchingPengumumanDetail

  useEffect(() => {
    if (isErrorPengumuman) {
      const errorMsg = errorPengumuman as { data?: { message?: string } }

      toast.error(`${errorMsg?.data?.message ?? 'Terjadi Kesalahan'}`, {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      })

      if (errorMsg?.data?.message?.includes('Token')) {
        setTimeout(() => {
          Cookies.remove('token')
          navigate(`/login`)
        }, 3000)
      }
    }
  }, [isErrorPengumuman, errorPengumuman])

  return {
    dataPengumuman,
    dataPengumumanDetail,
    loadingPengumuman,
    loadingPengumumanDetail,
    pageNumber,
    pageSize,
    search,
    setPageNumber,
    setPageSize,
    setSearch,
    meta,
    dataPengumumanRelated,
  }
}
