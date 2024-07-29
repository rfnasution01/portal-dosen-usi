import { convertSlugToText } from '@/utils/formatText'
import { JadwalKuliahInfo } from '@/components/JadwalKuliahInfo'
import { Form } from '@/components/Form'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ButtonGroup, UmumTabs } from '@/features/akademik/umum'
import { useAkademikDataLain } from '@/data/akademik/profil'
import { usePathname } from '@/utils/usePathname'
import { Dispatch, SetStateAction } from 'react'
import { FormAkademikDanLain } from '@/components/FormComponent/akademik'

export default function AkademikDetailDataLain({
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
    isShow: isShowDataLain,
    isSubmit: isSubmitDataLain,
    setIsShow: setIsShowDataLain,
    setIsSubmit: setIsSubmitDataLain,
    loadingUpdate: loadingUpdateDataLain,
    handleSubmit: handleSubmitDataLain,
    form: formDataLain,
    isEdit: isEditDataLain,
    setIsEdit: setIsEditDataLain,
  } = useAkademikDataLain()

  return (
    <>
      <Form {...formDataLain}>
        <form
          className="scrollbar flex h-full w-full flex-col gap-32 overflow-y-auto"
          onSubmit={formDataLain.handleSubmit(handleSubmitDataLain)}
        >
          <div className="scrollbar flex h-full flex-col gap-32 overflow-y-auto">
            <div className="flex items-center justify-between gap-32 border-b border-[#9c9c9c] pb-8">
              <p className="font-roboto text-[3.2rem]">
                {convertSlugToText(lastPathname)}
              </p>
              <ButtonGroup
                isEdit={isEditDataLain}
                setIsEdit={setIsEditDataLain}
                isLoading={loadingUpdateDataLain}
                isShow={isShowDataLain}
                isSubmit={isSubmitDataLain}
                setIsShow={setIsShowDataLain}
                setIsSubmit={setIsSubmitDataLain}
                form={formDataLain}
                handleSubmit={handleSubmitDataLain}
                menu={menu}
              />
            </div>
            <div className="scrollbar flex h-full flex-1 flex-col gap-32 overflow-y-auto">
              <JadwalKuliahInfo />
              <div className="flex">
                <UmumTabs menu={menu} setMenu={setMenu} menuList={tabs} />
              </div>
              <FormAkademikDanLain
                form={formDataLain}
                isLoading={loadingUpdateDataLain}
                isEdit={isEditDataLain}
              />
            </div>
          </div>
        </form>
      </Form>
      <ToastContainer />
    </>
  )
}
