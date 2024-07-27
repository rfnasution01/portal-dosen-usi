export function AkademikTentangProdiInfo({
  jenjang,
  prodi,
}: {
  prodi?: string
  jenjang?: string
}) {
  return (
    <div className="flex flex-col gap-24 rounded-2x bg-primary-100 p-32 font-sans text-[2rem] text-neutral-white">
      <div className="flex flex-col gap-12">
        <p className="font-roboto text-[3.2rem]">Nama Program Studi</p>
        <p>{prodi}</p>
      </div>
      <div className="flex flex-col gap-12">
        <p className="font-roboto text-[3.2rem]">Jenjang</p>
        <p>{jenjang}</p>
      </div>
    </div>
  )
}
