import React from 'react';

function HeaderWrapper(props) {
  return <div className='flex flex-col flex-1 w-full'>{props.children}</div>;
}

export default HeaderWrapper;
