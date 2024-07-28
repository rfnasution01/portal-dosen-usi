import { useState } from 'react'
import { UseFormReturn } from 'react-hook-form'

export function FormInputFileAppend({
  name,
  form,
  isLoading,
}: {
  name: string
  form: UseFormReturn
  isLoading: boolean
}) {
  const [errorMessage, setErrorMessage] = useState<string>('')
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0]
    const allowedTypesAll = ['image/jpeg', 'image/png', 'application/pdf']

    const allowedTypes = allowedTypesAll
    const maxSize = 5 * 1024 * 1024 // 5MB

    if (
      selectedFile &&
      allowedTypes.includes(selectedFile.type) &&
      selectedFile.size <= maxSize
    ) {
      form.setValue(name, selectedFile)
      setErrorMessage('')
    } else {
      form.setValue(name, null)
      if (!allowedTypes.includes(selectedFile.type)) {
        setErrorMessage('File harus berupa gambar (JPEG/PNG) atau PDF')
      } else if (selectedFile.size > maxSize) {
        setErrorMessage('Ukuran file tidak boleh lebih dari 5MB')
      }
    }
  }

  return (
    <>
      <div className="flex w-1/2 items-center gap-32 text-[2rem] phones:w-full phones:flex-col phones:items-start phones:gap-12 phones:text-[2.4rem]">
        <p className="w-2/6 text-left phones:w-full phones:text-left">File</p>
        <div className="w-4/6 phones:w-full">
          <input type="file" onChange={handleFileChange} disabled={isLoading} />
        </div>
      </div>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </>
  )
}
