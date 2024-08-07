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
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import { Fragment, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FormInputText } from '@/components/InputComponent'
import { ValidasiKonfirmasi } from '@/components/DialogComponent/ValidasiKonfirmasi'

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
  const [isShowValidasi, setIsShowValidasi] = useState(false)
  const [menu, setMenu] = useState<string>('')

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => setIsLoading(false), 100)
    return () => clearTimeout(timer)
  }, [fourthPathname])

  const isShow = ['1', '2', '3', '4', '5', '6'].includes(
    dataJadwalDetail?.status,
  )

  // State untuk menyimpan status checkbox
  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    dataKomposisi?.map(() => false) || [],
  )

  // Function untuk menghandle perubahan checkbox
  const handleCheckboxChange = (index: number) => {
    setCheckedItems((prevCheckedItems) => {
      const newCheckedItems = [...prevCheckedItems]
      newCheckedItems[index] = !newCheckedItems[index]
      return newCheckedItems
    })
  }

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
            <button
              onClick={() => {
                if (dataJadwalNilai?.aspek_nilai?.length !== 0) {
                  setIsShowValidasi(true)
                } else {
                  setIsShowKomposisi(true)
                }
              }}
              className="flex items-center gap-12 rounded-2xl bg-success px-24 py-12 text-white hover:bg-opacity-80"
            >
              <FontAwesomeIcon icon={faPen} />
              <p className="phones:hidden">Set Komposisi Nilai</p>
            </button>
          </div>
        </div>
        <div className="scrollbar flex h-full flex-1 flex-col gap-32 overflow-y-auto">
          {isShow && (
            <div
              className={clsx('flex flex-col gap-8 border-l-2 p-32', {
                'border-orange-900 bg-orange-100 text-orange-900':
                  dataJadwalDetail?.status === '1',
                'border-emerald-900 bg-emerald-100 text-emerald-900':
                  dataJadwalDetail?.status === '2',
                'border-rose-900 bg-rose-100 text-rose-900':
                  dataJadwalDetail?.status === '3',
                'border-yellow-900 bg-yellow-100 text-yellow-900':
                  dataJadwalDetail?.status === '4',
                'border-green-900 bg-green-100 text-green-900':
                  dataJadwalDetail?.status === '5',
                'border-red-900 bg-red-100 text-red-900':
                  dataJadwalDetail?.status === '6',
              })}
            >
              <p className="font-roboto text-[2.6rem]">
                {dataJadwalDetail?.status === '0'
                  ? 'Draft'
                  : dataJadwalDetail?.status === '1'
                    ? 'Menunggu Persetujuan Prodi'
                    : dataJadwalDetail?.status === '2'
                      ? 'Diterima Prodi'
                      : dataJadwalDetail?.status === '3'
                        ? 'Ditolak Prodi'
                        : dataJadwalDetail?.status === '4'
                          ? 'Diajukan Ke Akademik'
                          : dataJadwalDetail?.status === '5'
                            ? 'Diterima Akademik'
                            : dataJadwalDetail?.status === '6'
                              ? 'Ditolak Akademik'
                              : ''}
              </p>
              {dataJadwalDetail?.status_alasan && (
                <p className="font-sans">{dataJadwalDetail?.status_alasan}</p>
              )}
            </div>
          )}

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

          {dataJadwalNilai?.aspek_nilai?.length > 0 && (
            <div>
              {loadingJadwalNilai ? (
                <SkeletonText lines={1} className="w-1/4 phones:w-1/2" />
              ) : (
                <AkademikNilaiMahasiswaMenu
                  aspekNilai={dataJadwalNilai?.aspek_nilai}
                />
              )}
            </div>
          )}

          {dataJadwalNilai?.aspek_nilai?.length > 0 &&
            (isLoading ? <Loading /> : <Outlet />)}
        </div>
      </div>
      <DialogSetKomposisi
        isOpen={isShowKomposisi}
        setIsOpen={setIsShowKomposisi}
        child={
          <div className="flex w-full flex-col gap-32 font-sans text-[2rem] phones:text-[2.4rem]">
            {menu === '' ? (
              <div className="flex flex-col gap-12">
                <p className="text-center text-[2.4rem]">
                  Mata Kuliah: {dataJadwalDetail?.nama_makul}
                </p>
                <div className="flex items-center gap-12 rounded-2xl bg-red-100 px-24 py-12 text-red-900">
                  <FontAwesomeIcon icon={faTriangleExclamation} size="sm" />
                  <p className="text-center text-[2rem]">
                    Harap centang kotak kiri terlebih dahulu untuk dapat mengisi
                    nilai pada formulir
                  </p>
                </div>
              </div>
            ) : (
              <></>
            )}
            <Form {...formKomposisi}>
              <form
                className="flex flex-col gap-32"
                onSubmit={formKomposisi.handleSubmit(handleSubmitKomposisi)}
              >
                {menu === '' ? (
                  <>
                    <table className="h-full flex-1 border-collapse overflow-y-auto border border-black-300 bg-white text-[2rem] phones:h-auto">
                      <thead className="relative z-10 align-top leading-medium text-neutral-white">
                        <tr>
                          <th className="sticky top-0 w-[5%] border-b-2 bg-primary-900 px-8 py-8 text-center align-middle uppercase text-white">
                            #
                          </th>
                          <th className="sticky top-0 w-[5%] border-b-2 bg-primary-900 px-8 py-8 text-center align-middle uppercase text-white">
                            Unsur Nilai
                          </th>
                          <th className="sticky top-0 w-[5%] border-b-2 bg-primary-900 px-8 py-8 text-center align-middle uppercase text-white">
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
                                <input
                                  type="checkbox"
                                  checked={checkedItems[rowIndex]}
                                  onChange={() =>
                                    handleCheckboxChange(rowIndex)
                                  }
                                />
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
                                  isDisabled={!checkedItems[rowIndex]}
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
                      <span className="font-bold">Catatan:</span> Total
                      persentase nilai harus 100%
                    </p>
                    <div className="flex items-center justify-center gap-16">
                      <button
                        onClick={() => setIsShowKomposisi(false)}
                        className="rounded-2xl bg-danger px-24 py-12 text-white hover:bg-opacity-90"
                      >
                        Batal
                      </button>
                      <button
                        type="button"
                        onClick={() => setMenu('konfirmasi')}
                        disabled={
                          Number(calculateTotalPercentage()) !== 100 ||
                          !checkedItems.every((item) => item) ||
                          checkedItems?.length === 0
                        }
                        className="rounded-2xl bg-success px-24 py-12 text-white hover:bg-opacity-90 disabled:cursor-not-allowed disabled:bg-green-100"
                      >
                        Simpan
                      </button>
                    </div>
                  </>
                ) : (
                  <div
                    className="flex flex-col gap-32 text-[2rem]"
                    style={{ lineHeight: '130%' }}
                  >
                    <p>
                      {' '}
                      Apakah Anda sudah yakin dengan komposisi nilai ini? Harap
                      diperhatikan bahwa setelah Anda memvalidasi komposisi
                      nilai, data tersebut tidak dapat diperbarui lagi. Pastikan
                      semua informasi sudah benar sebelum melanjutkan.
                    </p>
                    <div className="flex items-center justify-center gap-16">
                      <button
                        onClick={() => setMenu('')}
                        className="rounded-2xl bg-danger px-24 py-12 text-white hover:bg-opacity-90"
                      >
                        Batal
                      </button>
                      <button
                        type="submit"
                        disabled={Number(calculateTotalPercentage()) !== 100}
                        className="rounded-2xl bg-success px-24 py-12 text-white hover:bg-opacity-90 disabled:cursor-not-allowed disabled:bg-green-100"
                      >
                        Simpan
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </Form>
          </div>
        }
      />
      <ValidasiKonfirmasi
        isAuto
        isOpen={isShowValidasi}
        setIsOpen={setIsShowValidasi}
        title={'Komposisi Nilai Sudah Divalidasi'}
        children={
          <p className="text-[2rem]">
            Maaf, Anda tidak diperkenankan lagi untuk memperbaharui komposisi
            nilai. Jika ada kesalahan atau perubahan yang perlu dilakukan,
            silakan hubungi bagian akademik untuk bantuan lebih lanjut. Terima
            kasih
          </p>
        }
        cancelString={<button className="">Kembali</button>}
      />
      <ToastContainer />
    </div>
  )
}
