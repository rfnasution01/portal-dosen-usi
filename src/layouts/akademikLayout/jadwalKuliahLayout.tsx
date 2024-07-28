import { DialogSetKomposisi } from '@/components/DialogComponent/DialogSetKomposisi'
import { Form } from '@/components/Form'
import { Loading } from '@/components/Loading'
import SkeletonText from '@/components/SkeletonComonent/SkeletonText'
import { useAkademikJadwalKuliah } from '@/data/akademik'
import {
  AkademikNilaiMahasiswaMenu,
  JadwalKuliahInfo,
} from '@/features/akademik/jadwalKuliah'
import { JadwalKuliahKeterangan } from '@/features/siakad/jadwalKuliah'
import { usePathname } from '@/utils/usePathname'
import {
  faArrowLeftLong,
  faCircleExclamation,
  faPen,
  faPencil,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import { Fragment, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FormInputText } from '@/components/InputComponent'

export default function AkademikJadwalKuliahLayout() {
  const navigate = useNavigate()
  const { fourthPathname } = usePathname()

  const {
    dataJadwalDetail,
    loadingJadwalDetail,
    dataJadwalNilai,
    dataKomposisi,
    isShowKomposisi,
    setIsShowKomposisi,
    handleSubmitKomposisi,
    calculateTotalPercentage,
    formKomposisi,
    loadingJadwalNilai,
  } = useAkademikJadwalKuliah()

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => setIsLoading(false), 100)
    return () => clearTimeout(timer)
  }, [fourthPathname])

  return (
    <div className="scrollbar flex h-full w-full flex-col gap-32 overflow-y-auto">
      <div
        onClick={() => {
          navigate('/akademik/jadwal-perkuliahan')
        }}
        className="flex items-center gap-12 font-sans text-[2.2rem] text-black-300 hover:cursor-pointer hover:text-primary-active"
      >
        <FontAwesomeIcon icon={faArrowLeftLong} />
        <p>Kembali</p>
      </div>

      <div className="scrollbar flex h-full flex-1 flex-col gap-32 overflow-y-auto">
        <div className="flex items-center justify-between gap-32">
          <p className="font-sans text-[2.8rem] font-bold text-black-300">
            Jadwal Perkuliahan
          </p>
          <div className="flex items-center gap-16">
            <button className="flex items-center gap-12 rounded-2xl bg-warning px-24 py-12 text-white hover:bg-opacity-80">
              <FontAwesomeIcon icon={faPencil} />
              <p>Input Nilai</p>
            </button>
            <button
              onClick={() => setIsShowKomposisi(true)}
              className="flex items-center gap-12 rounded-2xl bg-success px-24 py-12 text-white hover:bg-opacity-80"
            >
              <FontAwesomeIcon icon={faPen} />
              Set Komposisi Nilai
            </button>
          </div>
        </div>
        <div className="scrollbar flex h-full flex-1 flex-col gap-32 overflow-y-auto">
          <div className="flex flex-col gap-8 border-l-2 border-primary-900 bg-primary-50 p-32">
            {loadingJadwalDetail ? (
              <SkeletonText lines={4} />
            ) : (
              <JadwalKuliahInfo jadwalKuliahDetail={dataJadwalDetail} />
            )}
          </div>

          {fourthPathname === undefined && <JadwalKuliahKeterangan />}

          {dataJadwalNilai?.aspek_nilai?.length === 0 && (
            <div className="flex items-center gap-12 rounded-2xl bg-[#FBC3C3] p-24 text-danger">
              <FontAwesomeIcon icon={faCircleExclamation} />
              <p>
                Anda belum set komposisi nilai, mohon tentukan terlebih dahulu
                melalui fitur set komposisi nilai
              </p>
            </div>
          )}

          <div>
            {loadingJadwalNilai ? (
              <SkeletonText lines={1} className="w-1/4 phones:w-1/2" />
            ) : (
              <AkademikNilaiMahasiswaMenu
                aspekNilai={dataJadwalNilai?.aspek_nilai}
              />
            )}
          </div>

          {isLoading ? <Loading /> : <Outlet />}
        </div>
      </div>
      <DialogSetKomposisi
        isOpen={isShowKomposisi}
        setIsOpen={setIsShowKomposisi}
        child={
          <div className="flex w-full flex-col gap-32 font-sans text-[2rem] phones:text-[2.4rem]">
            <p className="text-center text-[2.4rem]">
              Mata Kuliah: {dataJadwalDetail?.nama_makul}
            </p>
            <Form {...formKomposisi}>
              <form
                className="flex flex-col gap-32"
                onSubmit={formKomposisi.handleSubmit(handleSubmitKomposisi)}
              >
                <table className="h-full flex-1 border-collapse overflow-y-auto border border-black-300 bg-white text-[2rem] phones:h-auto">
                  <thead className="relative z-10 align-top leading-medium text-neutral-white">
                    <tr>
                      <th className="px-6 py-6 sticky top-0 w-[5%] border-b-2 bg-primary-900 text-center align-middle uppercase text-white">
                        #
                      </th>
                      <th className="px-6 py-6 sticky top-0 w-[5%] border-b-2 bg-primary-900 text-center align-middle uppercase text-white">
                        Unsur Nilai
                      </th>
                      <th className="px-6 py-6 sticky top-0 w-[5%] border-b-2 bg-primary-900 text-center align-middle uppercase text-white">
                        Persentase
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataKomposisi?.map((row, rowIndex) => (
                      <Fragment key={rowIndex}>
                        <tr
                          className={clsx(
                            'border-b border-black-300 text-neutral-black transition-all ease-in hover:cursor-pointer hover:bg-yellow-100',
                          )}
                        >
                          <td className="px-24 py-12 text-center align-middle leading-medium">
                            {rowIndex + 1}
                          </td>
                          <td className="px-24 py-12 text-center align-middle leading-medium">
                            {row?.jenis_nilai}
                          </td>
                          <td className="px-24 py-12 text-center align-middle leading-medium">
                            <FormInputText
                              name={`komposisi_nilai.${row.id}`}
                              form={formKomposisi}
                              placeholder="Persen"
                              className="w-1/2 text-primary-100 phones:w-full"
                              type="text"
                            />
                          </td>
                        </tr>
                      </Fragment>
                    ))}
                    <tr className="border-t-2 border-primary-900 font-bold">
                      <td
                        colSpan={2}
                        className="px-24 py-12 text-center align-middle leading-medium"
                      >
                        Total Persentase
                      </td>
                      <td className="px-24 py-12 text-center align-middle leading-medium">
                        {calculateTotalPercentage()}%
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-primary-200">
                  Catatan: Total persentase nilai harus 100%
                </p>
                <div className="flex items-center justify-center gap-16">
                  <button
                    onClick={() => setIsShowKomposisi(false)}
                    className="rounded-2xl bg-danger px-24 py-12 text-white hover:bg-opacity-90"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="rounded-2xl bg-success px-24 py-12 text-white hover:bg-opacity-90"
                  >
                    Simpan
                  </button>
                </div>
              </form>
            </Form>
          </div>
        }
      />
      <ToastContainer />
    </div>
  )
}
