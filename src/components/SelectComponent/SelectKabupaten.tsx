import { useEffect, useState } from 'react'
import { UseFormReturn } from 'react-hook-form'
import Select, { components } from 'react-select'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/Form'
import { cn } from '@/utils/cn'
import { customStyles } from '@/store/type/selectType'
import { GetReferensiType } from '@/store/type/referensiType'
import { useGetReferensiKabupatenQuery } from '@/store/slices/referensiAPI'
import clsx from 'clsx'

type inputProps = {
  placeholder: string
  isDisabled?: boolean
  name: string
  headerLabel: string
  useFormReturn: UseFormReturn
  className?: string
  level1?: boolean
  level2?: boolean
  level3?: boolean
  level4?: boolean
  level5?: boolean
  isRow?: boolean
}

export function SelectListKabupaten({
  name,
  headerLabel,
  placeholder,
  isDisabled,
  useFormReturn,
  className,
  level1,
  level2,
  level3,
  level4,
  level5,
  isRow,
}: inputProps) {
  const [query, setQuery] = useState<string>(null)
  const [listKabupaten, setListKabupaten] = useState<GetReferensiType[]>([])
  const provinsi = useFormReturn.watch('id_provinsi')

  const { data, isSuccess, isLoading, isFetching } =
    useGetReferensiKabupatenQuery(
      { id_provinsi: provinsi },
      { skip: !provinsi },
    )

  useEffect(() => {
    if (!isFetching) {
      if (data?.meta?.page > 1) {
        setListKabupaten((prevData) => [...prevData, ...(data?.data ?? [])])
      } else {
        setListKabupaten([...(data?.data ?? [])])
      }
    }
  }, [data, provinsi])

  let kabupatenOption = []
  if (isSuccess) {
    kabupatenOption = listKabupaten.map((item) => {
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
          <div className="text-[12px]">{props.label}</div>
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
              `${level1 ? 'z-50' : level2 ? 'z-40' : level3 ? 'z-30' : level4 ? 'z-20' : level5 ? 'z-10' : 'z-0'} text-warna-dark flex w-full ${isRow ? 'flex-row items-center gap-32' : 'flex-col gap-12'} gap-12 text-[2rem] phones:flex-col phones:items-start phones:gap-12 phones:text-[2.4rem]`,
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
                      color: 'grey',
                    }),
                    input: (provided) => ({
                      ...provided,
                      color: 'grey',
                    }),
                    menuList: (provided) => ({
                      ...provided,
                      padding: 0,
                      maxHeight: '50vh',
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
                      color: 'rgb(32 34 35 / var(--tw-bg-opacity))',
                      cursor: isDisabled ? 'not-allowed' : 'default',
                      ':hover': {
                        cursor: 'pointer',
                        backgroundColor:
                          'rgb(240 244 247 / var(--tw-bg-opacity))',
                      },
                    }),
                  }}
                  className={`${level1 ? 'z-50' : level2 ? 'z-40' : level3 ? 'z-30' : level4 ? 'z-20' : level5 ? 'z-10' : 'z-0'} text-[2rem] disabled:cursor-not-allowed`}
                  options={kabupatenOption}
                  value={
                    kabupatenOption.filter(
                      (item) => item.value === field.value,
                    )[0]
                  }
                  placeholder={placeholder ?? 'Pilih'}
                  onInputChange={search}
                  onChange={(optionSelected) => {
                    field.onChange(optionSelected.value)
                    useFormReturn.setValue('kabupaten', optionSelected.value)
                    useFormReturn.setValue('kecamatan', null)
                    useFormReturn.setValue('desa', null)
                    useFormReturn.setValue('dusun', null)
                    useFormReturn.setValue('kabupaten', optionSelected?.label)
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
