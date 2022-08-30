import React from 'react';

function TableThead() {
  return (
    <thead>
      <tr className=' tracking-wide text-left text-gray-150 bg-blue-lightBlue h-16'>
        <th className='px-4 py-3'>
          <div className='flex items-center'>
            <p className='font-medium text-xs'>Protocol</p>
            <div className='pl-2'>
              <svg
                width={8}
                height={10}
                viewBox='0 0 8 10'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M0.539269 4.47371H6.5042C6.94949 4.47371 7.18609 3.93662 6.89009 3.597L3.90788 0.177021C3.8595 0.121367 3.8001 0.07681 3.73358 0.0462945C3.66706 0.0157791 3.59494 0 3.52199 0C3.44905 0 3.37693 0.0157791 3.31041 0.0462945C3.24389 0.07681 3.18448 0.121367 3.13611 0.177021L0.152868 3.597C-0.143131 3.93662 0.0934618 4.47371 0.539269 4.47371ZM3.13559 9.82298C3.18397 9.87863 3.24338 9.92319 3.3099 9.95371C3.37642 9.98422 3.44853 10 3.52148 10C3.59442 10 3.66654 9.98422 3.73306 9.95371C3.79958 9.92319 3.85899 9.87863 3.90736 9.82298L6.88957 6.40301C7.18609 6.0639 6.94949 5.52682 6.50368 5.52682H0.539269C0.0939783 5.52682 -0.142615 6.0639 0.153385 6.40353L3.13559 9.82298Z'
                  fill='#2C2C2C'
                />
              </svg>
            </div>
          </div>
        </th>
        <th className='px-4 py-3'>
          <div className='flex items-center'>
            <p className='font-medium text-xs'>Pool</p>
            <div className='pl-2'>
              <svg
                width={8}
                height={10}
                viewBox='0 0 8 10'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M0.539269 4.47371H6.5042C6.94949 4.47371 7.18609 3.93662 6.89009 3.597L3.90788 0.177021C3.8595 0.121367 3.8001 0.07681 3.73358 0.0462945C3.66706 0.0157791 3.59494 0 3.52199 0C3.44905 0 3.37693 0.0157791 3.31041 0.0462945C3.24389 0.07681 3.18448 0.121367 3.13611 0.177021L0.152868 3.597C-0.143131 3.93662 0.0934618 4.47371 0.539269 4.47371ZM3.13559 9.82298C3.18397 9.87863 3.24338 9.92319 3.3099 9.95371C3.37642 9.98422 3.44853 10 3.52148 10C3.59442 10 3.66654 9.98422 3.73306 9.95371C3.79958 9.92319 3.85899 9.87863 3.90736 9.82298L6.88957 6.40301C7.18609 6.0639 6.94949 5.52682 6.50368 5.52682H0.539269C0.0939783 5.52682 -0.142615 6.0639 0.153385 6.40353L3.13559 9.82298Z'
                  fill='#2C2C2C'
                />
              </svg>
            </div>
          </div>
        </th>
        <th className='px-4 py-3'>
          <div className='flex items-center'>
            <p className='font-medium text-xs'>My Liquidity</p>
            <div className='pl-2'>
              <svg
                width={8}
                height={10}
                viewBox='0 0 8 10'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M0.539269 4.47371H6.5042C6.94949 4.47371 7.18609 3.93662 6.89009 3.597L3.90788 0.177021C3.8595 0.121367 3.8001 0.07681 3.73358 0.0462945C3.66706 0.0157791 3.59494 0 3.52199 0C3.44905 0 3.37693 0.0157791 3.31041 0.0462945C3.24389 0.07681 3.18448 0.121367 3.13611 0.177021L0.152868 3.597C-0.143131 3.93662 0.0934618 4.47371 0.539269 4.47371ZM3.13559 9.82298C3.18397 9.87863 3.24338 9.92319 3.3099 9.95371C3.37642 9.98422 3.44853 10 3.52148 10C3.59442 10 3.66654 9.98422 3.73306 9.95371C3.79958 9.92319 3.85899 9.87863 3.90736 9.82298L6.88957 6.40301C7.18609 6.0639 6.94949 5.52682 6.50368 5.52682H0.539269C0.0939783 5.52682 -0.142615 6.0639 0.153385 6.40353L3.13559 9.82298Z'
                  fill='#2C2C2C'
                />
              </svg>
            </div>
          </div>
        </th>
        <th className='px-4 py-3'>
          <div className='flex items-center'>
            <p className='font-medium text-xs'>Event</p>
            <div className='pl-2'>
              <svg
                width='8'
                height='10'
                viewBox='0 0 8 10'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M0.539269 4.47371H6.5042C6.94949 4.47371 7.18609 3.93662 6.89009 3.597L3.90788 0.177021C3.8595 0.121367 3.8001 0.07681 3.73358 0.0462945C3.66706 0.0157791 3.59494 0 3.52199 0C3.44905 0 3.37693 0.0157791 3.31041 0.0462945C3.24389 0.07681 3.18448 0.121367 3.13611 0.177021L0.152868 3.597C-0.143131 3.93662 0.0934618 4.47371 0.539269 4.47371ZM3.13559 9.82298C3.18397 9.87863 3.24338 9.92319 3.3099 9.95371C3.37642 9.98422 3.44853 10 3.52148 10C3.59442 10 3.66654 9.98422 3.73306 9.95371C3.79958 9.92319 3.85899 9.87863 3.90736 9.82298L6.88957 6.40301C7.18609 6.0639 6.94949 5.52682 6.50368 5.52682H0.539269C0.0939783 5.52682 -0.142615 6.0639 0.153385 6.40353L3.13559 9.82298Z'
                  fill='#2C2C2C'
                />
              </svg>
            </div>
          </div>
        </th>
        <th className='px-4 py-3'>
          <div className='flex items-center'>
            <p className='font-medium text-xs'>Action</p>
            <div className='pl-2'>
              <svg
                width='8'
                height='10'
                viewBox='0 0 8 10'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M0.539269 4.47371H6.5042C6.94949 4.47371 7.18609 3.93662 6.89009 3.597L3.90788 0.177021C3.8595 0.121367 3.8001 0.07681 3.73358 0.0462945C3.66706 0.0157791 3.59494 0 3.52199 0C3.44905 0 3.37693 0.0157791 3.31041 0.0462945C3.24389 0.07681 3.18448 0.121367 3.13611 0.177021L0.152868 3.597C-0.143131 3.93662 0.0934618 4.47371 0.539269 4.47371ZM3.13559 9.82298C3.18397 9.87863 3.24338 9.92319 3.3099 9.95371C3.37642 9.98422 3.44853 10 3.52148 10C3.59442 10 3.66654 9.98422 3.73306 9.95371C3.79958 9.92319 3.85899 9.87863 3.90736 9.82298L6.88957 6.40301C7.18609 6.0639 6.94949 5.52682 6.50368 5.52682H0.539269C0.0939783 5.52682 -0.142615 6.0639 0.153385 6.40353L3.13559 9.82298Z'
                  fill='#2C2C2C'
                />
              </svg>
            </div>
          </div>
        </th>
        <th className='px-4 py-3'>
          <div className='flex items-center'>
            <p className='font-medium text-xs'>Deploy</p>
          </div>
        </th>
      </tr>
    </thead>
  );
}

export default TableThead;
