import React from 'react';

function Body(props) {
  return (
    <div className='flex h-screen bg-gray-50 dark:bg-gray-900'>
      {props.children}
    </div>
  );
}

export default Body;
