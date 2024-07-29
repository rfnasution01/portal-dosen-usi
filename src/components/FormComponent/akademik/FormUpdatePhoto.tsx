import { Form } from '@/components/Form'
import { FormInputFile } from '@/components/InputComponent'
import { UseFormReturn } from 'react-hook-form'

export function FormUpdatePhoto({
  loadingFile,
  handleUploadFoto,
  formPhoto,
}: {
  formPhoto: UseFormReturn
  loadingFile: boolean
  handleUploadFoto: (file: File) => Promise<void>
}) {
  return (
    <Form {...formPhoto}>
      <form className="flex flex-col gap-32">
        <FormInputFile
          urls={formPhoto.watch('photo')}
          setUrls={(urls) => formPhoto.setValue('photo', urls)}
          form={formPhoto}
          loadingFile={loadingFile}
          name="file"
          handleUploadFoto={handleUploadFoto}
          label="Photo"
        />
      </form>
    </Form>
  )
}
