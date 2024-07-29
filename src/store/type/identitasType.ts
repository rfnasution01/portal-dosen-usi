type HeaderProfil = {
  photo: string
  nip: string | null
  nama: string
  gelar_depan: string
  gelar_belakang: string
  jenis_kelamin: string
  agama: string
  tempat_lahir: string
  tanggal_lahir: string
  status_nikah: string
  id_jenis_kelamin: string
  id_agama: string
  id_status_nikah: string
}

type Kepegawaian = {
  unit_kerja: string
  status_aktif: string
  hubungan_kerja: string
  email_perguruan_tinggi: string
  no_akun_finger: string
  jabatan_atasan: string
  jabatan_akademik: string
  id_unit_kerja: string
  id_jabatan_akademik: string
}

type Dosen = {
  homebase: string
  nidn: string
  nidk: string | null
  nupn: string | null
  rumpun_ilmu: string
  id_sinta: string | null
  url_sinta: string | null
  id_scopus: string | null
  url_scopus: string | null
  id_orcid: string | null
  url_orcid: string | null
  id_publikasi: string | null
  url_publikasi: string | null
  id_garuda: string | null
  url_garuda: string | null
  id_google_scholar: string | null
  url_google_scholar: string | null
  id_wos_researcher: string | null
  url_wos_researcher: string | null
  serdos_status: string
  serdos_tanggal: string | null
  serdos_nomor: string | null
  serdos_sertifikat: string | null
  id_rumpun_ilmu: string | null
}

type Domisili = {
  provinsi: string
  kabupaten: string
  kecamatan: string
  alamat_lengkap: string
  kode_pos: string
  jarak_rumah_kantor: string
  nomor_telepon: string
  nomor_telepon_kantor: string
  id_provinsi: string
  id_kabupaten: string
  id_kecamatan: string
}

type Kependudukan = {
  nomor_ktp: string
  nomor_kk: string | null
  negara: string
  provinsi: string
  kabupaten: string
  kecamatan: string
  alamat: string | null
  kode_pos: string | null
  suku: string
  file_ktp: string | null
  file_kk: string | null
  id_suku: string | null
  id_negara: string | null
  id_provinsi: string
  id_kabupaten: string
  id_kecamatan: string | null
}

type Rekening = {
  nama_bank: string
  nomor_rekening: string
  nama_rekening: string
  cabang_bank: string
  file_rekening: string | null
  id_jenis_bank: string
}

type Dokumen = {
  nomor_karpeg: string | null
  file_karpeg: string | null
  npwp: string | null
  file_npwp: string | null
  nomor_bpjs: string | null
  file_bpjs: string | null
  nomor_bpjs_ketenagakerjaan: string | null
  file_bpjs_ketenagakerjaan: string | null
  nomor_bpjs_pensiun: string | null
  file_bpjs_pensiun: string | null
}

type DataLain = {
  golongan_darah: string
  tinggi_badan: string
  berat_badan: string
  Hobby: string
  file_tanda_tangan: string
  id_hobby: string
  id_golongan_darah: string
}

export type GetProfilType = {
  header_profil: HeaderProfil
  kepegawaian: Kepegawaian
  dosen: Dosen
  domisili: Domisili
  kependudukan: Kependudukan
  rekening: Rekening
  dokumen: Dokumen
  datalain: DataLain
}

export type GetInstitusiType = {
  nama_institusi: string
  status_pengelolaan: string
  alamat: string
  kelurahan: string
  kecamatan: string
  kabupaten: string
  provinsi: string
  telepon: string
  email: string
  visi: string
  misi: string
  tujuan: string
  deskripsi_singkat: string
}

export type GetIdentitasType = {
  nama_aplikasi: string
  instansi: string
  logo: string
  favicon: string
  yt: string
  fb: string
  ig: string
  wa: string
  tw: string
  email: string
  website: string
  alamat: string
  footer: string
  deskripsi: string
  keyword: string
}

export type GetAplikasiType = {
  id_aplikasi: string
  route: string
  nama_aplikasi: string
  gambar: string
  logo: string
}
