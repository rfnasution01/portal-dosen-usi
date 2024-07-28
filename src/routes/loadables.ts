import loadable from '@loadable/component'

// ------------------
// ----- Layouts -----
// ------------------
export const CommonLayout = loadable(() => import('@/layouts/CommonLayout'))
export const RootLayout = loadable(() => import('@/layouts/rootLayout'))
export const LoginLayout = loadable(() => import('@/layouts/loginLayout'))
export const MainLayout = loadable(() => import('@/layouts/mainLayout'))
export const AkademikJadwalKuliahLayout = loadable(
  () => import('@/layouts/akademikLayout/jadwalKuliahLayout'),
)
export const AkademikUmumLayout = loadable(
  () => import('@/layouts/akademikLayout/umumLayout'),
)

// ------------------
// ----- Pages -----
// ------------------
export const ComingSoonPage = loadable(() => import('@/pages/ComingSoon'))
export const AkademikDashboardPage = loadable(
  () => import('@/pages/akademik/dashboard'),
)
export const EditTahunAkademikPage = loadable(
  () => import('@/pages/EditTahunAkademik'),
)

export const JadwalKuliahPage = loadable(
  () => import('@/pages/akademik/jadwalKuliah/JadwalKuliah'),
)
export const JadwalKuliahDetailPage = loadable(
  () => import('@/pages/akademik/jadwalKuliah/JadwalKuliahDetail'),
)
export const NilaiMahasiswaPage = loadable(
  () => import('@/pages/akademik/jadwalKuliah/NilaiMahasiswa'),
)
export const NilaiMahasiswaPerAspekPage = loadable(
  () => import('@/pages/akademik/jadwalKuliah/NilaiMahasiswaPerAspek'),
)

export const UmumTentangInstitusiPage = loadable(
  () => import('@/pages/akademik/umum/UmumTentangInstitusi'),
)

export const UmumTentangFakultasPage = loadable(
  () => import('@/pages/akademik/umum/UmumTentangFakultas'),
)

export const UmumTentangDetailFakultasPage = loadable(
  () => import('@/pages/akademik/umum/DetailUmumTentangFakultas'),
)

export const UmumTentangProdiPage = loadable(
  () => import('@/pages/akademik/umum/UmumTentangProdi'),
)

export const UmumTentangDetailProdiPage = loadable(
  () => import('@/pages/akademik/umum/DetailUmumTentangProdi'),
)

export const UmumDosenPage = loadable(
  () => import('@/pages/akademik/umum/UmumDosen'),
)

export const UmumDetailDosenPage = loadable(
  () => import('@/pages/akademik/umum/DetailUmumDosen'),
)

export const UmumPengumumanPage = loadable(
  () => import('@/pages/akademik/umum/UmumPengumuman'),
)

export const UmumDetailPengumumanPage = loadable(
  () => import('@/pages/akademik/umum/DetailUmumPengumuman'),
)
