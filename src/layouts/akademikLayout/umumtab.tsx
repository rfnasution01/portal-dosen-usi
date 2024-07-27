import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'

export function UmumTabs({
  menuList,
  menu,
  setMenu,
}: {
  menuList: string[]
  menu: string
  setMenu: Dispatch<SetStateAction<string>>
}) {
  return (
    <div className="scrollbar flex w-full gap-16 overflow-y-auto">
      {menuList?.map((item, idx) => (
        <div
          onClick={() => {
            setMenu(item)
          }}
          className={clsx(
            'text-nowrap rounded-2xl border border-primary-100 px-24 py-12 hover:cursor-pointer hover:bg-primary-100 hover:text-white',
            {
              'bg-primary-100 text-white': menu === item,
              'text-primary-100': menu !== item,
            },
          )}
          key={idx}
        >
          {item}
        </div>
      ))}
    </div>
  )
}
