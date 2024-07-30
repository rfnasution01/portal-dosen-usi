import { createBrowserRouter, redirect } from 'react-router-dom'
import {
  AkademikDashboardPage,
  AkademikJadwalKuliahLayout,
  AkademikUmumDetailPegawai,
  ComingSoonPage,
  CommonLayout,
  EditTahunAkademikPage,
  GantiPasswordPage,
  JadwalKuliahDetailPage,
  JadwalKuliahPage,
  JadwalMingguIniPage,
  KalendarAkademikPage,
  LoginLayout,
  MainLayout,
  NilaiMahasiswaPage,
  NilaiMahasiswaPerAspekPage,
  PembimbingAkademikPage,
  PengajuanKRSDetailPage,
  PengajuanKRSPage,
  ProfilPage,
  RootLayout,
  UmumDetailDosenPage,
  UmumDetailPengumumanPage,
  UmumDetailPimpinanPage,
  UmumDokumenPage,
  UmumDosenPage,
  UmumPengumumanPage,
  UmumPimpinanPage,
  UmumTentangDetailFakultasPage,
  UmumTentangDetailProdiPage,
  UmumTentangFakultasPage,
  UmumTentangInstitusiPage,
  UmumTentangProdiPage,
} from './loadables'
import Cookies from 'js-cookie'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <CommonLayout />,
    loader: async () => {
      const jwtPayload = Cookies.get('token')

      if (!jwtPayload) {
        return redirect('/login')
      }

      return null
    },
    children: [
      {
        path: '',
        element: <RootLayout />,
      },
      {
        path: 'akademik',
        element: <MainLayout />,
        children: [
          {
            path: '',
            element: <CommonLayout />,
            children: [
              {
                path: '',
                element: <CommonLayout />,
                children: [
                  {
                    path: '',
                    element: <AkademikDashboardPage />,
                  },
                ],
              },
            ],
          },
          {
            path: 'jadwal-perkuliahan',
            element: <CommonLayout />,
            children: [
              {
                path: '',
                element: <JadwalKuliahPage />,
              },
              {
                path: 'detail',
                element: <JadwalKuliahDetailPage />,
              },
              {
                path: 'mahasiswa',
                element: <AkademikJadwalKuliahLayout />,
                children: [
                  {
                    path: '',
                    element: <NilaiMahasiswaPage />,
                  },
                  {
                    path: ':aspek',
                    element: <NilaiMahasiswaPerAspekPage />,
                  },
                ],
              },
            ],
          },
          {
            path: 'bimbingan',
            element: <CommonLayout />,
            children: [
              {
                path: '',
                element: <ComingSoonPage />,
              },
              {
                path: 'konsultasi',
                element: <ComingSoonPage />,
              },
              {
                path: 'pembimbing-akademik',
                element: <PembimbingAkademikPage />,
              },
              {
                path: 'proposal-tugas-akhir',
                element: <ComingSoonPage />,
              },
              {
                path: 'daftar-tugas-akhir',
                element: <ComingSoonPage />,
              },
              {
                path: 'kegiatan-pendukung',
                element: <ComingSoonPage />,
              },
              {
                path: 'krs',
                element: <CommonLayout />,
                children: [
                  {
                    path: '',
                    element: <PengajuanKRSPage />,
                  },
                  {
                    path: 'detail',
                    element: <PengajuanKRSDetailPage />,
                  },
                ],
              },
            ],
          },
          {
            path: 'umum',
            element: <CommonLayout />,
            children: [
              {
                path: '',
                element: <ComingSoonPage />,
              },
              {
                path: 'profil',
                element: <AkademikUmumDetailPegawai />,
              },
              {
                path: 'tentang-institusi',
                element: <UmumTentangInstitusiPage />,
              },
              {
                path: 'tentang-fakultas',
                element: <CommonLayout />,
                children: [
                  {
                    path: '',
                    element: <UmumTentangFakultasPage />,
                  },
                  {
                    path: 'detail',
                    element: <UmumTentangDetailFakultasPage />,
                  },
                ],
              },
              {
                path: 'tentang-prodi',
                element: <CommonLayout />,
                children: [
                  {
                    path: '',
                    element: <UmumTentangProdiPage />,
                  },
                  {
                    path: 'detail',
                    element: <UmumTentangDetailProdiPage />,
                  },
                ],
              },
              {
                path: 'dosen-prodi',
                element: <CommonLayout />,
                children: [
                  {
                    path: '',
                    element: <UmumDosenPage />,
                  },
                  {
                    path: 'detail',
                    element: <UmumDetailDosenPage />,
                  },
                ],
              },
              {
                path: 'pengumuman',
                element: <CommonLayout />,
                children: [
                  {
                    path: '',
                    element: <UmumPengumumanPage />,
                  },
                  {
                    path: ':pengumuman',
                    element: <UmumDetailPengumumanPage />,
                  },
                ],
              },
              {
                path: 'data-pimpinan',
                element: <CommonLayout />,
                children: [
                  {
                    path: '',
                    element: <UmumPimpinanPage />,
                  },
                  {
                    path: 'detail',
                    element: <UmumDetailPimpinanPage />,
                  },
                ],
              },
              {
                path: 'dokumen-akademik',
                element: <UmumDokumenPage />,
              },
            ],
          },
          {
            path: 'kalender',
            element: <CommonLayout />,
            children: [
              {
                path: '',
                element: <ComingSoonPage />,
              },
              {
                path: 'kalender-akademik',
                element: <KalendarAkademikPage />,
              },
              {
                path: 'jadwal-minggu-ini',
                element: <JadwalMingguIniPage />,
              },
            ],
          },
          {
            path: 'edit-ta',
            element: <EditTahunAkademikPage />,
          },
          {
            path: 'Kalender',
            element: <ComingSoonPage />,
          },
        ],
      },
      {
        path: 'ubah-password',
        element: <GantiPasswordPage />,
      },
      {
        path: 'profil',
        element: <ProfilPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginLayout />,
    loader: async () => {
      const jwtPayload = Cookies.get('token')

      if (jwtPayload) {
        return redirect('/')
      }

      return null
    },
  },

  {
    path: '*',
    element: <ComingSoonPage />,
  },
])
