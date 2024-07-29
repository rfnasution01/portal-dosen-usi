import { convertSlugToText } from '@/utils/formatText'
import { JadwalKuliahInfo } from '@/components/JadwalKuliahInfo'
import { Form } from '@/components/Form'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ButtonGroup, UmumTabs } from '@/features/akademik/umum'
import { useAkademikKependudukan } from '@/data/akademik/profil'
import { usePathname } from '@/utils/usePathname'
import { Dispatch, SetStateAction } from 'react'
import { FormAkademikKependudukan } from '@/components/FormComponent/akademik'

export default function AkademikDetailKependudukan({
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
    isShow: isShowKependudukan,
    isSubmit: isSubmitKependudukan,
    setIsShow: setIsShowKependudukan,
    setIsSubmit: setIsSubmitKependudukan,
    loadingUpdate: loadingUpdateKependudukan,
    handleSubmit: handleSubmitKependudukan,
    form: formKependudukan,
    isEdit: isEditKependudukan,
    setIsEdit: setIsEditKependudukan,
  } = useAkademikKependudukan()

  return (
    <>
      <Form {...formKependudukan}>
        <form
          className="scrollbar flex h-full w-full flex-col gap-32 overflow-y-auto"
          onSubmit={formKependudukan.handleSubmit(handleSubmitKependudukan)}
        >
          <div className="scrollbar flex h-full flex-col gap-32 overflow-y-auto">
            <div className="flex items-center justify-between gap-32 border-b border-[#9c9c9c] pb-8">
              <p className="font-roboto text-[3.2rem]">
                {convertSlugToText(lastPathname)}
              </p>
              <ButtonGroup
                isEdit={isEditKependudukan}
                setIsEdit={setIsEditKependudukan}
                isLoading={loadingUpdateKependudukan}
                isShow={isShowKependudukan}
                isSubmit={isSubmitKependudukan}
                setIsShow={setIsShowKependudukan}
                setIsSubmit={setIsSubmitKependudukan}
                form={formKependudukan}
                handleSubmit={handleSubmitKependudukan}
                menu={menu}
              />
            </div>
            <div className="scrollbar flex h-full flex-1 flex-col gap-32 overflow-y-auto">
              <JadwalKuliahInfo />
              <div className="flex">
                <UmumTabs menu={menu} setMenu={setMenu} menuList={tabs} />
              </div>
              <FormAkademikKependudukan
                form={formKependudukan}
                isLoading={loadingUpdateKependudukan}
                isEdit={isEditKependudukan}
              />
            </div>
          </div>
        </form>
      </Form>
      <ToastContainer />
    </>
  )
}
