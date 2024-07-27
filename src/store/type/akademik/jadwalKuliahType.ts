export type GetJadwalSemesterType = {
  id: string
  kode_makul: string
  nama_makul: string
  sks: string
  hari: string
  mulai: string
  akhir: string
  kelas: string
  ruangan: string
  dosen_pengajar: string[]
  prodi: string
  fakultas: string
  id_kelas_makul: string
  tahun_ajaran: string
}

export type GetJadwalMingguType = {
  tanggal: {
    hari: string
    tanggal: string
  }
  jadwal: []
}
