import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        className='block w-64 md:w-autohover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm border h-10 border-gray-10 rounded-full '
        type='button'
        onClick={openModal}>
        Click to Subscribe!
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'>
                <Dialog.Panel className='transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900'>
                    Subscribe
                  </Dialog.Title>
                  <div>
                    <div className='p-6 flex items-center flex-col md:flex-row'>
                      <div className='p-4'>
                        <button className='border w-40 h-28 rounded-lg bg-gray-07'>
                          <p className=' flex justify-center pt-5'>
                            <img src='/assets/img/email-icon.svg' alt='' />
                          </p>
                          <p className='pt-5 mb-5 text-gray-06'>Email</p>
                        </button>
                      </div>
                      <div className='p-4'>
                        <button className='border w-40 h-28 rounded-lg bg-gray-07'>
                          <p className=' flex justify-center pt-5'>
                            <img src='/assets/img/slack-icon.svg' alt='' />
                          </p>
                          <p className='pt-5 mb-5 text-gray-06'>Slack</p>
                        </button>
                      </div>
                      <div className='p-4'>
                        <button className='border w-40 h-28 rounded-lg bg-gray-07'>
                          <p className=' flex justify-center pt-5'>
                            <img src='/assets/img/discord-icon.svg' alt='' />
                          </p>
                          <p className='pt-5 mb-5 text-gray-06'>Discord</p>
                        </button>
                      </div>
                      <div className='p-4'>
                        <button className='border w-40 h-28 rounded-lg bg-gray-07'>
                          <p className=' flex justify-center pt-5'>
                            <img src='/assets/img/telegram-icon.svg' alt='' />
                          </p>
                          <p className='pt-5 mb-5 text-gray-06'>Telegram</p>
                        </button>
                      </div>
                      <div className='p-4'>
                        <button className='border w-40 h-28 rounded-lg bg-gray-07'>
                          <p className=' flex justify-center pt-5'>
                            <img src='/assets/img/webhook-icon.svg' alt='' />
                          </p>
                          <p className='pt-5 mb-5 text-gray-06'>Webhook</p>
                        </button>
                      </div>
                    </div>
                    <div className=' pl-8'>
                      <input
                        className=' border text-gray-02 rounded-lg px-8 h-14 w-11/12 bg-gray-07'
                        placeholder='Enter email address'
                      />
                    </div>
                  </div>

                  <div className='flex items-center p-6 space-x-2 rounded-b'>
                    <button
                      data-modal-toggle='small-modal'
                      type='button'
                      onClick={closeModal}
                      className='text-white bg-blue-500 font-medium rounded-full text-sm px-5 py-2.5 text-center h-10 w-56'>
                      Subscribe
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
