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
  jadwal: JadwalType[]
}

export type JadwalType = {
  id: string
  mulai: string
  akhir: string
  kelas: string
  ruangan: string
}

export type GetJadwalDetailType = {
  kode_makul: string
  nama_makul: string
  prodi: string
  fakultas: string
  nama_kelas: string
  jlh_mhs: string
  jadwal_kuliah: JadwalKuliahType[]
  dosen: string[]
  id: string
  tahun_akademik: string
}

export type JadwalKuliahType = {
  hari: string
  jam_mulai: string
  jam_akhir: string
  ruangan: string
}

export type GetJadwalMahasiswaType = {
  id: string
  id_mahasiswa: string
  nim: string
  nama: string
  angkatan: string
  jenis_kelamin: string
  foto: string
}

export type GetBobotNilaiType = {
  nilai: string
  nilai_min: string
  nilai_max: string
}

export type GetKomposisiNilai = {
  id: string
  jenis_nilai: string
  keterangan: string
  persen: string
  persentase: string
}

export type GetNilaiType = {
  id_mahasiswa: string
  nim: string
  id_krs: string
  nama: string
  nilai_akhir: string
  huruf: string
  sks: string
  mutu: string
  nilai_aspek: GetAspekNilaiType[]
}

export type GetAspekNilaiType = {
  id: string
  jenis_nilai: string
  persentase: string
  nilai: string
}

export type GetJadwalNilaiType = {
  data: GetNilaiType[]
  aspek_nilai: GetAspekNilaiType[]
}

export type PostJadwalKuliahType = {
  id_krs: string
  id_aspek: string
  nilai: string
}
