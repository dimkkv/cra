import CurrentAddress from 'components/shared/current-address';
import React from 'react';

function TableHeader() {
  return (
    <>
      <div className='grid grid-cols-1 xl:grid-cols-2 xl:justify-start justify-center gap-4 items-center text-center xl:text-left'>
        <div>
          <h2 className='mt-4 mb-1 xl:my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200'>
            Immuna Defend
          </h2>
        </div>
        {/* search */}
        <div
          className='relative focus-within:text-blue-500 flex flex-col lg:flex-row items-center justify-center xl:justify-end
              mb-5 xl:mb-0 gap-4'>
          {/* content tab */}
          <div className='flex items-center'>
            <div className='relative flex items-center bg-blue-300 rounded-full h-10 w-56 sm:w-64 px-4'>
              <svg
                width={10}
                height={14}
                viewBox='0 0 10 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M9.01004 8.13428C9.01026 8.20756 8.98506 8.27918 8.93821 8.3383L4.80897 13.8523C4.73982 13.9448 4.62651 13.9999 4.50561 13.9999C4.38493 13.9999 4.27161 13.9448 4.20247 13.8523L0.0689386 8.33138C-0.0379072 8.19189 -0.0187265 8.00036 0.113774 7.88169C0.246493 7.76302 0.452156 7.75323 0.597142 7.85858L4.50557 10.6263L8.414 7.86066H8.41422C8.47356 7.81777 8.54538 7.793 8.62011 7.78904H8.64398C8.84652 7.79091 9.00979 7.94456 9.01002 8.1338L9.01004 8.13428Z'
                  fill='#6C6C6C'
                />
                <path
                  d='M8.64032 6.09553L4.82269 0.167383C4.75577 0.0634978 4.63554 0 4.50572 0C4.37612 0 4.25567 0.0634978 4.18897 0.167383L0.371111 6.09553C0.274527 6.24584 0.313785 6.43967 0.462567 6.54668L4.2798 9.29538C4.41297 9.39156 4.59878 9.39156 4.73195 9.29538L8.54918 6.54668C8.69774 6.43967 8.73722 6.24584 8.64041 6.09553H8.64032ZM8.03451 6.15133C7.99994 6.22273 7.93637 6.27853 7.85763 6.30643C7.77911 6.33412 7.6919 6.33141 7.61516 6.29915L4.62307 5.03314C4.54856 5.00171 4.46313 5.00171 4.38863 5.03314L1.39654 6.29771C1.31958 6.33143 1.23147 6.33518 1.15184 6.3077C1.07221 6.28043 1.00774 6.22442 0.972722 6.15218C0.937701 6.07994 0.935024 5.99771 0.965584 5.92379C0.996143 5.84988 1.05704 5.79055 1.13488 5.75891L4.37481 4.38797C4.45868 4.35216 4.55503 4.35216 4.63891 4.38797L7.87883 5.75891C8.03764 5.82698 8.10746 6.00249 8.03453 6.15072L8.03451 6.15133Z'
                  fill='#6C6C6C'
                />
              </svg>
              <span className='pl-2'>ETH</span>
              <CurrentAddress />
            </div>
            <div className='bg-blue-400 rounded-full h-10 w-10 flex items-center justify-center ml-3'>
              <svg
                width={16}
                height={20}
                viewBox='0 0 16 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M10.8685 3.49478H1.57954C0.707927 3.49478 0 4.20271 0 5.07432V18.4022C0 19.2738 0.707927 19.9817 1.57954 19.9817H10.8685C11.7401 19.9817 12.4481 19.2738 12.4481 18.4022V5.07432C12.444 4.20271 11.736 3.49478 10.8685 3.49478ZM11.3391 18.3981C11.3391 18.66 11.1263 18.8727 10.8644 18.8727H1.57544C1.31355 18.8727 1.10076 18.66 1.10076 18.3981V5.07432C1.10076 4.81243 1.31355 4.59964 1.57544 4.59964H10.8644C11.1263 4.59964 11.3391 4.81243 11.3391 5.07432V18.3981Z'
                  fill='#383838'
                />
                <path
                  d='M14.4205 0H5.13154C4.25993 0 3.552 0.707927 3.552 1.57954C3.552 1.88644 3.79753 2.13196 4.10443 2.13196C4.41133 2.13196 4.65686 1.88644 4.65686 1.57954C4.65686 1.31764 4.86965 1.10486 5.13154 1.10486H14.4205C14.6824 1.10486 14.8952 1.31764 14.8952 1.57954V14.9074C14.8952 15.1693 14.6824 15.3821 14.4205 15.3821C14.1136 15.3821 13.8681 15.6276 13.8681 15.9345C13.8681 16.2414 14.1136 16.4869 14.4205 16.4869C15.2921 16.4869 16.0001 15.779 16.0001 14.9074V1.57954C16.0001 0.707927 15.2921 0 14.4205 0Z'
                  fill='#383838'
                />
              </svg>
            </div>
          </div>
          {/* content tab */}
        </div>
        {/* Table up bar Start*/}
        <div className='flex  xl:justify-start justify-center gap-4 items-center text-center xl:text-left pb-2  flex-col lg:flex-row'>
          <div>
            <input
              className=' pl-4 text-xs font-semibold  border-gray-16 bg-gray-15 h-10 rounded-full w-56'
              placeholder='Enter backup address'
            />
          </div>
          <div className='border h-10 w-56 rounded-full text-center bg-blue-500 pt-1'>
            <button className='text-white'>Backup Address</button>
          </div>
        </div>
        {/* search */}
        <div
          className='relative focus-within:text-blue-500 flex flex-col lg:flex-row items-center justify-center xl:justify-end
          mb-5 xl:mb-0 gap-4 pb-2'>
          <div className='relative'>
            {/* search */}
            <div className='absolute inset-y-0 flex items-center pl-2'>
              <svg
                className='w-4 h-4'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'>
                <path
                  fillRule='evenodd'
                  d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <input
              className='w-auto xl:w-full pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-full dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input h-12'
              type='text'
              placeholder='Search'
              aria-label='Search'
            />
            {/* search */}
          </div>
          {/* content tab */}
          <div className='flex items-center'>
            <div className='border bg-gray-12 h-10 w-40 rounded-full text-center pt-1'>
              <button className='text-black'>Enable Defense</button>
            </div>
            {/* <div class="relative flex items-center bg-blue-300 rounded-full h-10 w-56 sm:w-64 px-4">
              <svg 
                width="10" 
                height="14" 
                viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.01004 8.13428C9.01026 8.20756 8.98506 8.27918 8.93821 8.3383L4.80897 13.8523C4.73982 13.9448 4.62651 13.9999 4.50561 13.9999C4.38493 13.9999 4.27161 13.9448 4.20247 13.8523L0.0689386 8.33138C-0.0379072 8.19189 -0.0187265 8.00036 0.113774 7.88169C0.246493 7.76302 0.452156 7.75323 0.597142 7.85858L4.50557 10.6263L8.414 7.86066H8.41422C8.47356 7.81777 8.54538 7.793 8.62011 7.78904H8.64398C8.84652 7.79091 9.00979 7.94456 9.01002 8.1338L9.01004 8.13428Z" fill="#6C6C6C"/>
                <path d="M8.64032 6.09553L4.82269 0.167383C4.75577 0.0634978 4.63554 0 4.50572 0C4.37612 0 4.25567 0.0634978 4.18897 0.167383L0.371111 6.09553C0.274527 6.24584 0.313785 6.43967 0.462567 6.54668L4.2798 9.29538C4.41297 9.39156 4.59878 9.39156 4.73195 9.29538L8.54918 6.54668C8.69774 6.43967 8.73722 6.24584 8.64041 6.09553H8.64032ZM8.03451 6.15133C7.99994 6.22273 7.93637 6.27853 7.85763 6.30643C7.77911 6.33412 7.6919 6.33141 7.61516 6.29915L4.62307 5.03314C4.54856 5.00171 4.46313 5.00171 4.38863 5.03314L1.39654 6.29771C1.31958 6.33143 1.23147 6.33518 1.15184 6.3077C1.07221 6.28043 1.00774 6.22442 0.972722 6.15218C0.937701 6.07994 0.935024 5.99771 0.965584 5.92379C0.996143 5.84988 1.05704 5.79055 1.13488 5.75891L4.37481 4.38797C4.45868 4.35216 4.55503 4.35216 4.63891 4.38797L7.87883 5.75891C8.03764 5.82698 8.10746 6.00249 8.03453 6.15072L8.03451 6.15133Z" fill="#6C6C6C"/>
              </svg>
              <span class="pl-2">ETH</span>

              <div class="bg-blue-400 rounded-full h-10 px-4 absolute right-0 flex items-center"> 
                <span>0xBAD7...E116</span>
             </div>
           </div> */}
            {/* <div class="bg-blue-400 rounded-full h-10 w-10 flex items-center justify-center ml-3">
              <svg 
                width="16" 
                height="20" 
                viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8685 3.49478H1.57954C0.707927 3.49478 0 4.20271 0 5.07432V18.4022C0 19.2738 0.707927 19.9817 1.57954 19.9817H10.8685C11.7401 19.9817 12.4481 19.2738 12.4481 18.4022V5.07432C12.444 4.20271 11.736 3.49478 10.8685 3.49478ZM11.3391 18.3981C11.3391 18.66 11.1263 18.8727 10.8644 18.8727H1.57544C1.31355 18.8727 1.10076 18.66 1.10076 18.3981V5.07432C1.10076 4.81243 1.31355 4.59964 1.57544 4.59964H10.8644C11.1263 4.59964 11.3391 4.81243 11.3391 5.07432V18.3981Z" fill="#383838"/>
                <path d="M14.4205 0H5.13154C4.25993 0 3.552 0.707927 3.552 1.57954C3.552 1.88644 3.79753 2.13196 4.10443 2.13196C4.41133 2.13196 4.65686 1.88644 4.65686 1.57954C4.65686 1.31764 4.86965 1.10486 5.13154 1.10486H14.4205C14.6824 1.10486 14.8952 1.31764 14.8952 1.57954V14.9074C14.8952 15.1693 14.6824 15.3821 14.4205 15.3821C14.1136 15.3821 13.8681 15.6276 13.8681 15.9345C13.8681 16.2414 14.1136 16.4869 14.4205 16.4869C15.2921 16.4869 16.0001 15.779 16.0001 14.9074V1.57954C16.0001 0.707927 15.2921 0 14.4205 0Z" fill="#383838"/>
              </svg>
           </div> */}
          </div>
          {/* content tab */}
        </div>
      </div>
    </>
  );
}

export default TableHeader;
