import {
  GetJadwalMahasiswaType,
  GetJadwalSemesterType,
  JadwalType,
} from '@/store/type/akademik/jadwalKuliahType'
import { Column } from '../..'
import { getInitials } from '@/utils/formatText'

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
              className="h-[4rem] w-[4rem] rounded-xl"
              loading="lazy"
            />
          ) : (
            <div className="flex h-[4rem] w-[4rem] items-center justify-center rounded-xl bg-[#D9D9D9] text-black-300">
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
