import React from 'react';

function Action({ action = 'Exit liquidity' }: { action?: string }) {
  return (
    <>
      <td className='px-4 py-3 text-sm font-normal leading-tight '>{action}</td>
    </>
  );
}

export default Action;
