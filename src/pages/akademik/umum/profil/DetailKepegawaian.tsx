import { convertSlugToText } from '@/utils/formatText'
import { JadwalKuliahInfo } from '@/components/JadwalKuliahInfo'
import { Form } from '@/components/Form'
import { FormAkademikKepegawaian } from '@/components/FormComponent/akademik'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ButtonGroup, UmumTabs } from '@/features/akademik/umum'
import { useAkademikKepegawaian } from '@/data/akademik/profil'
import { usePathname } from '@/utils/usePathname'
import { Dispatch, SetStateAction } from 'react'

export default function AkademikDetailKepegawaian({
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
    isShow: isShowKepegawaian,
    isSubmit: isSubmitKepegawaian,
    setIsShow: setIsShowKepegawaian,
    setIsSubmit: setIsSubmitKepegawaian,
    loadingUpdate: loadingUpdateKepegawaian,
    handleSubmit: handleSubmitKepegawaian,
    form: formKepegawaian,
    isEdit: isEditKepegawaian,
    setIsEdit: setIsEditKepegawaian,
  } = useAkademikKepegawaian()

  return (
    <>
      <Form {...formKepegawaian}>
        <form
          className="scrollbar flex h-full w-full flex-col gap-32 overflow-y-auto p-32"
          onSubmit={formKepegawaian.handleSubmit(handleSubmitKepegawaian)}
        >
          <div className="">
            <div className="scrollbar flex h-full flex-col gap-32 overflow-y-auto">
              <div className="flex items-center justify-between gap-32 border-b border-[#9c9c9c] pb-8">
                <p className="font-roboto text-[3.2rem]">
                  {convertSlugToText(lastPathname)}
                </p>
                <ButtonGroup
                  isEdit={isEditKepegawaian}
                  setIsEdit={setIsEditKepegawaian}
                  isLoading={loadingUpdateKepegawaian}
                  isShow={isShowKepegawaian}
                  isSubmit={isSubmitKepegawaian}
                  setIsShow={setIsShowKepegawaian}
                  setIsSubmit={setIsSubmitKepegawaian}
                  form={formKepegawaian}
                  handleSubmit={handleSubmitKepegawaian}
                  menu={menu}
                />
              </div>
              <div className="scrollbar flex h-full flex-1 flex-col gap-32 overflow-y-auto">
                <JadwalKuliahInfo />
                <div className="flex">
                  <UmumTabs menu={menu} setMenu={setMenu} menuList={tabs} />
                </div>
                <FormAkademikKepegawaian
                  form={formKepegawaian}
                  isLoading={loadingUpdateKepegawaian}
                  isEdit={isEditKepegawaian}
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
