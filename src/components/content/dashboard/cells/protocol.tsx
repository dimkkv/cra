import React from 'react';

function ProtocolCell({ title, link }) {
  return (
    <td className='px-4 py-3'>
      <div className='flex items-center text-sm'>
        <div>
          <p className='font-normal text-gray-160'>{title}</p>
        </div>
        {/* Avatar with inset shadow */}
        <div className='relative hidden w-full h-5 mr-3  md:block'>
          <a href={'https://' + link} target={'_blank'} rel='noreferrer'>
            <img
              className='object-cover w-7 h-5 pl-2 '
              src='/assets/img/protocol.svg'
              alt=''
              loading='lazy'
            />
          </a>
          {/* <div className='absolute inset-0' aria-hidden='true' /> */}
        </div>
      </div>
    </td>
  );
}

export default ProtocolCell;
