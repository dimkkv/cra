// import Image from 'next/image';
import React from 'react';

function PoolCell({ poolAddress, images }) {
  return (
    <td className='px-4 py-3 text-sm text-gray-160'>
      <div className='flex items-center text-sm'>
        {/* Avatar with inset shadow */}
        <div className='relative hidden w-12 h-8 mr-3 rounded-full md:block'>
          {/* <div className='avatar-group -space-x-6'> */}
          {images.map((img, idx) => (
            <div key={idx} className='avatar'>
              <div className='w-6'>
                <img
                  className='object-cover w-full h-full rounded-full'
                  src={img}
                  alt=''
                  loading='lazy'
                />
              </div>
            </div>
          ))}
          {/* </div> */}

          {/* <div
            className='absolute inset-0 rounded-full shadow-inner'
            aria-hidden='true'
          /> */}
        </div>
        <div>
          <p className='font-normal text-gray-160'>
            {poolAddress.substring(0, 6) +
              '...' +
              poolAddress.substring(poolAddress.length - 4)}
          </p>
        </div>
        {/* Avatar with inset shadow */}
        <div className='relative hidden w-8 h-6 mr-3  md:block'>
          <a
            href={'https://etherscan.io/address/' + poolAddress}
            target={'_blank'}
            rel='noreferrer'>
            <img
              className='object-cover w-7 h-5 pl-2 '
              src={'/assets/img/protocol.svg'}
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

export default PoolCell;
