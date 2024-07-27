import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDoorClosed, faUser } from '@fortawesome/free-solid-svg-icons'
import { ValidasiLogout } from '@/components/DialogComponent/ValidasiLogout'
import { useLogout } from '@/data/useLogout'

export function MainHeaderButtonGroup() {
  const { isShowLogout, setIsShowLogout, handleLogout } = useLogout()

  return (
    <div className="flex flex-col gap-12 phones:w-full phones:flex-row">
      <Link
        to="profil"
        className="flex items-center gap-12 rounded-2xl bg-white px-24 py-16 font-semibold text-primary-100 hover:bg-opacity-80 phones:w-full"
      >
        <FontAwesomeIcon icon={faUser} />
        Halaman Profil
      </Link>
      <button
        type="button"
        onClick={() => {
          setIsShowLogout(true)
        }}
        className="flex items-center gap-12 rounded-2xl bg-danger px-24 py-16 font-semibold text-white hover:bg-opacity-80 phones:w-full"
      >
        <FontAwesomeIcon icon={faDoorClosed} />
        Keluar
      </button>
      <ValidasiLogout
        isOpen={isShowLogout}
        setIsOpen={setIsShowLogout}
        child={
          <button
            onClick={handleLogout}
            className="flex items-center gap-12 rounded-2xl bg-success px-24 py-12 text-white"
          >
            <p>Keluar</p>
          </button>
        }
      />
    </div>
  )
}