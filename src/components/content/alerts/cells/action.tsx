import { useAlertEditModal } from 'lib/hooks/useAlertEditModal';
import { useAlerts } from 'lib/hooks/useAlerts';
import React from 'react';

function Action({ id }) {
  const { setIsOpen } = useAlertEditModal();
  const { removeAlert } = useAlerts();
  //console.log({ id });
  return (
    <>
      <td>
        <div className='flex'>
          {/* Avatar with inset shadow */}
          <div
            className='relative   mr-3  '
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setIsOpen({ id: id, open: true });
            }}>
            <img
              className='object-cover pl-2 '
              src='/assets/img/edit.svg'
              alt=''
              loading='lazy'
            />
            <div className='absolute inset-0  ' aria-hidden='true' />
          </div>
          {/* Avatar with inset shadow */}
          <div
            className='relative   mr-3 '
            style={{ cursor: 'pointer' }}
            onClick={() => {
              removeAlert(id);
            }}>
            <img
              className='object-cover  pl-2 '
              src='/assets/img/delete.svg'
              alt=''
              loading='lazy'
            />
            <div className='absolute inset-0 ' aria-hidden='true' />
          </div>
        </div>
      </td>
    </>
  );
}

export default Action;
