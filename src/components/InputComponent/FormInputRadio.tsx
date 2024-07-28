/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormReturn } from 'react-hook-form'
import { FormField, FormItem, FormLabel, FormMessage } from '@/components/Form'
import { Input } from '.'
import { ReactNode } from 'react'

export function FormInputRadio({
  form,
  label,
  name,
  className,
  isDisabled,
}: {
  form: UseFormReturn | undefined | any
  label?: string | ReactNode
  name: string
  className?: string
  isDisabled?: boolean
}) {
  return (
    <FormField
      control={form?.control}
      name={name}
      render={({ field }) => (
        <FormItem
          className={`text-warna-dark flex w-full flex-col gap-y-8 text-[2rem] ${className}`}
        >
          <FormLabel className="font-roboto">{label}</FormLabel>
          <div className="flex items-center gap-x-8">
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
