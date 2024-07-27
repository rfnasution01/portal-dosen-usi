export function LabelListColumn({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="flex flex-col gap-12 font-sans">
      <p className="text-[2rem] text-[#6C6C6C]">{label}</p>
      <p className="text-[3.2rem] font-semibold">{value}</p>
    </div>
  )
}
