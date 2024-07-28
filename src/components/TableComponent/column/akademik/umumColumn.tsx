import { GetPimpinanType } from '@/store/type/akademik/pimpinanType'
import { Column } from '../..'
import { GetDosenType } from '@/store/type/akademik/dosenType'
import { GetDokumenAkademikType } from '@/store/type/akademik/dokumenAkademik'

export const columnsListDosen: Column<GetDosenType>[] = [
  {
    header: 'Nama',
    key: 'nama',
    width: '!min-w-[12rem]',
  },
  { header: 'Email', key: 'email', width: '!min-w-[12rem]' },
  { header: 'Hp', key: 'hp', width: '!min-w-[12rem]' },
  { header: 'Status', key: 'status', width: '!min-w-[12rem]' },
]

export const columnsListPimpinan: Column<GetPimpinanType>[] = [
  {
    header: 'Nama',
    key: 'nama',
    width: '!min-w-[12rem]',
  },
  { header: 'Jabatan', key: 'jabatan', width: '!min-w-[12rem]' },
  { header: 'Satuan Kerja', key: 'satker', width: '!min-w-[12rem]' },
]

export const columnsListDokumen: Column<GetDokumenAkademikType>[] = [
  {
    header: 'Jenis Dokumen',
    key: 'dokumen',
    width: '!min-w-[12rem]',
  },
  { header: 'Pemilik', key: 'pemilik', width: '!min-w-[12rem]' },
  { header: 'Nomor Dokumen', key: 'nomor', width: '!min-w-[12rem]' },
  { header: 'Tanggal', key: 'tanggal', width: '!min-w-[12rem]' },
  { header: 'Judul', key: 'judul', width: '!min-w-[12rem]' },
]
