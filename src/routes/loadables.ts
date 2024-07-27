import loadable from '@loadable/component'

// ------------------
// ----- Layouts -----
// ------------------
export const CommonLayout = loadable(() => import('@/layouts/CommonLayout'))
export const RootLayout = loadable(() => import('@/layouts/rootLayout'))
export const LoginLayout = loadable(() => import('@/layouts/loginLayout'))
export const MainLayout = loadable(() => import('@/layouts/mainLayout'))
export const NilaiMahasiswaLayout = loadable(
  () => import('@/layouts/siakadLayout/NilaiMahasiswaLayout'),
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
