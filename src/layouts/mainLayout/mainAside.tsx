import SkeletonCard from '@/components/SkeletonComonent/SkeletonCard'
import { formatBibliographyName, getInitials } from '@/utils/formatText'
import { Dispatch, SetStateAction } from 'react'
import clsx from 'clsx'
import { useProfil } from '@/data/useProfil'
import { MainMenu } from './mainMenu'

export function MainAside({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}) {
  const { dataProfil, loadingProfil } = useProfil()

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
                </>
              ) : (
                <div className="relative flex h-[16rem] w-[14rem] items-center justify-center rounded-2xl bg-background-secondary text-black-200">
                  <p className="text-[3.2rem]">
                    {getInitials(dataProfil?.header_profil?.nama)}
                  </p>
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
    </div>
  )
}
