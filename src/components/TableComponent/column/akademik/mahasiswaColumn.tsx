import {
  GetMataKuliahDetail,
  ResBimbinganAkademik,
  ResPengajuanKRS,
} from '@/store/type/akademik/bimbinganAkademikType'
import { Column } from '../..'
import clsx from 'clsx'

export const columnsListPengajuanKRS: Column<ResPengajuanKRS>[] = [
  {
    header: 'Angkatan',
    key: 'angkatan',
    width: '!min-w-[12rem]',
  },
  { header: 'NIM/NPM', key: 'nim', width: '!min-w-[12rem]' },
  { header: 'Nama Mahasiswa/i', key: 'nama', width: '!min-w-[12rem]' },
  { header: 'Prodi', key: 'prodi', width: '!min-w-[12rem]' },
]

export const columnsListPengajuanKRSDetail: Column<GetMataKuliahDetail>[] = [
  {
    header: 'Kode MK',
    key: 'kode_makul',
    width: '!min-w-[12rem]',
  },
  { header: 'Mata Kuliah', key: 'nama_makul', width: '!min-w-[12rem]' },
  { header: 'SKS', key: 'sks', width: '!min-w-[12rem]' },
  { header: 'SEM', key: 'semester', width: '!min-w-[12rem]' },
  { header: 'Kelas', key: 'kelas', width: '!min-w-[12rem]' },
  {
    header: 'Dosen',
    key: 'dosen_pengajar',
    width: '!min-w-[12rem]',
    renderCell(rowData) {
      return (
        <div className="flex flex-col gap-8 phones:w-full">
          {rowData?.dosen_pengajar?.map((item, idx) => (
            <div key={idx} style={{ lineHeight: '130%' }}>
              {item}
            </div>
          ))}
        </div>
      )
    },
  },
  {
    header: 'Jadwal',
    key: 'jadwal_kuliah',
    width: '!min-w-[12rem]',
    renderCell(rowData) {
      return (
        <div className="flex flex-col gap-8 phones:w-full">
          {rowData?.jadwal_kuliah?.map((item, idx) => (
            <p key={idx} style={{ lineHeight: '130%' }}>
              {item?.hari} / {item?.jam_mulai?.slice(0, 5)} -{' '}
              {item?.jam_akhir?.slice(0, 5)}
            </p>
          ))}
        </div>
      )
    },
  },
  {
    header: 'Status',
    key: 'status_krs',
    width: '!min-w-[12rem]',
    renderCell(rowData) {
      return (
        <div className="flex">
          <p
            className={clsx(
              'flex rounded-2xl px-24 py-12 text-[1.6rem] text-white',
              {
                'bg-primary-active': rowData?.status_krs === 'Draft',
                'bg-success': rowData?.status_krs === 'Disetujui',
                'bg-danger': rowData?.status_krs === 'Ditolak',
              },
            )}
          >
            {rowData?.status_krs}
          </p>
        </div>
      )
    },
  },
]

export const columnsListBimbinganAkademik: Column<ResBimbinganAkademik>[] = [
  {
    header: 'Angkatan',
    key: 'angkatan',
    width: '!min-w-[12rem]',
  },
  { header: 'NIM/NPM', key: 'nim', width: '!min-w-[12rem]' },
  { header: 'Nama Mahasiswa/i', key: 'nama', width: '!min-w-[12rem]' },
  { header: 'Prodi', key: 'prodi', width: '!min-w-[12rem]' },
]
