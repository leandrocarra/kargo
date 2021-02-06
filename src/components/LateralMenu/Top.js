import React from 'react';

import MenuCollaps from '@material-ui/icons/MenuOpen';
import {TopWrapper, TopIcon, TopMark } from './styles/StyleTop.js';

function Top() {
  return (
    <TopWrapper>
      <TopIcon>
        <MenuCollaps />
      </TopIcon>
      <TopMark>
        img
      </TopMark>
    </TopWrapper>
  );
}

export default Top;