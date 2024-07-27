import { createBrowserRouter, redirect } from 'react-router-dom'
import {
  AkademikDashboardPage,
  AkademikJadwalKuliahLayout,
  AkademikUmumLayout,
  ComingSoonPage,
  CommonLayout,
  EditTahunAkademikPage,
  JadwalKuliahDetailPage,
  JadwalKuliahPage,
  LoginLayout,
  MainLayout,
  NilaiMahasiswaPage,
  NilaiMahasiswaPerAspekPage,
  RootLayout,
  UmumTentangPage,
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
            path: 'umum',
            element: <CommonLayout />,
            children: [
              {
                path: '',
                element: <ComingSoonPage />,
              },
              {
                path: 'profil',
                element: <AkademikUmumLayout />,
              },
              {
                path: 'tentang-institusi',
                element: <UmumTentangPage />,
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
