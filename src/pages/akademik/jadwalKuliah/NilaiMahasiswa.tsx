import { TableMahasiswa } from '@/components/TableComponent/TableNilaiMahasiswa'
import { useAkademikJadwalKuliah } from '@/data/akademik'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'

export default function NilaiMahasiswa() {
  const { dataJadwalNilai, loadingJadwalNilai } = useAkademikJadwalKuliah()
  return (
    <>
      <TableMahasiswa
        response={dataJadwalNilai}
        loading={loadingJadwalNilai}
        pageSize={1000}
        currentPage={1}
      />
      <div className="flex w-full justify-end gap-32">
        <button
          // onClick={() => {
          //   setIsShow(true)
          // }}
          className={clsx(
            'flex items-center gap-12 rounded-2xl px-24 py-12 text-white hover:bg-opacity-80 disabled:cursor-not-allowed',
            // {
            //   'bg-danger': !isNotDraft,
            //   'bg-success': isNotDraft,
            // },
          )}
        >
          <FontAwesomeIcon icon={faFile} />
          <p>
            {/* {isNotDraft
              ? 'Nilai Telah Diajukan'
              : 'Ajukan Nilai Ke Program Studi'} */}
            Ajukan
          </p>
        </button>
      </div>
      {/* <ValidasiAjukan
        isOpen={isShow}
        setIsOpen={setIsShow}
        child={
          <button
            onClick={handleSubmitAjukan}
            className="flex items-center gap-12 rounded-2xl  bg-success px-24 py-12 text-white hover:bg-opacity-80"
          >
            {isLoadingAjukanNilai ? (
              <span className="animate-spin duration-300">
                <FontAwesomeIcon icon={faSpinner} />
              </span>
            ) : (
              <FontAwesomeIcon icon={faFile} />
            )}
            <p>Ya, Saya yakin</p>
          </button>
        }
      /> */}
    </>
  )
}
