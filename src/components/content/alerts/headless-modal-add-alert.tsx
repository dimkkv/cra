import { Dialog, Transition } from '@headlessui/react';
import { useAlertEditModal } from 'lib/hooks/useAlertEditModal';
import { useAlerts } from 'lib/hooks/useAlerts';
import { useDefiBalance } from 'lib/hooks/useDefiBalance';
import { Alert, ImmunaEvent, ImmunaSeverity } from 'lib/types';
import { Fragment, useEffect, useState } from 'react';

export default function HeadlessAddAlert() {
  let { isOpen, setIsOpen } = useAlertEditModal();
  const [newAlert, setNewAlert] = useState<Alert | null>(null);
  const { balance } = useDefiBalance();
  const pools = balance.map((b) => {
    return { label: `${b.name} (${b.symbol})`, value: b.token };
  });
  const { addAlert, updateAlert, getAlert, newId } = useAlerts();

  const alert = getAlert(isOpen.id || -1);
  useEffect(() => {
    // console.log('alert', alert);
    // console.log('id', isOpen.id);
    if (alert) {
      setNewAlert(alert);
      console.log('saved to newAlert isOpen.id');
    }
  }, [isOpen.id, alert, setNewAlert]);

  function closeModal() {
    setNewAlert(null);
    setIsOpen({ id: -1, open: false });
  }

  function openModal() {
    setIsOpen({ ...isOpen, open: true });
  }

  return (
    <>
      <button
        onClick={openModal}
        className=' text-xs text-white font-semibold border bg-blue-500 h-10 rounded-full w-56'
        data-modal-toggle='alerts-modal'>
        + Add more Alerts
      </button>

      <Transition appear show={isOpen.open} as={Fragment}>
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
            <div className='flex min-h-full   items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'>
                <Dialog.Panel className='transform overflow-hidden w-1/2 rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900'>
                    Add alerts
                  </Dialog.Title>
                  <div className='p-5 pl-9 pr-9'>
                    {/* Protocol dropdown */}
                    {/* <div>
                      <div className='flex justify-between'>
                        <h3 className=' mt-2 px-5 text-lg font-normal leading-5 text-gray-09'>
                          Protocol
                        </h3>
                      </div>
                      <div className='px-5'>
                        <select
                          defaultValue={'aave'}
                          id='protocol'
                          className='flex justify-between mt-2 pl-5 border w-full bg-white  text-gray-005 text-sm leading-4 font-normal rounded-full px-4 py-2.5 h-14 text-center inline-flex items-center'>
                          <option value={'aave'}>Aave</option>
                          <option value='curve'>Curve</option>
                          <option value='compound'>Compound</option>
                        </select>
                      </div>
                    </div> */}
                    {/* My Liquidity Dropdown */}
                    <div>
                      <div className='flex justify-between'>
                        <h3 className=' mt-5 px-5 text-lg font-normal leading-5 text-gray-09'>
                          Pools
                        </h3>
                        {/* <h3 className=' mt-5 mr-6 text-red-02 text-xs font-normal text-right'>
                          Set protocol first*
                        </h3> */}
                      </div>
                      <div className='px-5'>
                        <select
                          defaultValue={
                            pools && pools.length > 0 ? pools[0].value : ''
                          }
                          value={newAlert?.token}
                          id='pools'
                          onChange={(e) => {
                            console.log(e.target.value);
                            setNewAlert({
                              ...balance.find(
                                (x) => x.token === e.target.value
                              ),
                              id: newId(),
                              severity: ImmunaSeverity.HIGH,
                              event: ImmunaEvent.tvl,
                            } as any);
                          }}
                          className='flex justify-between mt-2 pl-5 border w-full bg-white  text-gray-005 text-sm leading-4 font-normal rounded-full px-4 py-2.5 h-14 text-center inline-flex items-center'>
                          {pools.map((p, idx) => (
                            <option key={idx} value={p.value}>
                              {p.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    {/* Event Type */}
                    <div>
                      <div className='flex justify-between'>
                        <h3 className=' mt-5 px-5 text-lg font-normal leading-5 text-gray-09'>
                          Event Type
                        </h3>
                        <h3 className=' mt-5 mr-6 text-red-02 text-xs font-normal text-right'>
                          Set pool first*
                        </h3>
                      </div>
                      <div className='px-5'>
                        <select
                          disabled={!newAlert}
                          id='events'
                          value={newAlert?.event}
                          onChange={(e) => {
                            setNewAlert({
                              ...newAlert!,
                              event: e.target.value as any,
                            });
                          }}
                          className='flex justify-between mt-2 pl-5 border w-full bg-white  text-gray-005 text-sm leading-4 font-normal rounded-full px-4 py-2.5 h-14 text-center inline-flex items-center'>
                          {Object.entries(ImmunaEvent).map(
                            ([key, value], idx) => {
                              return (
                                <option key={idx} value={value}>
                                  {value}
                                </option>
                              );
                            }
                          )}
                        </select>
                      </div>
                    </div>
                    {/* liquidity change Value */}
                    {/* <div>
                      <div className='flex justify-between'>
                        <h3 className=' mt-5 px-5 text-lg font-normal leading-5 text-gray-09'>
                          Liquidity Change Value
                        </h3>
                      </div>
                      <div className='px-5'>
                        <div className='pt-2 '>
                          <input
                            type='range'
                            min={0}
                            max={5}
                            id='myinput'
                            className=' w-full leading-6 border accent-gray-160 border-gray-20 bg-white '
                          />
                        </div>
                      </div>
                    </div> */}
                    {/* Severity */}
                    <div>
                      <div className='flex justify-between'>
                        <h3 className=' mt-4 px-5 text-lg font-normal leading-5 text-gray-09'>
                          Severity
                        </h3>
                      </div>
                      <div className='px-5'>
                        <select
                          id='pools'
                          value={newAlert?.severity}
                          onChange={(e) => {
                            setNewAlert({
                              ...newAlert!,
                              severity: e.target.value as any,
                            });
                          }}
                          className='flex justify-between mt-2 pl-5 border w-full bg-white  text-gray-005 text-sm leading-4 font-normal rounded-full px-4 py-2.5 h-14 text-center inline-flex items-center'>
                          <option value={'HIGH'}>High</option>
                          <option value='LOW'>Low</option>
                          <option value='MODERATE'>Moderate</option>
                        </select>
                      </div>
                    </div>
                    {/* Modal footer */}
                    <div className='p-4 px-5 '>
                      <button
                        disabled={!newAlert}
                        onClick={() => {
                          if (!alert) addAlert(newAlert!);
                          else updateAlert(newAlert!);
                          closeModal();
                        }}
                        type='button'
                        className='text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-full w-full h-14'>
                        {!!alert ? 'Save alert' : 'Add to alerts'}
                      </button>
                    </div>
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
