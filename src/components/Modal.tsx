import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
interface IProps {
  modalShow: boolean
  setModalShow: (val: boolean) => void
  title: string
  children?: React.ReactNode
  footer?: React.ReactNode
}
export default function MyModal(props: IProps) {
  const { modalShow, setModalShow, title, children, footer } = props

  return (
    <>
      <Transition appear show={modalShow} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setModalShow(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="max-w-md  shadow-xl w-[500px] transform overflow-hidden rounded-30 bg-b1 p-25 text-left align-middle text-t1 transition-all">
                  <Dialog.Title
                    as="h3"
                    className="font-medium leading-6 text-gray-900 text-24 font-8"
                  >
                    {title}
                  </Dialog.Title>
                  <div className="mt-25">
                    <div>{children}</div>
                  </div>

                  <div className="mt-25">{footer}</div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
