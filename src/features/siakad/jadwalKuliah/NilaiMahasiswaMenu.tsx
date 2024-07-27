import { MenubarPrint } from '@/components/Menubar/MenubarPrint'

export function AspekNilaiMahasiswaMenu() {
  return (
    <div className="scrollbar flex w-full items-center justify-between gap-12 overflow-x-auto">
      {/* <div className="flex gap-12">
        {aspekNilai?.map((item, idx) => (
          <Link
            to={convertToSlug(item?.nama)}
            key={idx}
            onClick={() => localStorage.setItem('editID', item?.id)}
          >
            <button
              className={clsx('rounded-3xl border px-24 py-16 ', {
                'border-transparent bg-primary-900 text-neutral-white':
                  thirdPathname !== convertToSlug(item?.nama),
                'border-primary-900 text-primary-900':
                  thirdPathname === convertToSlug(item?.nama),
              })}
            >
              <p className="text-nowrap">
                {item?.nama} ({item?.persen}%)
              </p>
            </button>
          </Link>
        ))}
        <Link to={'/akademik/sjadwal-perkuliahan/mahasiswa'}>
          <button
            className={clsx('rounded-3xl border px-24 py-16 ', {
              'border-transparent bg-primary-900 text-neutral-white':
                thirdPathname !== undefined,
              'border-primary-900 text-primary-900':
                thirdPathname === undefined,
            })}
          >
            <p className="text-nowrap">Rekap Nilai</p>
          </button>
        </Link>
      </div> */}
      <div className="flex items-center gap-12">
        <MenubarPrint />
      </div>
    </div>
  )
}
