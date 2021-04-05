import React from 'react';
import Container from './container';

import TrackingProvider from '~/context/useTracking';

function Tracking() {

  return (
    <TrackingProvider>
      <Container />
    </TrackingProvider>
  )
}

export default Tracking;