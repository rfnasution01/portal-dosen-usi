import { IconDashboard } from '@/assets/icon'
import SkeletonText from '@/components/SkeletonComonent/SkeletonText'
import {
  faAlignJustify,
  faClose,
  faHome,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'
import { Link } from 'react-router-dom'
import { MainMenu } from './mainMenu'
import { useProfil } from '@/data/useProfil'
import { useAkademikTahunAktif } from '@/data/akademik/useTahunAktif'
import { ValidasiLogout } from '@/components/DialogComponent/ValidasiLogout'
import { useLogout } from '@/data/useLogout'

export function MainHeader({
  setIsOpen,
  isOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>
  isOpen: boolean
}) {
  const { loadingProfil, dataProfil } = useProfil()
  const { dataTahunAktif, loadingTahunAktif } = useAkademikTahunAktif()
  const { isShowLogout, setIsShowLogout, handleLogout } = useLogout()

  return (
    <div
      className={clsx('scrollbar flex flex-col gap-32 overflow-y-auto ', {
        'phones:h-auto': !isOpen,
        'h-full bg-primary-900': isOpen,
      })}
    >
      <div className="flex items-center justify-between gap-32 bg-primary-900 px-64 py-12 text-neutral-white phones:px-32">
        <div className="flex items-center gap-12">
          <img
            src="https://administrator.universitassimalungun.ac.id/assets/img/aplikasi/logo-usi_(1).png"
            className="w-[6rem]"
            loading="lazy"
            alt="Logo"
          />
          <p className="font-sans text-[2.4rem] font-bold phones:hidden">
            Portal Akademik Dosen
          </p>
        </div>
        {loadingProfil || loadingTahunAktif ? (
          <SkeletonText lines={1} className="w-1/3" />
        ) : (
          dataProfil && (
            <div className="flex items-center gap-12 phones:gap-32">
              <p className="phones:hidden">
                {' '}
                {dataProfil?.header_profil?.nama}
              </p>
              <p className="phones:hidden">|</p>
              <p className="phones:hidden">
                {dataTahunAktif?.tahun_akademik} / {dataTahunAktif?.tahapan}
              </p>
              <p className="phones:hidden">|</p>
              <p className="phones:hidden">{dataTahunAktif?.prodi}</p>
              <div className="ml-16 flex items-center gap-32">
                <Link to="/profil">
                  <img
                    src={dataProfil?.header_profil?.photo}
                    alt={dataProfil?.header_profil?.nama}
                    loading="lazy"
                    className="h-[4rem] w-[4rem] rounded-full object-cover"
                  />
                </Link>
                <Link to={'edit-ta'}>
                  <span className="hover:cursor-pointer hover:text-white">
                    <IconDashboard size={12} />
                  </span>
                </Link>
                <Link to={'/'}>
                  <span className="hover:cursor-pointer hover:text-white">
                    <FontAwesomeIcon icon={faHome} />
                  </span>
                </Link>

                <p>
                  <span
                    className="text-danger hover:cursor-pointer hover:text-red-300"
                    onClick={() => {
                      setIsShowLogout(true)
                    }}
                  >
                    Logout
                  </span>
                </p>
              </div>
              <span
                onClick={() => setIsOpen(!isOpen)}
                className="hidden phones:block"
              >
                {isOpen ? (
                  <FontAwesomeIcon icon={faClose} size="sm" />
                ) : (
                  <FontAwesomeIcon icon={faAlignJustify} size="sm" />
                )}
              </span>
            </div>
          )
        )}
      </div>
      <div
        className={clsx('scrollbar hidden h-full overflow-y-auto px-32', {
          'phones:block': isOpen,
        })}
      >
        <MainMenu setIsOpen={setIsOpen} />
      </div>
      <ValidasiLogout
        isOpen={isShowLogout}
        setIsOpen={setIsShowLogout}
        child={
          <button
            onClick={handleLogout}
            className="flex w-[10rem] items-center justify-center gap-12 rounded-2xl bg-success px-24 py-12 text-center text-white hover:bg-opacity-80"
          >
            <p>Ya</p>
          </button>
        }
      />
    </div>
  )
}
