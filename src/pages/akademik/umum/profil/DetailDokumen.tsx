import { convertSlugToText } from '@/utils/formatText'
import { JadwalKuliahInfo } from '@/components/JadwalKuliahInfo'
import { Form } from '@/components/Form'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ButtonGroup, UmumTabs } from '@/features/akademik/umum'
import { useAkademikDokumen } from '@/data/akademik/profil'
import { usePathname } from '@/utils/usePathname'
import { Dispatch, SetStateAction } from 'react'
import { FormAkademikDokumen } from '@/components/FormComponent/akademik'

export default function AkademikDetailDokumen({
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
    isShow: isShowDokumen,
    isSubmit: isSubmitDokumen,
    setIsShow: setIsShowDokumen,
    setIsSubmit: setIsSubmitDokumen,
    loadingUpdate: loadingUpdateDokumen,
    handleSubmit: handleSubmitDokumen,
    form: formDokumen,
    isEdit: isEditDokumen,
    setIsEdit: setIsEditDokumen,
    fileUrlBPJS,
    fileUrlBPJSKetenagakerjaan,
    fileUrlBPJSPensiun,
    fileUrlKarpeg,
    fileUrlNPWP,
    setFileBPJS,
    setFileBPJSKetenagakerjaan,
    setFileBPJSPensiun,
    setFileKarpeg,
    setFileNPWP,
    setFileUrlBPJS,
    setFileUrlBPJSKetenagakerjaan,
    setFileUrlBPJSPensiun,
    setFileUrlKarpeg,
    setFileUrlNPWP,
  } = useAkademikDokumen()

  return (
    <>
      <Form {...formDokumen}>
        <form
          className="scrollbar flex h-full w-full flex-col gap-32 overflow-y-auto"
          onSubmit={formDokumen.handleSubmit(handleSubmitDokumen)}
        >
          <div className="scrollbar flex h-full flex-col gap-32 overflow-y-auto">
            <div className="flex items-center justify-between gap-32 border-b border-[#9c9c9c] pb-8">
              <p className="font-roboto text-[3.2rem]">
                {convertSlugToText(lastPathname)}
              </p>
              <ButtonGroup
                isEdit={isEditDokumen}
                setIsEdit={setIsEditDokumen}
                isLoading={loadingUpdateDokumen}
                isShow={isShowDokumen}
                isSubmit={isSubmitDokumen}
                setIsShow={setIsShowDokumen}
                setIsSubmit={setIsSubmitDokumen}
                form={formDokumen}
                handleSubmit={handleSubmitDokumen}
                menu={menu}
              />
            </div>
            <div className="scrollbar flex h-full flex-1 flex-col gap-32 overflow-y-auto">
              <JadwalKuliahInfo />
              <div className="flex">
                <UmumTabs menu={menu} setMenu={setMenu} menuList={tabs} />
              </div>
              <FormAkademikDokumen
                form={formDokumen}
                isLoading={loadingUpdateDokumen}
                isEdit={isEditDokumen}
                setFileBPJS={setFileBPJS}
                setFileBPJSKetenagakerjaan={setFileBPJSKetenagakerjaan}
                setFileBPJSPensiun={setFileBPJSPensiun}
                setFileKarpeg={setFileKarpeg}
                setFileNPWP={setFileNPWP}
                fileUrlBPJS={fileUrlBPJS}
                fileUrlBPJSKetenagakerjaan={fileUrlBPJSKetenagakerjaan}
                fileUrlBPJSPensiun={fileUrlBPJSPensiun}
                fileUrlKarpeg={fileUrlKarpeg}
                fileUrlNPWP={fileUrlNPWP}
                setFileUrlBPJS={setFileUrlBPJS}
                setFileUrlBPJSKetenagakerjaan={setFileUrlBPJSKetenagakerjaan}
                setFileUrlBPJSPensiun={setFileUrlBPJSPensiun}
                setFileUrlKarpeg={setFileUrlKarpeg}
                setFileUrlNPWP={setFileUrlNPWP}
              />
            </div>
          </div>
        </form>
      </Form>
      <ToastContainer />
    </>
  )
}
