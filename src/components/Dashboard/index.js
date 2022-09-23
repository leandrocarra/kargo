import React from 'react';

import { HalfBoxContent } from '~/components/BoxContent';
import TotalOrder from './totalOrder'
import QuantitySelled from './quantitySelled'

function Dashboard() {
  return (
    <>
      <HalfBoxContent style={{height: '300px'}}>
        <TotalOrder />
      </HalfBoxContent>
      <HalfBoxContent>
        <QuantitySelled />
      </HalfBoxContent>
      <HalfBoxContent>
        <TotalOrder />
      </HalfBoxContent>
      <HalfBoxContent>
        <QuantitySelled />
      </HalfBoxContent>
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