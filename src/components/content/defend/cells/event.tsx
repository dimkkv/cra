import { ImmunaEvent } from 'lib/types';
import React from 'react';

function Event({ event }: { event: ImmunaEvent }) {
  return (
    <>
      <td className='px-4 py-3 text-sm font-normal leading-tight '>{event}</td>
    </>
  );
}

export default Event;
