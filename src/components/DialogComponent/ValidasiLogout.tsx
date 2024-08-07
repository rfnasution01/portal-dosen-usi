import { Dispatch, ReactNode, SetStateAction } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '.'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

/* eslint-disable @typescript-eslint/no-explicit-any */
export function ValidasiLogout({
  isOpen,
  setIsOpen,
  child,
}: {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  child: ReactNode
}) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        className="text-dark scrollbar flex flex-col overflow-y-auto bg-white text-black"
        position="middle"
      >
        <div className="flex flex-col gap-32 p-32">
          {/* --- Header --- */}
          <DialogHeader>
            <DialogTitle>
              <p className="text-center text-[2.4rem] font-bold phones:text-[2.8rem]">
                Apakah anda ingin logout?
              </p>
            </DialogTitle>
            <DialogPrimitive.Close className="focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-32 top-32 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none">
              <FontAwesomeIcon icon={faX} />
              <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
          </DialogHeader>
          <p className="text-sim-grey text-center text-[2.4rem]">
            Anda harus memasukkan email dan password lagi untuk masuk.
          </p>
          <div className="flex items-center justify-center gap-32 text-[2rem]">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="bg-danger flex w-[10rem] items-center justify-center gap-12 rounded-2xl border px-24 py-12 text-white hover:bg-opacity-80 disabled:cursor-not-allowed"
            >
              Tidak
            </button>
            {child}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
