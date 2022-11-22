import React from 'react';
import Container from './container';

import SalesDetailProvider from '~/context/useSalesDetail';

function Sales() {

  return (
    <SalesDetailProvider>
      <Container />
    </SalesDetailProvider>
  )
}

export default Sales;
