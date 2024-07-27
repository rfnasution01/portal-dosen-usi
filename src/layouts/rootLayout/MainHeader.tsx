import { MainHeaderTitle } from './MainHeaderTitle'
import { MainHeaderLogo } from './MainHeaderLogo'
import { MainHeaderButtonGroup } from './MainHeaderButtonGroup'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { GetIdentitasType, GetInstitusiType } from '@/store/type/identitasType'
import { Skeleton } from '@/components/Skeleton'

export function MainHeader({
  identitas,
  loadingIdentitas,
  institusi,
  loadingInstitusi,
}: {
  identitas: GetIdentitasType
  loadingIdentitas: boolean
  institusi: GetInstitusiType
  loadingInstitusi: boolean
}) {
  return (
    <HelmetProvider>
      <div className="flex items-center gap-32 phones:flex-col">
        {loadingIdentitas || loadingInstitusi ? (
          <div className="flex gap-32">
            <Skeleton height="h-[10rem]" width="w-[10rem]" />
            <div className="flex flex-col gap-8">
              <Skeleton height="h-[2.4rem]" width="w-[30rem]" />
              <Skeleton height="h-[3.2rem]" width="w-[50rem]" />
              <Skeleton height="h-[3.2rem]" width="w-[50rem]" />
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-1 items-center gap-32">
              {/* --- Logo --- */}
              <MainHeaderLogo identitas={identitas} />
              {/* --- Title --- */}
              <MainHeaderTitle institusi={institusi} />
            </div>
            {/* --- Logout --- */}
            <MainHeaderButtonGroup />
          </>
        )}
        <Helmet>
          <meta charSet="utf-8" />
          <title>{identitas?.nama_aplikasi}</title>
          <link rel="canonical" href={identitas?.website} />
        </Helmet>
      </div>
    </HelmetProvider>
  )
}
