export type PostBimbinganAkademik = {
  id: string
  keterangan: string
}

export type PostPersetujuanKRS = {
  id: string
  status_krs: string
}

export type ResBimbinganAkademik = {
  nim: string
  nama: string
  jk: string
  prodi: string
  id_mahasiswa: string
  angkatan: string
  hp: string
  ips_lalu: number
  sks: string
}

export type ResBimbinganAkademikLayanan = {
  id: string
}

export type ResPengajuanKRS = {
  id: string
  angkatan: string
  nim: string
  nama: string
  jk: string
  hp: string
  ips_lalu: string
  prodi: string
  semester: string
  pengajuan_krs_tanggal: string
  id_tahun_akademik: string
  sks: string
  jlh_makul: string
  id_mahasiswa: string
}

export type ResPengajuanKRSDetail = {
  mahasiswa: GetMahasiswaDetail
  id_tahun_akademik: string
  mata_kuliah: GetMataKuliahDetail[]
}

export type GetMahasiswaDetail = {
  nim: string
  nama: string
  jk: string
  prodi: string
  semester: string
  pengajuan_krs_tanggal: string
  nomor_kartu_studi: string
  tahun_ajaran: string
  dosen_pa: string
  ips_lalu: number
  jlh_sks: number
}

export type GetMataKuliahDetail = {
  id: string
  kode_makul: string
  nama_makul: string
  makul_agama: boolean
  id_agama: string
  kelas: string
  jadwal_kuliah: []
  sks: string
  semester: string
  status_krs: string
  dosen_pengajar: []
}
