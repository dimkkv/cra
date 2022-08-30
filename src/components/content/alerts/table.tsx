import React from 'react';
import TableThead from './table-thead';
import TableRows from './table-rows';
import { useAlerts } from 'lib/hooks/useAlerts';

function Table() {
  const { alerts } = useAlerts();

  return (
    <div className='w-full overflow-hidden rounded-lg shadow-lg mb-10'>
      <div className='w-full overflow-x-auto'>
        <table className='w-full whitespace-no-wrap'>
          <TableThead />
          <tbody className='bg-white dark:bg-gray-800'>
            <TableRows alerts={alerts} />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
