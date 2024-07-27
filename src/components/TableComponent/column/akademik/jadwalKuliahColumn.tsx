import { GetJadwalSemesterType } from '@/store/type/akademik/jadwalKuliahType'
import { Column } from '../..'

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
