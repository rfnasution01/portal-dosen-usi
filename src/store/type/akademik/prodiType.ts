export type GetProdiType = {
  id_fakultas: string
  nama_fakultas: string
  kode_fakultas: string
  daftar_program_studi: GetDaftarProgramStudiType[]
}

export type GetDaftarProgramStudiType = {
  id: string
  kode_dikti: string
  kode_prodi: string
  nama_prodi: string
  singkatan: string
  jenjang: string
}

export type GetProdiDetailType = {
  jenjang: string
  nama_prodi: string
  visi: string
  misi: string
  tujuan: string
  sasaran: string
}
