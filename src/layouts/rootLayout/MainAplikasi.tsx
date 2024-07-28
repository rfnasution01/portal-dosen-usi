import { Dispatch, SetStateAction } from 'react'
import { Link } from 'react-router-dom'
import { Skeleton } from '@/components/Skeleton'
import clsx from 'clsx'
import { convertToSlug } from '@/utils/formatText'
import { GetAplikasiType } from '@/store/type/identitasType'

export function MainAplikasi({
  setFitur,
  aplikasi,
  loadingAplikasi,
}: {
  setFitur: Dispatch<SetStateAction<string>>
  aplikasi: GetAplikasiType[]
  loadingAplikasi: boolean
}) {
  return (
    <div className="flex flex-col gap-32">
      <p className="font-roboto text-[3.2rem] text-primary-100">Menu Fitur</p>
      {loadingAplikasi ? (
        <div className="flex gap-32">
          <Skeleton width="w-1/4" height="h-[20rem]" classname="rounded-2xl" />
          <Skeleton width="w-1/4" height="h-[20rem]" classname="rounded-2xl" />
          <Skeleton width="w-1/4" height="h-[20rem]" classname="rounded-2xl" />
          <Skeleton width="w-1/4" height="h-[20rem]" classname="rounded-2xl" />
        </div>
      ) : (
        <div className="grid grid-cols-12 gap-32">
          {aplikasi?.map((item, idx) => (
            <Link
              to={`/${convertToSlug(item?.route)}`}
              key={idx}
              className={clsx(
                'col-span-4 flex items-center justify-center rounded-2x border border-primary-50 bg-white p-24 text-center hover:cursor-pointer hover:border-primary-100 hover:bg-primary-50 phones:col-span-6',
              )}
              onMouseEnter={() => setFitur(item?.nama_aplikasi)}
            >
              <div className="flex flex-col items-center justify-center gap-16">
                <img
                  src={
                    item?.gambar ??
                    'https://administrator.universitassimalungun.ac.id/assets/img/aplikasi/logo-usi_(1).png'
                  }
                  alt={item?.nama_aplikasi}
                  loading="lazy"
                  className="h-[8rem] w-[8rem]"
                />
                <p className="text-primary font-sf-pro">
                  {item?.nama_aplikasi}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
