import React from 'react';

function TableFooter() {
  return (
    <div className='mt-64 grid px-4 py-3 text-xs font-normal tracking-wide text-gray-210 dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800 relative bottom-0 '>
      <span className='flex items-center col-span-3'>
        Showing
        <span className='flex items-center gap-2 bg-white border px-3 py-2 border-gray-250 rounded-lg mx-2'>
          12
          <svg
            width={9}
            height={6}
            viewBox='0 0 9 6'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M0.234229 0.451262C0.384252 0.301285 0.587698 0.217033 0.799829 0.217033C1.01196 0.217033 1.21541 0.301285 1.36543 0.451262L3.99983 3.08566L6.63423 0.451262C6.70803 0.374854 6.7963 0.313908 6.89391 0.271981C6.99151 0.230054 7.09649 0.207985 7.20271 0.207061C7.30893 0.206138 7.41428 0.22638 7.51259 0.266604C7.61091 0.306829 7.70023 0.366232 7.77535 0.441346C7.85046 0.51646 7.90986 0.605781 7.95009 0.704099C7.99031 0.802416 8.01055 0.907759 8.00963 1.01398C8.00871 1.12021 7.98664 1.22518 7.94471 1.32279C7.90278 1.42039 7.84184 1.50866 7.76543 1.58246L4.56543 4.78246C4.41541 4.93244 4.21196 5.01669 3.99983 5.01669C3.7877 5.01669 3.58425 4.93244 3.43423 4.78246L0.234229 1.58246C0.0842524 1.43244 0 1.22899 0 1.01686C0 0.80473 0.0842524 0.601284 0.234229 0.451262Z'
              fill='#333333'
            />
          </svg>
        </span>
        results of 50 entries
      </span>
      <span className='col-span-2' />
      {/* Pagination */}
      <span className='flex col-span-4 mt-2 sm:mt-auto sm:justify-end'>
        <nav aria-label='Table navigation'>
          <ul className='inline-flex items-center bg-white rounded-md h-16 px-3'>
            <li>
              <button
                className='flex items-center justify-center bg-gray-230 w-12 h-10 px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple'
                aria-label='Previous'>
                <svg
                  width={7}
                  height={11}
                  viewBox='0 0 7 11'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M5.36204 10.6174C5.10004 10.6174 4.83904 10.5154 4.64304 10.3124L0.78004 6.31244C0.40204 5.91944 0.40704 5.29644 0.79304 4.91044L4.79304 0.910437C5.18304 0.519437 5.81604 0.519437 6.20704 0.910437C6.59704 1.30144 6.59704 1.93344 6.20704 2.32444L2.90204 5.62944L6.08104 8.92244C6.46504 9.32044 6.45404 9.95344 6.05704 10.3364C5.86204 10.5244 5.61204 10.6174 5.36204 10.6174Z'
                    fill='#707070'
                  />
                </svg>
              </button>
            </li>
            <li>
              <button className='ml-2 text-sm text-white bg-blue-500 w-7 h-10 px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple'>
                1
              </button>
            </li>
            <li>
              <button className='ml-2 text-sm text-gray-240 px-3 py-1 bg-gray-230 w-7 h-10  rounded-md focus:outline-none focus:shadow-outline-purple'>
                2
              </button>
            </li>
            <li>
              <button className='ml-2 text-sm text-gray-240 px-3 py-1 bg-gray-230 w-7 h-10  rounded-md focus:outline-none focus:shadow-outline-purple'>
                3
              </button>
            </li>
            <li>
              <span className='px-3 py-1'>...</span>
            </li>
            <li>
              <button className='ml-2 text-sm text-gray-240 px-3 py-1 bg-gray-230 w-7 h-10  rounded-md focus:outline-none focus:shadow-outline-purple'>
                50
              </button>
            </li>
            <li>
              <button
                className='flex items-center justify-center ml-2 text-sm text-gray-240 px-3 py-1 bg-gray-230 w-12 h-10  rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple'
                aria-label='Next'>
                <svg
                  width={7}
                  height={11}
                  viewBox='0 0 7 11'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M1.50001 10.6174C1.24401 10.6174 0.988006 10.5194 0.793006 10.3244C0.402006 9.93344 0.402006 9.30144 0.793006 8.91044L4.09801 5.60544L0.918006 2.31244C0.535006 1.91444 0.546006 1.28144 0.943006 0.898436C1.34101 0.515437 1.97401 0.526436 2.35701 0.922436L6.21901 4.92244C6.59801 5.31544 6.59301 5.93844 6.20701 6.32444L2.20701 10.3244C2.01201 10.5194 1.75601 10.6174 1.50001 10.6174Z'
                    fill='#707070'
                  />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </span>
    </div>
  );
}

export default TableFooter;
