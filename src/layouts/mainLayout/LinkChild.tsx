import { ListMenuType } from '@/data/listMenu'
import { convertToSlug } from '@/utils/formatText'
import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'
import { useNavigate } from 'react-router-dom'

export function LinkChild({
  item,
  setIsOpen,
  isActivePage,
  setIsShowInfo,
  adaDataPengajuanKrs,
  tindakLanjutiPengajuan,
}: {
  item: ListMenuType
  setIsOpen: Dispatch<SetStateAction<boolean>>
  setIsShowInfo: Dispatch<SetStateAction<boolean>>
  isActivePage: (item: string) => boolean
  adaDataPengajuanKrs: boolean
  tindakLanjutiPengajuan: boolean
}) {
  const navigate = useNavigate()
  return (
    <>
      {item?.children?.map((list, idx) => (
        <div
          onClick={() => {
            setIsOpen(false)
            if (adaDataPengajuanKrs && !tindakLanjutiPengajuan) {
              setIsShowInfo(true)
            } else {
              navigate(
                `/akademik/${convertToSlug(item?.nama)}/${convertToSlug(list)}`,
              )
            }
          }}
          className={clsx(
            'flex items-center justify-between gap-12 rounded-lg hover:cursor-pointer hover:text-white',
            {
              'text-white': isActivePage(list),
              'text-primary-inactive': !isActivePage(list),
            },
          )}
          key={idx}
        >
          <div className="flex items-center gap-12 px-32 py-8 text-[2.2rem]">
            <p>{list}</p>
          </div>
        </div>
      ))}
    </>
  )
}
