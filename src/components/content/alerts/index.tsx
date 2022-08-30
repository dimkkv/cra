import Header from 'components/layout/header';
import MainWrapper from 'components/layout/main-wrapper';
import React from 'react';
import Table from './table';
import TableHeader from './table-header';

function Alerts() {
  return (
    <>
      <Header />
      <MainWrapper>
        <TableHeader />
        <Table />
        {/* <TableFooter /> */}
      </MainWrapper>
    </>
  );
}

export default Alerts;
