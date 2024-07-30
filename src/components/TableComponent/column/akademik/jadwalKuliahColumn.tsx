import {
  GetJadwalMahasiswaType,
  GetJadwalSemesterType,
  JadwalType,
} from '@/store/type/akademik/jadwalKuliahType'
import { Column } from '../..'
import { getInitials } from '@/utils/formatText'
import clsx from 'clsx'
import dayjs from 'dayjs'
import 'dayjs/locale/id'

export const columnsListJadwalKuliah: Column<GetJadwalSemesterType>[] = [
  {
    header: 'Kode',
    key: 'kode_makul',
    width: '!min-w-[12rem]',
  },
  { header: 'Mata Kuliah', key: 'nama_makul', width: '!min-w-[12rem]' },
  { header: 'SKS', key: 'sks', width: '!min-w-[12rem]' },
  { header: 'Kelas', key: 'kelas', width: '!min-w-[12rem]' },
  { header: 'Ruang', key: 'ruangan', width: '!min-w-[12rem]' },
  {
    header: 'Hari/Jam',
    key: 'hari',
    width: '!min-w-[12rem]',
    renderCell: (rowData) => {
      return (
        <div>{`${rowData?.hari ?? '-'} / ${rowData?.mulai?.slice(0, 5) ?? '-'} - ${rowData?.akhir?.slice(0, 5) ?? '-'}`}</div>
      )
    },
  },
  {
    header: 'Status',
    key: 'status',
    width: '!min-w-[12rem]',
    renderCell: (rowData) => {
      return (
        <div className="flex flex-col gap-32">
          <div className="flex items-center justify-center">
            <p
              className={clsx(
                'rounded-2xl px-16 py-8 text-center text-[1.8rem] text-white hover:bg-opacity-80',
                {
                  'bg-blue-500': rowData?.status === '0',
                  'bg-orange-500': rowData?.status === '1',
                  'bg-emerald-500': rowData?.status === '2',
                  'bg-rose-500': rowData?.status === '3',
                  'bg-yellow-500': rowData?.status === '4',
                  'bg-green-500': rowData?.status === '5',
                  'bg-red-500': rowData?.status === '6',
                },
              )}
            >
              {rowData?.status === '0'
                ? 'Draft'
                : rowData?.status === '1'
                  ? 'Menunggu'
                  : rowData?.status === '2'
                    ? 'Diterima Prodi'
                    : rowData?.status === '3'
                      ? 'Ditolak Prodi'
                      : rowData?.status === '4'
                        ? 'Diajukan Ke Akademik'
                        : rowData?.status === '5'
                          ? 'Diterima Akademik'
                          : rowData?.status === '6'
                            ? 'Ditolak Akademik'
                            : ''}
            </p>
          </div>
        </div>
      )
    },
  },
  {
    header: 'Keterangan',
    key: 'status',
    width: '!min-w-[12rem]',
    renderCell: (rowData) => {
      const isShow = ['1', '2', '3', '4', '5', '6'].includes(rowData?.status)

      return (
        <div className="flex flex-col gap-32">
          {isShow ? (
            <div className="flex flex-col gap-12">
              {rowData?.status_user && (
                <p>
                  {rowData?.status === '1' || rowData?.status === '4'
                    ? 'Diajukan'
                    : rowData?.status === '2' || rowData?.status === '5'
                      ? 'Diterima'
                      : rowData?.status === '3' || rowData?.status === '6'
                        ? 'Ditolak'
                        : 'Diproses'}{' '}
                  Oleh:{' '}
                  <span className="font-roboto">{rowData?.status_user}</span>{' '}
                  pada{' '}
                  <span className="font-roboto">
                    {dayjs(rowData?.status_at)
                      .locale('id')
                      .format('DD MMMM YYYY HH:mm')}
                  </span>{' '}
                  {rowData?.status !== '1' && rowData?.status_alasan
                    ? `dengan alasan ${rowData?.status_alasan ?? '-'}`
                    : ''}
                </p>
              )}
            </div>
          ) : (
            <p className="text-center">-</p>
          )}
        </div>
      )
    },
  },
]

export const columnsListJadwalMahasiswa: Column<GetJadwalMahasiswaType>[] = [
  {
    header: 'Foto',
    key: 'hari',
    width: '!min-w-[12rem]',
    renderCell: (rowData) => {
      return (
        <div>
          {rowData?.foto ? (
            <img
              src={rowData?.foto}
              alt={rowData?.nama}
              className="h-[4rem] w-[4rem] rounded-full"
              loading="lazy"
            />
          ) : (
            <div className="flex h-[4rem] w-[4rem] items-center justify-center rounded-full bg-[#D9D9D9] text-[1.6rem] text-black-300">
              <p>{getInitials(rowData?.nama)}</p>
            </div>
          )}
        </div>
      )
    },
  },
  { header: 'NIM', key: 'nim', width: '!min-w-[12rem]' },
  { header: 'Mahasiswa', key: 'nama', width: '!min-w-[12rem]' },
  {
    header: 'Jenis Kelamin',
    key: 'jenis_kelamin',
    width: '!min-w-[12rem]',
    renderCell(rowData) {
      return (
        <p>
          {rowData?.jenis_kelamin?.includes('P') ? 'Perempuan' : 'Laki-laki'}
        </p>
      )
    },
  },
  {
    header: 'Status',
    key: 'status_krs',
    width: '!min-w-[12rem]',

    renderCell: (rowData) => {
      return (
        <div className="flex justify-center gap-32">
          <div className="flex">
            {rowData?.status_krs && (
              <p
                className={clsx(
                  'rounded-2xl px-24 py-8 text-center text-[1.6rem] text-white',
                  {
                    'bg-orange-500': rowData?.status_krs === 'Draft',
                    'bg-success': rowData?.status_krs === 'Disetujui',
                    'bg-red-500': rowData?.status_krs === 'Ditolak',
                    'bg-blue-500': !['Draft', 'Disetujui', 'Ditolak'].includes(
                      rowData?.status_krs,
                    ),
                  },
                )}
              >
                {rowData?.status_krs}
              </p>
            )}
          </div>
        </div>
      )
    },
  },
]

export const columnsListJadwalKuliahMingguIni: Column<JadwalType>[] = [
  {
    header: 'Mulai',
    key: 'mulai',
    width: '!min-w-[12rem]',
    renderCell: (rowData) => {
      return <div>{rowData?.mulai?.slice(0, 5)}</div>
    },
  },
  {
    header: 'Selesai',
    key: 'akhir',
    width: '!min-w-[12rem]',
    renderCell: (rowData) => {
      return <div>{rowData?.akhir?.slice(0, 5)}</div>
    },
  },
  { header: 'Kelas', key: 'kelas', width: '!min-w-[12rem]' },
  { header: 'Ruangan', key: 'ruang', width: '!min-w-[12rem]' },
]
