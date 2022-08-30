import React from 'react';
import { useAddress } from 'lib/hooks/useAddress';
import { utils } from 'lib/utils';

function CurrentAddress() {
  const { address } = useAddress();

  return (
    <div className='bg-blue-400 rounded-full h-10 px-4 absolute right-0 flex items-center'>
      <span>{utils.shortenAddress(address)}</span>
    </div>
  );
}

export default CurrentAddress;
