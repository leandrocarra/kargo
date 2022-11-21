import React from 'react';
import Container from './container';

import SalesProvider from '~/context/useSales';

function Sales() {

  return (
    <SalesProvider>
      <Container />
    </SalesProvider>
  )
}

export default Sales;
