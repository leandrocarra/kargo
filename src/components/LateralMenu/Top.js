import React from 'react';

import {TopWrapper, TopLogo } from './styles/StyleTop.js';
import Logo from '../../assets/logoTaki.png';

function Top() {
  return (
    <TopWrapper>
      <TopLogo>
        <img src={Logo} />
      </TopLogo>
      
    </TopWrapper>
  );
}

export default Top;