import { Loading } from '@/components/Loading'
import { useAkademikJadwalKuliah } from '@/data/akademik'

export function JadwalKuliahKeterangan() {
  const { dataBobotNilai, loadingBobotNilai } = useAkademikJadwalKuliah()
  const listKeterangan = [
    'Nilai yang dimasukkan adalah nilai mentah (bukan nilai setelah persentase).',
    'Input nilai secara berurutan mulai dari nilai persentase sampai dengan nilai UAS.',
    'Setelah selesai menginput nilai, ajukan nilai ke program studi',
  ]

  const transformedString = dataBobotNilai
    ?.map((item) => `${item.nilai} = ${item.nilai_min}-${item.nilai_max}`)
    .join(', ')

  return (
    <div className="flex flex-col gap-32 rounded-2x border bg-neutral-yellow p-32 text-neutral-black">
      {loadingBobotNilai ? (
        <Loading />
      ) : (
        <>
          <p>Keterangan:</p>
          <div className="ml-12 flex flex-col gap-12">
            {listKeterangan?.map((item, idx) => (
              <p key={idx} style={{ lineHeight: '130%' }}>
                {idx + 1}. {item}
              </p>
            ))}
            <p style={{ lineHeight: '130%' }}>
              {listKeterangan?.length + 1}. {transformedString}
            </p>
          </div>
        </>
      )}
    </div>
  )
}
