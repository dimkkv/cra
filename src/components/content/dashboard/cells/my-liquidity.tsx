import React from 'react';

function MyLiquidityCell({ data }) {
  return (
    <td className='px-4 py-3 text-sm text-gray-160'>
      <span className='px-2 py-1 '>
        {data.map((d, idx) => {
          const isLast = idx === data.length - 1;
          return `${parseFloat(d.amount).toFixed(4)} ${d.symbol} ${
            isLast ? '' : '/ '
          }`;
        })}
      </span>
    </td>
  );
}

export default MyLiquidityCell;
