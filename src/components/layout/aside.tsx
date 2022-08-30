import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Aside() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };
  const setActive = (path) => {
    return isActive(path) ? 'bg-blue-dark' : '';
  };

  const menu = [
    { link: '/', title: 'Dashboard', icon: '/assets/img/dashboard' },
    { link: '/alerts', title: 'Alerts', icon: '/assets/img/alerts' },
    { link: '/defend', title: 'Defend', icon: '/assets/img/defend' },
  ];

  const notActive =
    'inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200';

  const active =
    'inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100';

  const icon = (icon, isActive) => `${icon}${isActive ? '-white' : ''}.svg`;

  return (
    <aside className='z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block shadow'>
      <div className='py-4 text-gray-500 dark:text-gray-400'>
        <div>
          <Link
            className='ml-6 text-lg font-bold text-gray-800 dark:text-gray-200'
            to='/'>
            <img className='mx-auto' alt='' src='/assets/img/Frame 304.svg' />
          </Link>
        </div>
        <ul className='mt-6 px-8'>
          {menu.map((item) => (
            <li
              key={item.title}
              className={`relative px-6 py-3 rounded-lg ${setActive(
                item.link
              )}`}>
              <span
                className='absolute w-1 bg-blue-500 rounded-tr-lg rounded-br-lg'
                aria-hidden='true'
              />
              <Link
                className={isActive(item.link) ? active : notActive}
                to={item.link}>
                <img
                  src={icon(item.icon, isActive(item.link))}
                  alt={item.title}
                />
                <span
                  className={`ml-4 ${
                    isActive(item.link) ? ' text-white' : ''
                  }`}>
                  {item.title}
                </span>
              </Link>
            </li>
          ))}

          {/* <li className='relative px-6 py-3 rounded-lg'>
            <Link
              className='inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200'
              to='/alerts'>
              <img src='/assets/img/alerts.svg' alt='' />
              <span className='ml-4'>Alerts</span>
            </Link>
          </li>
          <li className='relative px-6 py-3'>
            <a
              className='inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200'
              href='defend.html'>
              <img src='/assets/img/Defined.svg' alt='' />
              <span className='ml-4'>Defend</span>
            </a>
          </li>
          <li className='relative px-6 py-3'>
            <a
              className='inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200'
              href='protect.html'>
              <img src='/assets/img/Protect.svg' alt='' />
              <span className='ml-4'>Protect</span>
            </a>
          </li> */}
        </ul>
      </div>
    </aside>
  );
}

export default Aside;
