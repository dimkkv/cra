import React from 'react';

import ProtocolCell from './cells/protocol';
import PoolCell from './cells/pool';
import MyLiquidityCell from './cells/my-liquidity';
import { utils } from 'lib/utils';
import { Alert } from 'lib/types';
import Action from './cells/action';
import Event from './cells/event';
import Deploy from './cells/deploy';

function TableRows({ alerts }: { alerts: Alert[] }) {
  return (
    <>
      {alerts?.map((investment, idx) => (
        <tr
          key={idx}
          className={`text-gray-700 dark:text-gray-400 ${
            idx % 2 === 1 ? 'bg-blue-50' : ''
          }`}>
          <ProtocolCell title={investment.name} link={investment.websiteUrl} />
          <PoolCell
            poolAddress={investment.pool_address}
            images={
              investment.underlying.length > 0
                ? investment.underlying.map((b) => {
                    return b.iconUrl;
                  })
                : [utils.icon_slug(investment.token)]
            }
          />
          <MyLiquidityCell
            data={
              investment.underlying.length > 0
                ? investment.underlying.map((b) => {
                    return {
                      amount: b.amount,
                      symbol: b.symbol,
                    };
                  })
                : [{ amount: investment.amount, symbol: investment.symbol }]
            }
          />
          <Event event={investment.event} />
          <Action />
          <Deploy />
        </tr>
      ))}
    </>
  );
}

export default TableRows;
