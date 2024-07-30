import 'react-toastify/dist/ReactToastify.css'
import { useProfil } from '@/data/useProfil'
import { ToastContainer } from 'react-toastify'
import { MainHeader } from '@/layouts/rootLayout/MainHeader'
import { Link } from 'react-router-dom'
import { useResetPassword } from '@/data/useResetPassword'
import { ValidasiKonfirmasi } from '@/components/DialogComponent/ValidasiKonfirmasi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faSave, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { Form } from '@/components/Form'
import { FormUpdatePhoto } from '@/components/FormComponent/akademik/FormUpdatePhoto'

export default function Profil() {
  const {
    formPhoto,
    handleUploadFoto,
    loadingFile,
    dataInstitusi,
    dataIdentitas,
    loadingIdentitas,
    loadingInstitusi,
  } = useProfil()

  const {
    form,
    handleSubmit,
    loadingResetPassword,
    isShow,
    isSubmit,
    setIsShow,
    setIsSubmit,
  } = useResetPassword()

  return (
    <div className="flex h-screen w-full items-center justify-center text-[2rem] phones:text-[2.4rem]">
      <div className="scrollbar flex h-auto max-h-[98vh] w-[80%] flex-col overflow-y-auto rounded-4x shadow-md phones:h-full phones:max-h-full phones:w-full phones:rounded-none phones:border-0">
        <div className="rounded-tl-4x rounded-tr-4x bg-primary-100 p-32 text-white phones:rounded-none">
          <MainHeader
            institusi={dataInstitusi}
            identitas={dataIdentitas}
            loadingIdentitas={loadingIdentitas}
            loadingInstitusi={loadingInstitusi}
          />
        </div>
        <div className="scrollbar flex h-full w-full overflow-y-auto">
          <div className="flex w-full gap-80 bg-white p-32 phones:flex-col phones:gap-32">
            <div className="flex w-1/2 flex-col gap-32 rounded-2x bg-primary-50 p-32 text-primary-900 phones:w-full">
              <div className="flex flex-col gap-12">
                <p className="font-roboto text-[3.2rem]">
                  Email Anda Sudah Diverifikasi
                </p>
                <p>
                  Jika ingin mengubah alamat email, silahkan menghubungi admin
                  Peguruan Tinggi
                </p>
              </div>
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-32">
                  <p className="w-1/3">Email Pribadi*</p>
                  <div className="w-2/3 rounded-2xl border border-slate-300 bg-white p-12 text-slate-500 hover:cursor-not-allowed">
                    {dataIdentitas?.email}
                  </div>
                </div>
                <div className="flex items-center gap-32">
                  <p className="w-1/3"></p>
                  <p className="w-2/3 text-emerald-700">
                    Email Sudah Terverifikasi
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-16">
                <Link
                  to="/ubah-password"
                  className="rounded-2xl bg-success px-24 py-12 text-white hover:bg-opacity-80"
                >
                  Ganti Password
                </Link>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleSubmit)}>
                    <button
                      type="submit"
                      onClick={async () => {
                        const isValid = await form.trigger()
                        console.log({ isValid })

                        if (isValid) {
                          setIsShow(true)
                        }
                      }}
                      className="rounded-2xl bg-danger px-24 py-12 text-white hover:bg-opacity-80"
                    >
                      Reset Password
                    </button>
                  </form>
                </Form>
              </div>
            </div>
            <div className="flex w-1/2 flex-col gap-32 phones:w-full">
              <p className="font-roboto text-[3.2rem]">Form Ganti Photo</p>
              <div className="flex w-1/2">
                <FormUpdatePhoto
                  formPhoto={formPhoto}
                  handleUploadFoto={handleUploadFoto}
                  loadingFile={loadingFile}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ValidasiKonfirmasi
        isOpen={isShow}
        setIsOpen={setIsShow}
        isAuto
        cancelString="Batalkan"
        title="Apakah Anda yakin ingin mereset password Anda?"
        childrenButton={
          <button
            type="submit"
            onClick={() => {
              setIsSubmit(true)
              handleSubmit()
            }}
            disabled={loadingResetPassword}
            className="flex items-center gap-12 rounded-2xl bg-success px-24 py-12 text-white hover:bg-opacity-80 disabled:cursor-not-allowed"
          >
            {loadingResetPassword ? (
              <div className="animate-spin duration-300">
                <FontAwesomeIcon icon={faSpinner} />
              </div>
            ) : isSubmit ? (
              <FontAwesomeIcon icon={faSave} />
            ) : (
              <FontAwesomeIcon icon={faCheck} />
            )}
            {isSubmit ? 'Simpan' : 'Reset Password'}
          </button>
        }
      />

      <ToastContainer />
    </div>
  )
}
