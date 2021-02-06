import React from 'react';

import { Wrapper } from './styles';

import ChangeBg from '~/components/ChangeBg';

function LoginLayout({ children }) {
  return (
    <Wrapper>
      <ChangeBg>
        {children}
      </ChangeBg>
    </Wrapper>
  );
}
 
export default LoginLayout;