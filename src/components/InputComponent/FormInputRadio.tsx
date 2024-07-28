/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormReturn } from 'react-hook-form'
import { FormField, FormItem, FormLabel, FormMessage } from '@/components/Form'
import { Input } from '.'
import { ReactNode } from 'react'
import clsx from 'clsx'

export function FormInputRadio({
  form,
  label,
  name,
  className,
  isDisabled,
  isRow,
}: {
  form: UseFormReturn | undefined | any
  label?: string | ReactNode
  name: string
  className?: string
  isDisabled?: boolean
  isRow?: boolean
}) {
  return (
    <FormField
      control={form?.control}
      name={name}
      render={({ field }) => (
        <FormItem
          className={`text-warna-dark flex w-full ${isRow ? 'flex-row items-center phones:flex-col' : 'flex-col'} gap-y-8 text-[2rem] ${className}`}
        >
          <FormLabel
            className={clsx('font-roboto', {
              'w-1/3 phones:w-full': isRow,
              'w-full': !isRow,
            })}
          >
            {label}
          </FormLabel>
          <div
            className={clsx('flex items-center gap-x-8', {
              'w-2/3 phones:w-full': isRow,
              'w-full': !isRow,
            })}
          >
            <label className="flex items-center gap-x-4">
              <Input
                type="radio"
                value="Sudah"
                checked={field.value === 'Sudah'}
                onChange={() => field.onChange('Sudah')}
                disabled={isDisabled}
              />
              Sudah
            </label>
            <label className="flex items-center gap-x-4">
              <Input
                type="radio"
                value="Belum"
                checked={field.value === 'Belum'}
                onChange={() => field.onChange('Belum')}
                disabled={isDisabled}
              />
              Belum
            </label>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
