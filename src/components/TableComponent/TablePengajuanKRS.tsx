import { Dispatch, Fragment, SetStateAction, useState } from 'react'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCaretDown,
  faCheck,
  faCircleExclamation,
  faDownload,
  faFolder,
  faUser,
  faX,
} from '@fortawesome/free-solid-svg-icons'
import { Loading } from '../Loading'
import { Link } from 'react-router-dom'
import { ValidasiKonfirmasi } from '../DialogComponent/ValidasiKonfirmasi'

export type Column<T> = {
  header: string
  key?: string | number
  renderCell?: (rowData: T) => React.ReactNode
  width?: string
}

export interface ItemTable {
  id?: string
  id_kelas_makul?: string
  id_mahasiswa?: string
  file?: string
}

type Props<T extends ItemTable, P> = {
  data: T[]
  columns: Column<T>[] | ((props: P) => Column<T>[])
  containerClasses?: string
  maxHeight?: string
  loading?: boolean
  columnProps?: P
  onItemClick?: (rowData: T) => void
  collapseComponent?: React.ReactNode
  checkbox?: boolean
  isAksi?: boolean
  isNumber?: boolean
  currentPage?: number
  pageSize?: number
  isDosen?: boolean
  isPimpin?: boolean
  isDokumen?: boolean
  isKRS?: boolean
  isShow?: boolean
  setIsShow: Dispatch<SetStateAction<boolean>>
  setkrs: Dispatch<SetStateAction<{ id: string; status: string }>>
  handleSubmit: () => Promise<void>
  isLoading?: boolean
}

export function TablePengajuanKRS<T extends ItemTable, P>({
  data,
  columns,
  containerClasses = '',
  maxHeight = 'max-h-[70vh]',
  loading,
  columnProps,
  onItemClick,
  collapseComponent,
  checkbox,
  isNumber,
  currentPage,
  pageSize,
  isAksi,
  isDosen,
  isPimpin,
  isDokumen,
  isKRS,
  setIsShow,
  isShow,
  setkrs,
  handleSubmit,
  isLoading,
}: Props<T, P>) {
  const [rowIsOpen, setRowIsOpen] = useState<number | null>(null)
  const [id, setId] = useState<number>()
  const [isCheck, setIsCheck] = useState<string>()

  const columnArray =
    typeof columns === 'function' ? columns(columnProps as P) : columns

  return (
    <div className={`w-full rounded-2xl ${containerClasses}`}>
      {/* ----- Loading UI ----- */}
      {loading ? (
        <Loading width="6.4rem" height="6.4rem" />
      ) : (
        <div
          className={`flex flex-col ${maxHeight}`}
          style={{ scrollbarGutter: 'stable', borderRadius: '3rem' }}
        >
          {/* ----- No Data/Fallback UI ----- */}
          {!data || data.length === 0 ? (
            <p className="text-[2rem] text-typography-disabled">No data.</p>
          ) : (
            <table className="flex-1 border-collapse border border-black-300 bg-white text-[2rem]">
              <thead className="relative z-10 align-top leading-medium text-neutral-white">
                <tr className="">
                  {/* --- NO --- */}
                  {isNumber && pageSize && currentPage && (
                    <th className="sticky top-0 border-b-2 bg-primary-900 px-24 py-24 text-left uppercase text-white">
                      #
                    </th>
                  )}

                  {/* ----- Table Headers ----- */}
                  {columnArray
                    .filter((column) => !column.header.includes('Aksi'))
                    .map((column, colIndex) => (
                      <th
                        className={`sticky top-0 text-nowrap border-b-2 bg-primary-900 px-24 py-24 text-left uppercase text-white ${column.width}`}
                        key={column.key || colIndex.toString()}
                      >
                        {column.header}
                      </th>
                    ))}

                  {/* --- Action --- */}
                  {isAksi && (
                    <th className="sticky top-0 border-b-2 bg-primary-900 px-24 py-24 text-center uppercase text-white">
                      Aksi
                    </th>
                  )}

                  {/* ----- Detail Header ----- */}
                  {collapseComponent && (
                    <th className="sticky right-0 top-0 bg-white p-16 text-center">
                      <span className="shadow-[-2.4rem_0_0.4rem_rgb(255,255,255)]">
                        Detail
                      </span>
                    </th>
                  )}
                </tr>
              </thead>
              <tbody>
                {data.map((row, rowIndex) => (
                  <Fragment key={rowIndex}>
                    <tr
                      className={clsx(
                        'border-b border-black-300 text-neutral-black transition-all ease-in odd:bg-surface-disabled hover:cursor-pointer hover:bg-yellow-100',
                      )}
                      onClick={onItemClick ? () => onItemClick(row) : undefined}
                    >
                      {/* ----- Nomor ----- */}
                      {isNumber && currentPage && pageSize && (
                        <td className="px-24 py-12 align-top leading-medium">
                          {currentPage * pageSize + (rowIndex + 1 - pageSize)}
                        </td>
                      )}

                      {/* ----- Table Data ----- */}
                      {columnArray
                        .filter((column) => !column.header.includes('Aksi'))
                        .map((column, colIndex) => (
                          <td
                            className={`px-24 py-12 align-top leading-medium ${column.width}`}
                            key={column.key || colIndex.toString()}
                          >
                            {column.renderCell
                              ? column.renderCell(row)
                              : (row[
                                  column.key as keyof T
                                ] as React.ReactNode) || '-'}
                          </td>
                        ))}

                      {/* ----- Aksi ----- */}
                      {isAksi && (
                        <td className="px-24 py-12 align-top leading-medium">
                          <div className="flex items-center justify-center gap-12">
                            {!isDosen && !isPimpin && !isDokumen && !isKRS && (
                              <Link
                                to={'/akademik/jadwal-perkuliahan/detail'}
                                onClick={() => {
                                  localStorage.setItem(
                                    'jadwalID',
                                    row?.id_kelas_makul,
                                  )
                                }}
                                className="rounded-lg bg-info px-12 py-4 text-neutral-white"
                              >
                                <FontAwesomeIcon icon={faUser} />
                              </Link>
                            )}
                            {!isDosen && !isPimpin && !isDokumen && !isKRS && (
                              <Link
                                to={'/akademik/jadwal-perkuliahan/mahasiswa'}
                                onClick={() => {
                                  localStorage.setItem(
                                    'jadwalID',
                                    row?.id_kelas_makul,
                                  )
                                }}
                                className="rounded-lg bg-info px-12 py-4 text-neutral-white"
                              >
                                <FontAwesomeIcon icon={faFolder} />
                              </Link>
                            )}
                            {isDosen && (
                              <Link
                                to={'/akademik/umum/dosen-prodi/detail'}
                                onClick={() => {
                                  localStorage.setItem('dosenID', row?.id)
                                }}
                                className="flex items-center gap-12 rounded-lg bg-info px-12 py-4 text-neutral-white"
                              >
                                <FontAwesomeIcon icon={faCircleExclamation} />
                                <p>Detail</p>
                              </Link>
                            )}

                            {isPimpin && (
                              <Link
                                to={'/akademik/umum/data-pimpinan/detail'}
                                onClick={() => {
                                  localStorage.setItem('pimpinanID', row?.id)
                                }}
                                className="flex items-center gap-12 rounded-lg bg-info px-12 py-4 text-neutral-white"
                              >
                                <FontAwesomeIcon icon={faCircleExclamation} />
                                <p>Detail</p>
                              </Link>
                            )}

                            {isDokumen && (
                              <Link
                                to={row?.file}
                                target="_blank"
                                className="flex items-center gap-12 rounded-lg bg-info px-12 py-4 text-neutral-white"
                              >
                                <FontAwesomeIcon icon={faDownload} />
                                <p>Download</p>
                              </Link>
                            )}
                            {isKRS && (
                              <div className="flex items-center gap-32">
                                <div
                                  onClick={() => {
                                    setId(rowIndex)
                                    setIsCheck('Disetujui')
                                    setIsShow(true)
                                    setkrs({
                                      id: row?.id,
                                      status: 'Disetujui',
                                    })
                                  }}
                                  className="flex items-center gap-12 text-primary-active"
                                >
                                  <FontAwesomeIcon icon={faCheck} />
                                  <p>Setujui</p>
                                </div>
                                <div
                                  className="flex items-center gap-12 text-danger"
                                  onClick={() => {
                                    setId(rowIndex)
                                    setIsCheck('Ditolak')
                                    setIsShow(true)
                                    setkrs({
                                      id: row?.id,
                                      status: 'Ditolak',
                                    })
                                  }}
                                >
                                  <FontAwesomeIcon icon={faX} />
                                  <p>Tolak</p>
                                </div>
                              </div>
                            )}
                          </div>
                        </td>
                      )}

                      {/* ----- Collapse Trigger ----- */}
                      {collapseComponent && (
                        <td className="sticky right-0 bg-white p-16">
                          <div className="shadow-[-2.4rem_0_0.4rem_rgb(255,255,255)]">
                            <button
                              className="rounded-full p-4 transition-all ease-in hover:bg-neutral-100"
                              onClick={() => {
                                if (rowIsOpen === rowIndex) {
                                  setRowIsOpen(null)
                                } else {
                                  setRowIsOpen(rowIndex)
                                }
                              }}
                            >
                              <span
                                className={clsx('', {
                                  'rotate-180': rowIsOpen === rowIndex,
                                  'rotate-0': rowIsOpen !== rowIndex,
                                })}
                              >
                                <FontAwesomeIcon icon={faCaretDown} />
                              </span>
                            </button>
                          </div>
                        </td>
                      )}
                    </tr>

                    {/* ----- Collapse Content ----- */}
                    {collapseComponent && (
                      <tr>
                        <td colSpan={columnArray.length + (checkbox ? 2 : 1)}>
                          <div
                            className={clsx(
                              'overflow-hidden border-b bg-neutral-100 bg-opacity-[0.15] px-8 transition-all ease-in',
                              {
                                'max-h-full translate-y-0 py-16 opacity-100':
                                  rowIsOpen === rowIndex,
                                'max-h-0 -translate-y-16 opacity-0':
                                  rowIsOpen !== rowIndex,
                              },
                            )}
                          >
                            {collapseComponent}
                          </div>
                        </td>
                      </tr>
                    )}
                    {id === rowIndex && (
                      <ValidasiKonfirmasi
                        isOpen={isShow}
                        setIsOpen={setIsShow}
                        cancelString="Kembali"
                        isAuto
                        title={
                          isCheck === 'Disetujui'
                            ? 'Apakah yakin menyetujui krs ini?'
                            : 'Apakah yakin menolak krs ini?'
                        }
                        childrenButton={
                          <button
                            type="button"
                            disabled={isLoading}
                            onClick={() => handleSubmit()}
                            className={clsx(
                              'flex items-center gap-12 rounded-2xl bg-primary-100 px-24 py-12 text-white hover:bg-opacity-80',
                            )}
                          >
                            Ya
                          </button>
                        }
                      />
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  )
}