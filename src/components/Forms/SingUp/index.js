import React from 'react';
import Container from './container';

import SingUpProvider from '~/context/useSingUp';

function Tracking() {

  return (
    <SingUpProvider>
      <Container />
    </SingUpProvider>
  )
}

export default Tracking;
