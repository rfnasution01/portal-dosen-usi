import { UseFormReturn } from 'react-hook-form'
import { Dispatch, SetStateAction, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheck,
  faEye,
  faEyeSlash,
  faKey,
  faSave,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons'
import { Form } from '../Form'
import { FormInputText } from '../InputComponent'
import { ValidasiKonfirmasi } from '../DialogComponent/ValidasiKonfirmasi'

export function FormGantiPasswords({
  form,
  isLoading,
  handleSubmit,
  isShow,
  isSubmit,
  setIsShow,
  setIsSubmit,
}: {
  form: UseFormReturn
  isLoading: boolean
  handleSubmit: () => Promise<void>
  setIsShow: Dispatch<SetStateAction<boolean>>
  setIsSubmit: Dispatch<SetStateAction<boolean>>
  isShow: boolean
  isSubmit: boolean
}) {
  const [isShowOld, setIsShowOld] = useState<boolean>(false)
  const [isShowNew, setIsShowNew] = useState<boolean>(false)

  return (
    <>
      <Form {...form}>
        <form
          className="flex flex-col gap-32"
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <FormInputText
            name="old_password"
            form={form}
            placeholder="Password Lama"
            label="Password Lama"
            className="w-full text-black-200"
            isDisabled={isLoading}
            suffix={
              <span
                onClick={() => {
                  setIsShowOld(!isShowOld)
                }}
              >
                {isShowOld ? (
                  <FontAwesomeIcon icon={faEye} />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} />
                )}
              </span>
            }
            prefix={<FontAwesomeIcon icon={faKey} />}
            type={isShowOld ? 'text' : 'password'}
          />
          <FormInputText
            name="new_password"
            form={form}
            placeholder="Password Baru"
            className="text-black-200"
            isDisabled={isLoading}
            suffix={
              <span
                onClick={() => {
                  setIsShowNew(!isShowNew)
                }}
              >
                {isShowNew ? (
                  <FontAwesomeIcon icon={faEye} />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} />
                )}
              </span>
            }
            prefix={<FontAwesomeIcon icon={faKey} />}
            type={isShowNew ? 'text' : 'password'}
          />

          <button
            type="submit"
            onClick={async () => {
              const isValid = await form.trigger()

              if (isValid) {
                setIsShow(true)
              }
            }}
            className="flex items-center justify-center gap-12 rounded-2xl bg-primary-900 py-12 text-white"
          >
            <p>Ubah</p>
          </button>
        </form>
      </Form>
      <ValidasiKonfirmasi
        isOpen={isShow}
        setIsOpen={setIsShow}
        isAuto
        childrenButton={
          <button
            type="submit"
            onClick={() => {
              setIsSubmit(true)
              handleSubmit()
            }}
            disabled={isLoading}
            className="flex items-center gap-12 rounded-2xl bg-success px-24 py-12 text-white hover:bg-opacity-80 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="animate-spin duration-300">
                <FontAwesomeIcon icon={faSpinner} />
              </div>
            ) : isSubmit ? (
              <FontAwesomeIcon icon={faSave} />
            ) : (
              <FontAwesomeIcon icon={faCheck} />
            )}
            {isSubmit ? 'Simpan' : 'Sudah Benar'}
          </button>
        }
      />
    </>
  )
}
