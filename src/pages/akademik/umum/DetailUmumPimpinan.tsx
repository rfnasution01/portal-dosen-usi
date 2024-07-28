import { LabelListColumn } from '@/components/LabelComponent'
import { Loading } from '@/components/Loading'
import { useAkademikPimpinan } from '@/data/akademik/usePimpinan'

export default function AkademikUmumPimpinan() {
  const { dataPimpinan, loadingPimpinanDetail } = useAkademikPimpinan()

  return (
    <div className="scrollbar flex h-full w-full flex-col gap-32 overflow-y-auto">
      <div className="scrollbar flex h-full flex-col gap-32 overflow-y-auto">
        <div className="flex items-center justify-between gap-32 border-b border-[#9c9c9c] pb-8">
          <p className="font-roboto text-[3.2rem]">Detail Pimpinan</p>
        </div>
        <div className="scrollbar flex h-full flex-1 flex-col gap-32 overflow-y-auto">
          {loadingPimpinanDetail ? (
            <Loading />
          ) : (
            <div className="flex flex-col gap-32">
              {dataPimpinan?.map((item, idx) => (
                <div
                  className="flex flex-col gap-24 rounded-2x bg-white p-32 shadow-md"
                  key={idx}
                >
                  <LabelListColumn label="Nama Dosen" value={item?.nama} />
                  <LabelListColumn label="Jabatan" value={item?.jabatan} />
                  <LabelListColumn label="Satuan Kerja" value={item?.satker} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
