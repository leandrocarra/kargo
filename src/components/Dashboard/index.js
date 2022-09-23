import React from 'react';

import { HalfBoxContent } from '~/components/BoxContent';
import TotalOrder from './totalOrder'
import QuantitySelled from './quantitySelled'

function Dashboard() {
  return (
    <>
      <h2>Vendas On-line</h2>
      <HalfBoxContent>
        <TotalOrder />
      </HalfBoxContent>
      <HalfBoxContent>
        <QuantitySelled />
      </HalfBoxContent>
    </>
  )
}

export default Dashboard;