import React from 'react';
import {Link} from "react-router-dom";
import {TopWrapper, TopLogo } from './styles/StyleTop.js';
import Logo from '../../assets/logoTaki.png';

function Top() {
  return (
    <TopWrapper>
      <TopLogo>
        <Link to="/">
        <img src={Logo} alt="img" />
        </Link>
      </TopLogo>
      
    </TopWrapper>
  );
}

export default Top;