export type GetPengumumanType = {
  id: string
  judul: string
  isi: string
  tanggal: string
  jumlah_photo: number
  jumlah_dokumen: number
  photo: string[]
  dokumen: string[]
}

export type ParamsPengumumanType = {
  search: string
  page_number: number
  page_size: number
}
