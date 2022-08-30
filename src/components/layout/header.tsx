import { useAddress } from 'lib/hooks/useAddress';
import React from 'react';

function Header() {
  const { address, setAddress } = useAddress();

  return (
    <header className='z-10 py-4 bg-white shadow-md dark:bg-gray-800'>
      <div className=' flex gap-12 items-center justify-between h-full px-6 mx-auto text-black dark:text-purple-300'>
        {/* Mobile hamburger */}
        <button
          className='p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-blue'
          aria-label='Menu'>
          <svg
            className='w-6 h-6'
            aria-hidden='true'
            fill='currentColor'
            viewBox='0 0 20 20'>
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clipRule='evenodd'
            />
          </svg>
        </button>
        {/* Name */}
        <div className='hidden md:block text-lg font-medium text-gray-150'>
          Dashboard
        </div>
        {/* Search input */}
        <div className='flex justify-center flex-1 lg:mr-64'>
          <div className='relative w-full max-w-xl mr-6 focus-within:text-blue-500'>
            <div className='absolute inset-y-0 flex items-center pl-2'>
              <svg
                width={15}
                height={15}
                viewBox='0 0 15 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M14.1484 13.6604L10.2378 9.74969C11.1775 8.62149 11.6461 7.17442 11.5462 5.70951C11.4462 4.2446 10.7852 2.87463 9.7009 1.8846C8.61655 0.894566 7.19226 0.360698 5.72431 0.394052C4.25637 0.427406 2.8578 1.02542 1.81954 2.06368C0.781275 3.10194 0.183266 4.50051 0.149911 5.96845C0.116557 7.4364 0.650425 8.86069 1.64046 9.94504C2.63049 11.0294 4.00046 11.6903 5.46537 11.7903C6.93028 11.8903 8.37735 11.4217 9.50555 10.4819L13.4162 14.3926L14.1484 13.6604ZM1.20262 6.10725C1.20262 5.1855 1.47595 4.28444 1.98806 3.51802C2.50016 2.75161 3.22803 2.15426 4.07962 1.80152C4.93121 1.44878 5.86828 1.35649 6.77233 1.53631C7.67638 1.71614 8.5068 2.16001 9.15858 2.81179C9.81036 3.46357 10.2542 4.29399 10.4341 5.19804C10.6139 6.10209 10.5216 7.03915 10.1688 7.89075C9.81611 8.74234 9.21876 9.47021 8.45235 9.98231C7.68593 10.4944 6.78487 10.7677 5.86311 10.7677C4.62749 10.7664 3.44288 10.2749 2.56916 9.40121C1.69545 8.52749 1.20399 7.34287 1.20262 6.10725Z'
                  fill='#6A6A6A'
                />
              </svg>
            </div>
            <input
              className='w-full pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 border border-gray-260 rounded-full dark:placeholder-gray-270 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input h-10'
              type='text'
              placeholder='Enter address'
              value={address}
              onChange={async (e) => {
                setAddress(e.target.value);
              }}
              aria-label='Search'
            />
          </div>
        </div>
        <ul className='flex items-center flex-shrink-0 space-x-6'>
          {/* Theme toggler */}
          <li className='flex'>
            <button className='rounded-md focus:outline-none focus:shadow-outline-purple'>
              <template x-if='!dark' />
              <template x-if='dark' />
            </button>
          </li>
          {/* Notifications menu */}
          <li className='relative'>
            <button
              className='relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple'
              aria-label='Notifications'
              aria-haspopup='true'>
              <svg
                className='w-5 h-5'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'>
                <path d='M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z' />
              </svg>
              {/* Notification badge */}
              <span
                aria-hidden='true'
                className='absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800'
              />
            </button>
            <template x-if='isNotificationsMenuOpen' />
          </li>
          {/* Profile menu */}
          <li className='relative '>
            <button
              className='align-middle rounded-full focus:shadow-outline-blue focus:outline-none flex items-center'
              aria-label='Account'
              aria-haspopup='true'>
              <img
                className='object-cover w-8 h-8 rounded-full'
                src='https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82'
                alt=''
                aria-hidden='true'
              />
              <span className='ml-2 font-semibold'>Betty Copper</span>
            </button>
            <template x-if='isProfileMenuOpen' />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
