import SkeletonCard from '@/components/SkeletonComonent/SkeletonCard'
import { formatBibliographyName, getInitials } from '@/utils/formatText'
import { Dispatch, SetStateAction } from 'react'
import clsx from 'clsx'
import { useProfil } from '@/data/useProfil'
import { MainMenu } from './mainMenu'
import { ValidasiUpdateForm } from '@/components/DialogComponent/ValidasiUpdateForm'
import { FormUpdatePhoto } from '@/components/FormComponent/akademik/FormUpdatePhoto'

interface EditButtonProps {
  onClick: () => void
}

export function MainAside({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}) {
  const {
    dataProfil,
    loadingProfil,
    isShowPhoto,
    setIsShowPhoto,
    formPhoto,
    handleUploadFoto,
    loadingFile,
  } = useProfil()

  return (
    <div
      className={clsx('flex w-full flex-col gap-32', {
        'phones:h-auto': !isOpen,
        'h-full': isOpen,
      })}
    >
      {/* --- Profil --- */}
      <div className="flex w-full flex-col items-center justify-center gap-16">
        {loadingProfil ? (
          <SkeletonCard />
        ) : (
          <>
            <div className="relative">
              {dataProfil?.header_profil?.photo ? (
                <>
                  <img
                    src={dataProfil?.header_profil?.photo}
                    className="h-[16rem] w-[14rem] rounded-2xl object-cover"
                    loading="lazy"
                    alt={dataProfil?.header_profil?.photo}
                  />
                  <EditButton
                    onClick={() => {
                      setIsShowPhoto(true)
                    }}
                  />
                </>
              ) : (
                <div className="relative flex h-[16rem] w-[14rem] items-center justify-center rounded-2xl bg-background-secondary text-black-200">
                  <p className="text-[3.2rem]">
                    {getInitials(dataProfil?.header_profil?.nama)}
                  </p>
                  <EditButton
                    onClick={() => {
                      setIsShowPhoto(true)
                    }}
                  />
                </div>
              )}
            </div>

            <div className="flex items-center gap-12">
              <p className="text-center font-sans text-[2.6rem]">
                {formatBibliographyName(dataProfil?.header_profil?.nama)}
              </p>
            </div>
            <p>{dataProfil?.dosen?.nidn}</p>
          </>
        )}
      </div>
      {/* --- Menu --- */}
      <MainMenu setIsOpen={setIsOpen} />

      <ValidasiUpdateForm
        isOpen={isShowPhoto}
        setIsOpen={setIsShowPhoto}
        title="Form Update Profil"
        child={
          <div className="flex gap-32">
            <FormUpdatePhoto
              formPhoto={formPhoto}
              handleUploadFoto={handleUploadFoto}
              loadingFile={loadingFile}
            />
          </div>
        }
      />
    </div>
  )
}

const EditButton: React.FC<EditButtonProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-8 top-8 rounded-2xl text-[2.8rem] hover:bg-opacity-80"
    aria-label="Edit"
  >
    🎦
  </button>
)
