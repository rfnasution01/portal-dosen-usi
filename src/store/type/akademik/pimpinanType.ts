export type GetPimpinanType = {
  id: string
  nama: string
  satker: string
  jabatan: string
}

export type GetPimpinanDetailType = {
  biodata: GetPimpinanBiodataType
  pendidikan: []
}

export type GetPimpinanBiodataType = {
  nama: string
  satker: string
  jabatan_fungsional: string
  photo: string
}
