import { JadwalKuliahType } from '@/store/type/akademik/jadwalKuliahType'
import { getDayName } from '@/utils/formatText'

export function LabelJadwalKuliah({
  label1,
  label2,
  value1,
  value2,
  dosen,
  jadwal,
}: {
  label1?: string
  value1?: string
  label2?: string
  value2?: string
  dosen?: string[]
  jadwal?: JadwalKuliahType[]
}) {
  return (
    <div className="flex gap-32 phones:flex-col phones:gap-8">
      <div className="flex w-1/2 gap-32 phones:w-full phones:gap-8">
        <div className="flex w-full gap-32 phones:flex-col phones:gap-8">
          <p
            className="w-1/2 font-roboto text-primary-900 phones:w-full"
            style={{ lineHeight: '130%' }}
          >
            {label1}
          </p>
          {dosen ? (
            <div className="flex w-1/2 flex-col gap-8 phones:w-full">
              {dosen
                ?.filter((item) => item !== '')
                .map((item, idx) => (
                  <p key={idx} style={{ lineHeight: '130%' }}>
                    {item}
                  </p>
                ))}
            </div>
          ) : (
            <p className="w-1/2 phones:w-full" style={{ lineHeight: '130%' }}>
              {value1}
            </p>
          )}
        </div>
      </div>
      <div className="flex w-1/2 gap-32 phones:w-full">
        <div className="flex w-full gap-32 phones:flex-col phones:gap-8">
          <p
            className="w-1/2 font-roboto text-primary-900 phones:w-full"
            style={{ lineHeight: '130%' }}
          >
            {label2}
          </p>

          {label2 === 'Ruangan' ? (
            <div className="flex w-1/2 flex-col gap-8 phones:w-full">
              {jadwal?.map((item, idx) => (
                <p key={idx} style={{ lineHeight: '130%' }}>
                  {item?.ruangan}
                </p>
              ))}
            </div>
          ) : label2 === 'Hari / Sesi' ? (
            <div className="flex w-1/2 flex-col gap-8 phones:w-full">
              {jadwal?.map((item, idx) => (
                <p key={idx} style={{ lineHeight: '130%' }}>
                  {getDayName(Number(item?.hari))} /{' '}
                  {item?.jam_mulai.slice(0, 5)} - {item?.jam_akhir?.slice(0, 5)}
                </p>
              ))}
            </div>
          ) : (
            <p className="w-1/2 phones:w-full" style={{ lineHeight: '130%' }}>
              {value2}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
