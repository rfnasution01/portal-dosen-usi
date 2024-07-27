import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/Form'

import { cn } from '@/utils/cn'
import { UseFormReturn } from 'react-hook-form'
import Select, { components } from 'react-select'
import { customStyles } from '@/store/type/selectType'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { GetProdiType } from '@/store/type/akademik/prodiType'
import { useGetProdiQuery } from '@/store/slices/akademik/prodiAPI'

type inputProps = {
  placeholder: string
  isDisabled?: boolean
  name: string
  headerLabel?: string
  useFormReturn: UseFormReturn
  className?: string
  setIdKategori?: Dispatch<SetStateAction<string>>
  level1?: boolean
  level2?: boolean
  level3?: boolean
  level4?: boolean
  level5?: boolean
}

export function SelectListProdi({
  name,
  headerLabel,
  placeholder,
  isDisabled,
  useFormReturn,
  className,
  setIdKategori,
  level1,
  level2,
  level3,
  level4,
  level5,
}: inputProps) {
  const [query, setQuery] = useState<string>(null)
  const [listKonten, setListKonten] = useState<GetProdiType[]>([])

  const { data, isSuccess, isLoading, isFetching } = useGetProdiQuery()

  useEffect(() => {
    if (!isFetching) {
      if (data?.meta?.page > 1) {
        setListKonten((prevData) => [...prevData, ...(data?.data ?? [])])
      } else {
        setListKonten([...(data?.data ?? [])])
      }
    }
  }, [data])

  const KontenOption = []
  if (listKonten && isSuccess) {
    listKonten?.forEach((fakultas) => {
      fakultas?.daftar_program_studi?.forEach((prodi) => {
        KontenOption?.push({
          value: prodi?.id,
          label: prodi?.nama_prodi,
        })
      })
    })
  }

  // Menambahkan opsi "Tampilkan Semua"
  KontenOption.unshift({
    value: undefined,
    label: 'Tampilkan Semua',
  })

  const search = (newValue: string) => {
    if (newValue != query) {
      setQuery(newValue)
    }
  }

  const Option = (props) => {
    return (
      <components.Option {...props}>
        <div ref={props.innerRef}>
          <div className="flex flex-col gap-4">
            <p className="text-[2rem] font-bold">{props?.label ?? '-'}</p>
          </div>
        </div>
      </components.Option>
    )
  }

  return (
    <FormField
      name={name}
      control={useFormReturn.control}
      render={({ field }) => {
        return (
          <FormItem
            className={cn(
              `${level1 ? 'z-50' : level2 ? 'z-40' : level3 ? 'z-30' : level4 ? 'z-20' : level5 ? 'z-10' : 'z-0'} text-warna-dark flex w-full flex-col gap-12 text-[2rem] phones:flex-col phones:items-start phones:gap-12 phones:text-[2.4rem]`,
              className,
            )}
          >
            {headerLabel && (
              <div className="text-warna-dark phones:w-full phones:text-left">
                <FormLabel className="font-roboto">{headerLabel}</FormLabel>
              </div>
            )}
            <div className="w-full phones:w-full">
              <FormControl>
                <Select
                  {...field}
                  styles={{
                    ...customStyles,
                    singleValue: (provided) => ({
                      ...provided,
                      color: '#1F475C',
                      textTransform: 'uppercase',
                    }),
                    input: (provided) => ({
                      ...provided,
                      color: '#1F475C',
                    }),
                    menuList: (provided) => ({
                      ...provided,
                      padding: 0,
                      maxHeight: '27vh',
                      overflowY: 'auto',
                      '&::-webkit-scrollbar': {
                        width: 0,
                        height: 0,
                      },
                      '&::-webkit-scrollbar-track': {
                        backgroundColor: 'transparent',
                      },
                      '&::-webkit-scrollbar-thumb': {
                        backgroundColor: 'transparent',
                        borderRadius: '6px',
                      },
                    }),
                    control: (provided) => ({
                      ...provided,
                      backgroundColor:
                        'rgb(255 255 255 / var(--tw-bg-opacity))',
                      border:
                        '1px solid rgb(203 213 225 / var(--tw-bg-opacity))',
                      borderRadius: '0.375rem',
                      fontSize: '2rem',
                    }),
                    option: (provided) => ({
                      ...provided,
                      backgroundColor:
                        'rgb(255 255 255 / var(--tw-bg-opacity))',
                      color: '#1F475C',
                      cursor: isDisabled ? 'not-allowed' : 'default',
                      ':hover': {
                        cursor: 'pointer',
                        backgroundColor:
                          'rgb(240 244 247 / var(--tw-bg-opacity))',
                      },
                    }),
                  }}
                  className={`${level1 ? 'z-50' : level2 ? 'z-40' : level3 ? 'z-30' : level4 ? 'z-20' : level5 ? 'z-10' : 'z-0'} text-[2rem]`}
                  options={KontenOption}
                  value={
                    KontenOption.filter((item) => item.value === field.value)[0]
                  }
                  placeholder={placeholder ?? 'Pilih'}
                  onInputChange={search}
                  onChange={(optionSelected) => {
                    field.onChange(optionSelected?.value)
                    useFormReturn.setValue(
                      `nama_kategori_${name}`,
                      optionSelected?.label,
                    )
                    if (setIdKategori) {
                      setIdKategori(optionSelected?.value)
                    }
                  }}
                  isDisabled={isDisabled}
                  isLoading={isFetching || isLoading}
                  components={{ Option }}
                />
              </FormControl>
            </div>
            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}
