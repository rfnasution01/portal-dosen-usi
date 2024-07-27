export type GetDosenType = {
  id: string
  nama: string
  email: string
  hp: string
  status: string
}

export type GetDosenDetailType = {
  biodata: GetDosenBiodataType
  pendidikan: GetDosenPendidikanType[]
}

export type GetDosenBiodataType = {
  nama: string
  prodi: string
  fakultas: string
  jabatan_fungsiona: string
  photo: string
}

export type GetDosenPendidikanType = {
  jenjang: string
  institusi: string
  tahun_lulus: string
}
