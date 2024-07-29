import {
  useGetAplikasiQuery,
  useGetIdentitasQuery,
  useGetInstitusiQuery,
  useGetProfilQuery,
} from '@/store/slices/profilAPI'
import {
  GetAplikasiType,
  GetIdentitasType,
  GetInstitusiType,
  GetProfilType,
} from '@/store/type/identitasType'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { Bounce, toast } from 'react-toastify'
import { AkademikPhotoSchema } from '@/store/schema/akadamik/photoSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { useUpdatePhotoMutation } from '@/store/slices/photoAPI'

export function useProfil() {
  const navigate = useNavigate()

  // --- Identitas ---
  const [dataIdentitas, setDataIdentitas] = useState<GetIdentitasType>()

  const {
    data: identitas,
    isLoading: isLoadingIdentitas,
    isFetching: isFetchingIdentitas,
    isError: isErrorProfil,
    error: errorProfil,
  } = useGetIdentitasQuery()

  const [isShowPhoto, setIsShowPhoto] = useState<boolean>(false)

  const formPhoto = useForm<zod.infer<typeof AkademikPhotoSchema>>({
    resolver: zodResolver(AkademikPhotoSchema),
    defaultValues: {},
  })

  useEffect(() => {
    if (isErrorProfil) {
      const errorMsg = errorProfil as { data?: { message?: string } }

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
          navigate(`/`)
        }, 3000)
      }
    }
  }, [isErrorProfil, errorProfil])

  useEffect(() => {
    if (identitas) {
      setDataIdentitas(identitas?.data)
    }
  }, [identitas])

  const loadingIdentitas = isLoadingIdentitas || isFetchingIdentitas

  //   --- Profil ---
  const [dataProfil, setDataProfil] = useState<GetProfilType>()

  const {
    data: profil,
    isLoading: isLoadingProfil,
    isFetching: isFetchingProfil,
  } = useGetProfilQuery()

  useEffect(() => {
    if (profil) {
      setDataProfil(profil?.data)
    }
  }, [profil])

  const loadingProfil = isLoadingProfil || isFetchingProfil

  //   --- Institusi ---
  const [dataInstitusi, setDataInstitusi] = useState<GetInstitusiType>()

  const {
    data: institusi,
    isLoading: isLoadingInstitusi,
    isFetching: isFetchingInstitusi,
  } = useGetInstitusiQuery()

  useEffect(() => {
    if (institusi) {
      setDataInstitusi(institusi?.data)
    }
  }, [institusi])

  const loadingInstitusi = isLoadingInstitusi || isFetchingInstitusi

  //   --- Aplikasi ---
  const [dataAplikasi, setDataAplikasi] = useState<GetAplikasiType[]>()

  const {
    data: aplikasi,
    isLoading: isLoadingAplikasi,
    isFetching: isFetchingAplikasi,
  } = useGetAplikasiQuery()

  useEffect(() => {
    if (aplikasi) {
      setDataAplikasi(aplikasi?.data)
    }
  }, [aplikasi])

  const loadingAplikasi = isLoadingAplikasi || isFetchingAplikasi

  const [
    uploadFileMutation,
    {
      isSuccess: successFile,
      isError: isErrorFile,
      error: errorFile,
      isLoading: loadingFile,
    },
  ] = useUpdatePhotoMutation()

  const handleUploadFoto = async (file: File) => {
    const formatData = new FormData()
    formatData.append('file', file)

    try {
      await uploadFileMutation(formatData)
    } catch (e) {
      console.error(e)
      toast.error(`Data gagal disimpan`, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      })
    }
  }

  useEffect(() => {
    if (successFile) {
      toast.success('Berhasil unggah photo!', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      })
      setIsShowPhoto(false)
      formPhoto.reset()
    }
  }, [successFile])

  useEffect(() => {
    if (isErrorFile) {
      const errorMsg = errorFile as { data?: { message?: string } }

      toast.error(`${errorMsg?.data?.message ?? 'Terjadi Kesalahan'}`, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      })
      setIsShowPhoto(false)
    }
  }, [isErrorFile, errorFile])

  useEffect(() => {
    if (dataProfil) {
      formPhoto.setValue('photo', dataProfil?.header_profil?.photo)
    }
  }, [dataProfil])

  return {
    dataIdentitas,
    loadingIdentitas,
    dataProfil,
    loadingProfil,
    dataInstitusi,
    loadingInstitusi,
    dataAplikasi,
    loadingAplikasi,
    isShowPhoto,
    setIsShowPhoto,
    formPhoto,
    handleUploadFoto,
    loadingFile,
  }
}
