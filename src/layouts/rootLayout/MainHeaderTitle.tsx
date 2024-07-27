import { GetInstitusiType } from '@/store/type/identitasType'

export function MainHeaderTitle({
  institusi,
}: {
  institusi: GetInstitusiType
}) {
  return (
    <div className="flex flex-1 flex-col gap-8">
      <p className="font-sans text-[2.4rem]">Sistem Informasi Akademik</p>
      {institusi?.nama_institusi && (
        <p className="font-roboto text-[2.8rem] uppercase">
          {institusi?.nama_institusi}
        </p>
      )}
      {institusi?.kabupaten && (
        <p className="font-sans text-[2.4rem] uppercase">
          {institusi?.kabupaten}
        </p>
      )}
    </div>
  )
}
