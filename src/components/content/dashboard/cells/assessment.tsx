import React from 'react';

function AssessmentCell() {
  return (
    <td className='px-4 py-3 text-sm '>
      <div className='flex items-center text-sm'>
        <div>
          <p className='font-normal underline underline-offset-2 text-blue-80 cursor-pointer '>
            Click To View
          </p>
        </div>
        {/* Avatar with inset shadow */}
        <div className='relative hidden w-8 h-6 mr-3  md:block'>
          <img
            className='object-cover w-7 h-5 pl-2 '
            src='/assets/img/protocol.svg'
            alt=''
            loading='lazy'
          />
          <div className='absolute inset-0' aria-hidden='true' />
        </div>
      </div>
    </td>
  );
}

export default AssessmentCell;
