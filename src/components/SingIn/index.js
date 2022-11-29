import React from 'react';
import SingIn from './container';

import SingUpProvider from '~/context/useSingUp';

function Login() {

  return (
    <SingUpProvider>
      <SingIn />
    </SingUpProvider>
  )
}

export default Login;
