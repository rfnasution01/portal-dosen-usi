/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from '@/components/Form'
import { faSave, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { UseFormReturn } from 'react-hook-form'

export function ButtonGroup({
  form,
  handleSubmitKepegawaian,
}: {
  form: UseFormReturn
  handleSubmitKepegawaian: (values: any) => Promise<void>
}) {
  return (
    <div className="flex items-center gap-16">
      <Form {...form}>
        <form
          className="flex h-full w-full flex-col gap-32"
          onSubmit={form.handleSubmit(handleSubmitKepegawaian)}
        >
          <button
            type="submit"
            className="flex items-center gap-12 rounded-2xl bg-success px-24 py-12 text-white"
          >
            <FontAwesomeIcon icon={faSave} />
            Simpan
          </button>
        </form>
      </Form>

      <button className="bg-warning flex items-center gap-12 rounded-2xl px-24 py-12 text-white">
        <FontAwesomeIcon icon={faXmark} />
        Batal
      </button>
      <button className="flex items-center gap-12 rounded-2xl bg-danger px-24 py-12 text-white">
        <FontAwesomeIcon icon={faTrash} />
        Hapus
      </button>
    </div>
  )
}
