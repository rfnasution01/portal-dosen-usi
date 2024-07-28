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
import { GetReferensiType } from '@/store/type/referensiType'
import { useGetReferensiQuery } from '@/store/slices/referensiAPI'
import clsx from 'clsx'

type inputProps = {
  placeholder: string
  isDisabled?: boolean
  name: string
  headerLabel?: string
  useFormReturn: UseFormReturn
  className?: string
  setIdKategori?: Dispatch<SetStateAction<string>>
  q?: string
  level1?: boolean
  level2?: boolean
  level3?: boolean
  level4?: boolean
  level5?: boolean
  isRow?: boolean
}

export function SelectListReferensi({
  name,
  headerLabel,
  placeholder,
  isDisabled,
  useFormReturn,
  className,
  setIdKategori,
  q,
  level1,
  level2,
  level3,
  level4,
  level5,
  isRow,
}: inputProps) {
  const [query, setQuery] = useState<string>(null)
  const [listKonten, setListKonten] = useState<GetReferensiType[]>([])

  const { data, isSuccess, isLoading, isFetching } = useGetReferensiQuery(
    {
      q: q,
    },
    { skip: !q },
  )

  useEffect(() => {
    if (!isFetching) {
      if (data?.meta?.page > 1) {
        setListKonten((prevData) => [...prevData, ...(data?.data ?? [])])
      } else {
        setListKonten([...(data?.data ?? [])])
      }
    }
  }, [data])

  let KontenOption = []
  if (isSuccess) {
    KontenOption = listKonten.map((item) => {
      return {
        value: item?.id,
        label: item?.nama,
      }
    })
  }

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
              `${level1 ? 'z-50' : level2 ? 'z-40' : level3 ? 'z-30' : level4 ? 'z-20' : level5 ? 'z-10' : 'z-0'} flex w-full text-primary-100 ${isRow ? 'flex-row items-center gap-32' : 'flex-col gap-12'} text-[2rem] phones:flex-col phones:items-start phones:gap-12 phones:text-[2.4rem]`,
              className,
            )}
          >
            {headerLabel && (
              <div
                className={clsx('text-primary-100 phones:text-left', {
                  'w-1/3 phones:w-full': isRow,
                  'w-full phones:w-full': !isRow,
                })}
              >
                <FormLabel className="font-roboto">{headerLabel}</FormLabel>
              </div>
            )}
            <div
              className={clsx('', {
                'w-2/3 phones:w-full': isRow,
                'w-full phones:w-full': !isRow,
              })}
            >
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
                    useFormReturn.setValue(
                      name.substring(3),
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
