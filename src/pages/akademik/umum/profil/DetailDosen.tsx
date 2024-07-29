import { convertSlugToText } from '@/utils/formatText'
import { JadwalKuliahInfo } from '@/components/JadwalKuliahInfo'
import { Form } from '@/components/Form'
import { FormAkademikDosen } from '@/components/FormComponent/akademik'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ButtonGroup, UmumTabs } from '@/features/akademik/umum'
import { useAkademikDosen } from '@/data/akademik/profil'
import { usePathname } from '@/utils/usePathname'
import { Dispatch, SetStateAction } from 'react'

export default function AkademikDetailDosen({
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
    isShow: isShowDosen,
    isSubmit: isSubmitDosen,
    setIsShow: setIsShowDosen,
    setIsSubmit: setIsSubmitDosen,
    loadingUpdate: loadingUpdateDosen,
    handleSubmit: handleSubmitDosen,
    form: formDosen,
    isEdit: isEditDosen,
    setIsEdit: setIsEditDosen,
  } = useAkademikDosen()

  return (
    <>
      <Form {...formDosen}>
        <form
          className="scrollbar flex h-full w-full flex-col gap-32 overflow-y-auto"
          onSubmit={formDosen.handleSubmit(handleSubmitDosen)}
        >
          <div className="scrollbar flex h-full flex-col gap-32 overflow-y-auto">
            <div className="flex items-center justify-between gap-32 border-b border-[#9c9c9c] pb-8">
              <p className="font-roboto text-[3.2rem]">
                {convertSlugToText(lastPathname)}
              </p>
              <ButtonGroup
                isEdit={isEditDosen}
                setIsEdit={setIsEditDosen}
                isLoading={loadingUpdateDosen}
                isShow={isShowDosen}
                isSubmit={isSubmitDosen}
                setIsShow={setIsShowDosen}
                setIsSubmit={setIsSubmitDosen}
                form={formDosen}
                handleSubmit={handleSubmitDosen}
                menu={menu}
              />
            </div>
            <div className="scrollbar flex h-full flex-1 flex-col gap-32 overflow-y-auto">
              <JadwalKuliahInfo />
              <div className="flex">
                <UmumTabs menu={menu} setMenu={setMenu} menuList={tabs} />
              </div>
              <FormAkademikDosen
                form={formDosen}
                isLoading={loadingUpdateDosen}
                isEdit={isEditDosen}
              />
            </div>
          </div>
        </form>
      </Form>
      <ToastContainer />
    </>
  )
}
