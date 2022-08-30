import React from 'react';
import TableThead from './table-thead';
import TableRows from './table-rows';
import { useDefiBalance } from 'lib/hooks/useDefiBalance';

function Table() {
  const { balance, loading } = useDefiBalance();

  return (
    <div className='w-full overflow-hidden rounded-lg shadow-lg mb-10'>
      <div className='w-full overflow-x-auto'>
        {loading && <h1>Loading...</h1>}
        {!loading && (
          <table className='w-full whitespace-no-wrap'>
            <TableThead />
            <tbody className='bg-white dark:bg-gray-800'>
              <TableRows investments={balance} />
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Table;
