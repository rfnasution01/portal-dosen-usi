import { LabelListColumn } from '@/components/LabelComponent'
import { Loading } from '@/components/Loading'
import { useAkademikDosen } from '@/data/akademik/useDosen'
import { getInitials } from '@/utils/formatText'

export default function AkademikUmumDosen() {
  const { dataDosenDetail, loadingDosenDetail } = useAkademikDosen()

  return (
    <div className="scrollbar flex h-full w-full flex-col gap-32 overflow-y-auto">
      <div className="scrollbar flex h-full flex-col gap-32 overflow-y-auto">
        <div className="flex items-center justify-between gap-32 border-b border-[#9c9c9c] pb-8">
          <p className="font-roboto text-[3.2rem]">Detail Dosen</p>
        </div>
        <div className="scrollbar flex h-full flex-1 flex-col gap-32 overflow-y-auto">
          {loadingDosenDetail ? (
            <Loading />
          ) : (
            <div className="flex flex-col gap-24 rounded-2x bg-white p-32 text-neutral-black">
              {dataDosenDetail?.biodata?.photo ||
              dataDosenDetail?.biodata?.photo !== '' ? (
                <img
                  src={dataDosenDetail?.biodata?.photo}
                  alt={dataDosenDetail?.biodata?.nama}
                  className="w-[14rem] rounded-3xl"
                  loading="lazy"
                />
              ) : (
                <div className="flex h-[18rem] w-[14rem] items-center justify-center rounded-3xl">
                  {getInitials(dataDosenDetail?.biodata?.nama)}
                </div>
              )}
              <LabelListColumn
                label="Nama Dosen"
                value={dataDosenDetail?.biodata?.nama ?? '-'}
              />
              <LabelListColumn
                label="Program Studi"
                value={dataDosenDetail?.biodata?.prodi ?? '-'}
              />
              <LabelListColumn
                label="Fakultas"
                value={dataDosenDetail?.biodata?.fakultas ?? '-'}
              />
              <LabelListColumn
                label="Jabatan Fungsional"
                value={dataDosenDetail?.biodata?.jabatan_fungsiona ?? '-'}
              />

              <div className="flex flex-col gap-12 font-sans">
                <p className="text-[2rem] text-[#6C6C6C]">Riwayat Pendidikan</p>

                {!dataDosenDetail?.pendidikan ||
                dataDosenDetail?.pendidikan?.length === 0 ? (
                  '-'
                ) : (
                  <ol className="mx-32 list-decimal">
                    {dataDosenDetail?.pendidikan?.map((item, idx) => (
                      <li key={idx} className="py-4">
                        {item?.jenjang} - {item?.institusi} ({item?.tahun_lulus}
                        )
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
