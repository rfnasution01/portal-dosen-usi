import { ComingSoonPage } from '@/routes/loadables'
import {
  FormAkademikAlamat,
  FormAkademikDanLain,
  FormAkademikDokumen,
  FormAkademikDosen,
  FormAkademikKepegawaian,
  FormAkademikKependudukan,
  FormAkademikRekeningBank,
} from '@/components/FormComponent/akademik'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  useAkademikDosen,
  useAkademikKepegawaian,
  useAkademikRekening,
} from '@/data/akademik/umum'

export function AkademikProfilPage({ menu }: { menu: string }) {
  const { loadingUpdateKepegawaian, handleSubmitKepegawaian, formKepegawaian } =
    useAkademikKepegawaian()
  const { loadingUpdateDosen, handleSubmitDosen, formDosen } =
    useAkademikDosen()
  const { loadingUpdateRekening, handleSubmitRekening, formRekening } =
    useAkademikRekening()

  const konten = () => {
    switch (menu) {
      case 'Kepegawaian':
        return (
          <FormAkademikKepegawaian
            form={formKepegawaian}
            isLoading={loadingUpdateKepegawaian}
            handleSubmit={handleSubmitKepegawaian}
          />
        )
      case 'Dosen':
        return (
          <FormAkademikDosen
            form={formDosen}
            handleSubmit={handleSubmitDosen}
            isLoading={loadingUpdateDosen}
          />
        )
      case 'Alamat Domisili & Kontak':
        return <FormAkademikAlamat />
      case 'Kependudukan':
        return <FormAkademikKependudukan />
      case 'Rekening Bank':
        return (
          <FormAkademikRekeningBank
            form={formRekening}
            isLoading={loadingUpdateRekening}
            handleSubmit={handleSubmitRekening}
          />
        )
      case 'Dokumen':
        return <FormAkademikDokumen />
      case 'Lain-lain':
        return <FormAkademikDanLain />

      default:
        return <ComingSoonPage />
    }
  }
  return (
    <div className="scrollbar flex h-full w-full overflow-y-auto">
      {konten()}
      <ToastContainer />
    </div>
  )
}
