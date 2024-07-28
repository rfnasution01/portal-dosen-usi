import { MenubarPrint } from '@/components/Menubar/MenubarPrint'
import { GetAspekNilaiType } from '@/store/type/akademik/jadwalKuliahType'
import { convertToSlug } from '@/utils/formatText'
import { usePathname } from '@/utils/usePathname'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

export function AkademikNilaiMahasiswaMenu({
  aspekNilai,
}: {
  aspekNilai: GetAspekNilaiType[]
}) {
  const { fourthPathname } = usePathname()

  return (
    <div className="scrollbar flex w-full items-center justify-between gap-12 overflow-x-auto">
      <div className="flex gap-12">
        {aspekNilai?.map((item, idx) => (
          <Link
            to={convertToSlug(item?.jenis_nilai)}
            key={idx}
            onClick={() => localStorage.setItem('editID', item?.id)}
          >
            <button
              className={clsx('rounded-3xl border px-24 py-16 ', {
                'border-transparent bg-primary-900 text-neutral-white':
                  fourthPathname !== convertToSlug(item?.jenis_nilai),
                'border-primary-900 text-primary-900':
                  fourthPathname === convertToSlug(item?.jenis_nilai),
              })}
            >
              <p className="text-nowrap">
                {item?.jenis_nilai} ({item?.persentase}%)
              </p>
            </button>
          </Link>
        ))}
        <Link to={'/akademik/jadwal-perkuliahan/mahasiswa'}>
          <button
            className={clsx('rounded-3xl border px-24 py-16 ', {
              'border-transparent bg-primary-900 text-neutral-white':
                fourthPathname !== undefined,
              'border-primary-900 text-primary-900':
                fourthPathname === undefined,
            })}
          >
            <p className="text-nowrap">Rekap Nilai</p>
          </button>
        </Link>
      </div>
      <div className="flex items-center gap-12">
        <MenubarPrint />
      </div>
    </div>
  )
}
