import { Dispatch, SetStateAction } from 'react'
import { Skeleton } from '@/components/Skeleton'
import clsx from 'clsx'
import { GetAplikasiType } from '@/store/type/identitasType'

export function MainAplikasi({
  setFitur,
  setRoute,
  aplikasi,
  loadingAplikasi,
  fitur,
}: {
  setFitur: Dispatch<SetStateAction<string>>
  setRoute: Dispatch<SetStateAction<string>>
  fitur: string
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
            <div
              key={idx}
              className={clsx(
                'col-span-4 rounded-2xl hover:overflow-hidden phones:col-span-6',
                {
                  'bg-[#D1E8FF]': item?.nama_aplikasi === fitur,
                  'bg-white': item?.nama_aplikasi !== fitur,
                },
              )}
              onClick={() => {
                setFitur(item?.nama_aplikasi)
                setRoute(item?.route)
              }}
            >
              <div className="flex transform-gpu items-center justify-center rounded-2x py-64 text-center shadow-md hover:scale-110 hover:cursor-pointer hover:overflow-hidden hover:bg-[#D1E8FF] hover:duration-500">
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
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
