import { Loading } from '@/components/Loading'
import { useAkademikKalender } from '@/data/akademik/useKalender'

export default function KalendarAkademik() {
  const { dataKalender, loadingKalender } = useAkademikKalender()

  return (
    <div className="scrollbar flex h-full w-full flex-col gap-32 overflow-y-auto">
      <div className="scrollbar flex h-full flex-col gap-32 overflow-y-auto">
        {loadingKalender ? (
          <Loading />
        ) : (
          <div className="flex flex-col gap-24 rounded-2x bg-primary-50 p-32 text-primary-900 shadow-md">
            <div className="flex items-center justify-between gap-32">
              <p className="font-roboto text-[3.2rem]">
                Kalender Akademik 2024/2025
              </p>
            </div>
            <div className="flex w-full items-center gap-32 border-b pb-8">
              <p className="w-1/2 font-sans text-[2.4rem] font-semibold">
                Uraian Kegiatan
              </p>
              <p className="w-1/2 font-sans text-[2.4rem] font-semibold">
                Jadwal
              </p>
            </div>
            <div className="flex flex-col gap-12">
              {dataKalender?.map((item, idx) => (
                <div key={idx}>
                  <LabelComponent label={item?.uraian} value={item?.jadwal} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function LabelComponent({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex w-full gap-32 font-sans">
      <p className="w-1/2">{label}</p>
      <p className="w-1/2">{value}</p>
    </div>
  )
}
