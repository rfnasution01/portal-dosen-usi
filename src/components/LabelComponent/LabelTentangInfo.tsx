export function LabelTentangInfo({
  label1,
  label2,
  value1,
  value2,
}: {
  label1?: string
  value1?: string
  label2?: string
  value2?: string
}) {
  return (
    <div className="flex gap-32 phones:flex-col phones:gap-8">
      <div className="flex w-1/2 gap-32 phones:w-full phones:gap-8">
        <div className="flex w-full flex-col gap-0 font-sans phones:flex-col phones:gap-0">
          <p
            className="text-[1.8rem] text-[#6C6C6C] phones:w-full"
            style={{ lineHeight: '130%' }}
          >
            {label1}
          </p>

          <p
            className="text-[2.2rem] text-neutral-black phones:w-full"
            style={{ lineHeight: '130%' }}
          >
            {value1}
          </p>
        </div>
      </div>
      <div className="flex w-1/2 gap-32 phones:w-full">
        <div className="flex w-full flex-col gap-0 phones:flex-col">
          <p
            className="text-[1.8rem] text-[#6C6C6C] phones:w-full"
            style={{ lineHeight: '130%' }}
          >
            {label2}
          </p>
          <p
            className="text-[2.2rem] text-neutral-black phones:w-full"
            style={{ lineHeight: '130%' }}
          >
            {value2}
          </p>
        </div>
      </div>
    </div>
  )
}
