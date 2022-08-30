import React from 'react';

function Severity({ severity }: { severity: string }) {
  return (
    <>
      <td className='px-4 py-3 text-sm '>
        <div className='flex items-center text-sm'>
          <div>
            <p className='font-normal'>
              <select
                disabled
                value={severity}
                id='countries'
                className=' border border-blue-border text-blue-500 text-sm rounded-full h-10 focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                <option value={'HIGH'}>High</option>
                <option value='LOW'>Low</option>
                <option value='MODERATE'>Moderate</option>
              </select>
            </p>
          </div>
        </div>
      </td>
    </>
  );
}

export default Severity;
