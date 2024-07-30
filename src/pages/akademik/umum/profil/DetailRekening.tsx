import { convertSlugToText } from '@/utils/formatText'
import { JadwalKuliahInfo } from '@/components/JadwalKuliahInfo'
import { Form } from '@/components/Form'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ButtonGroup, UmumTabs } from '@/features/akademik/umum'
import { useAkademikRekening } from '@/data/akademik/profil'
import { usePathname } from '@/utils/usePathname'
import { Dispatch, SetStateAction } from 'react'
import { FormAkademikRekeningBank } from '@/components/FormComponent/akademik'

export default function AkademikDetailRekening({
  menu,
  setMenu,
  tabs,
}: {
  menu: string
  setMenu: Dispatch<SetStateAction<string>>
  tabs: string[]
}) {
  const { lastPathname } = usePathname()
  const {
    isShow: isShowRekening,
    isSubmit: isSubmitRekening,
    setIsShow: setIsShowRekening,
    setIsSubmit: setIsSubmitRekening,
    loadingUpdate: loadingUpdateRekening,
    handleSubmit: handleSubmitRekening,
    form: formRekening,
    isEdit: isEditRekening,
    setIsEdit: setIsEditRekening,
    setFile,
    setFileUrl,
    fileUrl,
  } = useAkademikRekening()

  return (
    <>
      <Form {...formRekening}>
        <form
          className="scrollbar flex h-full w-full flex-col gap-32 overflow-y-auto"
          onSubmit={formRekening.handleSubmit(handleSubmitRekening)}
        >
          <div className="scrollbar flex h-full flex-col gap-32 overflow-y-auto">
            <div className="flex items-center justify-between gap-32 border-b border-[#9c9c9c] pb-8">
              <p className="font-roboto text-[3.2rem]">
                {convertSlugToText(lastPathname)}
              </p>
              <ButtonGroup
                isEdit={isEditRekening}
                setIsEdit={setIsEditRekening}
                isLoading={loadingUpdateRekening}
                isShow={isShowRekening}
                isSubmit={isSubmitRekening}
                setIsShow={setIsShowRekening}
                setIsSubmit={setIsSubmitRekening}
                form={formRekening}
                handleSubmit={handleSubmitRekening}
                menu={menu}
              />
            </div>
            <div className="scrollbar flex h-full flex-1 flex-col gap-32 overflow-y-auto">
              <JadwalKuliahInfo />
              <div className="flex">
                <UmumTabs menu={menu} setMenu={setMenu} menuList={tabs} />
              </div>
              <FormAkademikRekeningBank
                form={formRekening}
                isLoading={loadingUpdateRekening}
                isEdit={isEditRekening}
                setFile={setFile}
                setFileUrl={setFileUrl}
                fileUrl={fileUrl}
              />
            </div>
          </div>
        </form>
      </Form>
      <ToastContainer />
    </>
  )
}
