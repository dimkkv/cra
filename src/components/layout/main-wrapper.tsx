import React from 'react';

function MainWrapper(props) {
  return (
    <main className='h-full overflow-y-auto'>
      <div className=' px-6  grid'>{props.children}</div>
    </main>
  );
}

export default MainWrapper;
