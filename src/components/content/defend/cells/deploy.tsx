import { utils } from 'lib/utils';
import React from 'react';

function Deploy() {
  const disable = (
    <td className='px-4 py-3 text-sm '>
      <div className='flex items-center text-sm'>
        <div>
          <p
            style={{ cursor: 'pointer' }}
            onClick={() =>
              window.open(
                'https://remix.ethereum.org/#url=https://raw.githubusercontent.com/dimkkv/demo-contracts/main/contracts/uniswap/Uniswap-actions.sol&optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.7+commit.e28d00a7.js',
                '_blank'
              )
            }
            className='inline-flex px-2 text-xs font-semibold text-center leading-5 text-white bg-red-500 rounded-full w-24 h-10 items-center justify-center'>
            Disable
          </p>
        </div>
      </div>
    </td>
  );

  const enable = (
    <td className='px-4 py-3 text-sm '>
      <div className='flex items-center text-sm'>
        <div>
          <p
            style={{ cursor: 'pointer' }}
            onClick={() => {
              window.open(
                'https://remix.ethereum.org/#url=https://raw.githubusercontent.com/dimkkv/demo-contracts/main/contracts/Compound-actions.sol&optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.7+commit.e28d00a7.js',
                '_blank'
              );
            }}
            className='inline-flex px-2 text-xs font-semibold text-center leading-5 text-white bg-blue-500 rounded-full w-24 h-10 items-center justify-center'>
            Deploy
          </p>
        </div>
      </div>
    </td>
  );

  const rnd = utils.randomIntFromInterval(1, 2);
  return <>{rnd === 1 ? disable : enable}</>;
}

export default Deploy;
