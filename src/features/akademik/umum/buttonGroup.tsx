/* eslint-disable @typescript-eslint/no-explicit-any */
import { ValidasiKonfirmasi } from '@/components/DialogComponent/ValidasiKonfirmasi'
import {
  faCheck,
  faPencil,
  faSave,
  faSpinner,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Dispatch, SetStateAction } from 'react'
import { UseFormReturn } from 'react-hook-form'
import {
  AkademikPreviewDanLainLain,
  AkademikPreviewDokumen,
  AkademikPreviewDomisili,
  AkademikPreviewDosen,
  AkademikPreviewKepegawaian,
  AkademikPreviewKependudukan,
  AkademikPreviewRekening,
} from '../preview'

export function ButtonGroup({
  isEdit,
  setIsEdit,
  setIsShow,
  form,
  isShow,
  setIsSubmit,
  isLoading,
  isSubmit,
  handleSubmit,
  menu,
}: {
  isEdit: boolean
  setIsEdit: Dispatch<SetStateAction<boolean>>
  setIsShow: Dispatch<SetStateAction<boolean>>
  setIsSubmit: Dispatch<SetStateAction<boolean>>
  form: UseFormReturn
  isShow: boolean
  isLoading: boolean
  isSubmit: boolean
  handleSubmit: () => Promise<void>
  menu: string
}) {
  return (
    <div className="flex items-center gap-16">
      <button
        type="submit"
        onClick={async () => {
          setIsEdit(true)
          const isValid = await form.trigger()

          if (isValid && isEdit) {
            setIsShow(true)
          }
        }}
        className="flex items-center gap-12 rounded-2xl bg-success px-24 py-12 text-white"
      >
        {isEdit ? (
          <FontAwesomeIcon icon={faSave} />
        ) : (
          <FontAwesomeIcon icon={faPencil} />
        )}
        {isEdit ? 'Simpan' : 'Edit'}
      </button>

      {isEdit && (
        <button
          onClick={() => {
            setIsEdit(false)
          }}
          className="flex items-center gap-12 rounded-2xl bg-warning px-24 py-12 text-white"
        >
          <FontAwesomeIcon icon={faXmark} />
          Batal
        </button>
      )}
      {/* <button className="flex items-center gap-12 rounded-2xl bg-danger px-24 py-12 text-white">
        <FontAwesomeIcon icon={faTrash} />
        Hapus
      </button> */}
      <ValidasiKonfirmasi
        isOpen={isShow}
        setIsOpen={setIsShow}
        children={
          <div className="flex w-full flex-col gap-32 rounded-2x bg-primary-50 p-32 text-[2rem] text-primary-100 phones:text-[2.4rem]">
            {menu === 'Kepegawaian' ? (
              <AkademikPreviewKepegawaian
                nama={form.watch('nama')}
                gelar_belakang={form.watch('gelar_belakang')}
                gelar_depan={form.watch('gelar_depan')}
                jenis_kelamin={form.watch('jenis_kelamin')}
                jabatan_akademik={form.watch('jabatan_akademik')}
                agama={form.watch('agama')}
                tempat_lahir={form.watch('tempat_lahir')}
                tanggal_lahir={form.watch('tanggal_lahir')}
                status_nikah={form.watch('status_nikah')}
                unit_kerja={form.watch('unit_kerja')}
                email={form.watch('email_perguruan_tinggi')}
                no_akun={form.watch('no_akun_finger')}
              />
            ) : menu === 'Dosen' ? (
              <AkademikPreviewDosen
                id_sinta={form.watch('id_sinta')}
                id_scopus={form.watch('id_scopus')}
                id_orcid={form.watch('id_orcid')}
                nidn={form.watch('nidn')}
                nidk={form.watch('nidk')}
                nupn={form.watch('nupn')}
                id_rumpun_ilmu={form.watch('id_rumpun_ilmu')}
                serdos_status={form.watch('serdos_status')}
                serdos_tanggal={form.watch('serdos_tanggal')}
                serdos_nomor={form.watch('serdos_nomor')}
              />
            ) : menu === 'Alamat Domisili & Kontak' ? (
              <AkademikPreviewDomisili
                id_provinsi={form.watch('provinsi')}
                id_kecamatan={form.watch('kecamatan')}
                id_kabupaten={form.watch('kabupaten')}
                alamat_lengkap={form.watch('alamat_lengkap')}
                jarak_rumah_kantor={form.watch('jarak_rumah_kantor')}
                kode_pos={form.watch('kode_pos')}
                handphone={form.watch('nomor_telepon')}
                no_telp_kantor={form.watch('nomor_telepon_kantor')}
              />
            ) : menu === 'Rekening Bank' ? (
              <AkademikPreviewRekening
                id_bank={form.watch('bank')}
                nomor_rekening={form.watch('nomor_rekening')}
                nama_rekening={form.watch('nama_rekening')}
                cabang_bank={form.watch('cabang_bank')}
                file={form.watch('file')}
              />
            ) : menu === 'Dokumen' ? (
              <AkademikPreviewDokumen
                nomor_karpeg={form.watch('nomor_karpeg')}
                npwp={form.watch('npwp')}
                nomor_bpjs={form.watch('nomor_bpjs')}
                nomor_bpjs_ketenagakerjaan={form.watch(
                  'nomor_bpjs_ketenagakerjaan',
                )}
              />
            ) : menu === 'Lain-lain' ? (
              <AkademikPreviewDanLainLain
                tinggi_badan={form.watch('tinggi_badan')}
                berat_badan={form.watch('berat_badan')}
                golongan_darah={form.watch('golongan_darah')}
                hobby={form.watch('hobby')}
              />
            ) : menu === 'Kependudukan' ? (
              <AkademikPreviewKependudukan
                nomor_ktp={form.watch('nomor_ktp')}
                nomor_kk={form.watch('nomor_kk')}
                alamat_lengkap={form.watch('alamat')}
                kode_pos={form.watch('kode_pos')}
                provinsi={form.watch('provinsi')}
                kabupaten={form.watch('kabupaten')}
                kecamatan={form.watch('kecamatan')}
              />
            ) : (
              ''
            )}
          </div>
        }
        childrenButton={
          <button
            type="submit"
            onClick={() => {
              setIsSubmit(true)
              handleSubmit()
            }}
            disabled={isLoading}
            className="flex items-center gap-12 rounded-2xl bg-success px-24 py-12 text-white hover:bg-opacity-80 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="animate-spin duration-300">
                <FontAwesomeIcon icon={faSpinner} />
              </div>
            ) : isSubmit ? (
              <FontAwesomeIcon icon={faSave} />
            ) : (
              <FontAwesomeIcon icon={faCheck} />
            )}
            {isSubmit ? 'Simpan' : 'Sudah Benar'}
          </button>
        }
      />
    </div>
  )
}
