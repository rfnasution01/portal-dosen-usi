import { GetIdentitasType } from '@/store/type/identitasType'

export function MainHeaderLogo({ identitas }: { identitas: GetIdentitasType }) {
  return (
    <img
      src={identitas?.logo}
      alt="Indo Sistem"
      className="h-[10rem] w-[10rem] rounded-2xl object-fill filter"
      loading="lazy"
    />
  )
}
