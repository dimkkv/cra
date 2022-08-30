/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

function RiskStatusCell() {
  const red = () => (
    <span className='inline-flex px-2 text-xs font-semibold text-center leading-5 text-red-darkRed bg-red-lightRed rounded-full w-full h-12 items-center justify-center'>
      Red
    </span>
  );
  const green = () => (
    <span className='inline-flex px-2 text-xs font-semibold text-center leading-5 text-green-darkGreen bg-green-lightGreen rounded-full w-full h-12 items-center justify-center'>
      Green
    </span>
  );
  const yellow = () => (
    <span className='inline-flex px-2 text-xs font-semibold text-center leading-5 text-green-800 bg-yellow-lightYellow rounded-full w-full h-12 items-center justify-center'>
      Yellow
    </span>
  );
  return (
    <td className='px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-gray-200'>
      {green()}
    </td>
  );
}

export default RiskStatusCell;
