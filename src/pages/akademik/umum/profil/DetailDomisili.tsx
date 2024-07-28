import { convertSlugToText } from '@/utils/formatText'
import { JadwalKuliahInfo } from '@/components/JadwalKuliahInfo'
import { Form } from '@/components/Form'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ButtonGroup, UmumTabs } from '@/features/akademik/umum'
import { useAkademikDomisili } from '@/data/akademik/profil'
import { usePathname } from '@/utils/usePathname'
import { Dispatch, SetStateAction } from 'react'
import { FormAkademikAlamat } from '@/components/FormComponent/akademik'

export default function AkademikDetailDomisili({
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
    isShow: isShowDomisili,
    isSubmit: isSubmitDomisili,
    setIsShow: setIsShowDomisili,
    setIsSubmit: setIsSubmitDomisili,
    loadingUpdate: loadingUpdateDomisili,
    handleSubmit: handleSubmitDomisili,
    form: formDomisili,
    isEdit: isEditDomisili,
    setIsEdit: setIsEditDomisili,
  } = useAkademikDomisili()

  return (
    <>
      <Form {...formDomisili}>
        <form
          className="scrollbar flex h-full w-full flex-col gap-32 overflow-y-auto p-32"
          onSubmit={formDomisili.handleSubmit(handleSubmitDomisili)}
        >
          <div className="">
            <div className="scrollbar flex h-full flex-col gap-32 overflow-y-auto">
              <div className="flex items-center justify-between gap-32 border-b border-[#9c9c9c] pb-8">
                <p className="font-roboto text-[3.2rem]">
                  {convertSlugToText(lastPathname)}
                </p>
                <ButtonGroup
                  isEdit={isEditDomisili}
                  setIsEdit={setIsEditDomisili}
                  isLoading={loadingUpdateDomisili}
                  isShow={isShowDomisili}
                  isSubmit={isSubmitDomisili}
                  setIsShow={setIsShowDomisili}
                  setIsSubmit={setIsSubmitDomisili}
                  form={formDomisili}
                  handleSubmit={handleSubmitDomisili}
                  menu={menu}
                />
              </div>
              <div className="scrollbar flex h-full flex-1 flex-col gap-32 overflow-y-auto">
                <JadwalKuliahInfo />
                <div className="flex">
                  <UmumTabs menu={menu} setMenu={setMenu} menuList={tabs} />
                </div>
                <FormAkademikAlamat
                  form={formDomisili}
                  isLoading={loadingUpdateDomisili}
                  isEdit={isEditDomisili}
                />
              </div>
            </div>
          </div>
        </form>
      </Form>
      <ToastContainer />
    </>
  )
}
