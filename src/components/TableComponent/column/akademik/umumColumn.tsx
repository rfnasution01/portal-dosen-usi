import { Column } from '../..'
import { GetDosenType } from '@/store/type/akademik/dosenType'

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
