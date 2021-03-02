import React, {useState} from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import FloatableProfile from '~/components/FloatableProfile';

import {HeaderContainer, HeaderContent, HeaderNav} from './styles/stylesHeader';

function Header() {
  const [isShow, setIsShow] = useState(true)

  const handleShow = (isShow) => {
    console.log('teste')
    setIsShow(!isShow)
  }

  return (
    <>
      <HeaderContainer onClick={() => handleShow(isShow)}>
        <HeaderContent>
          <img src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png" alt='teste' />
          <p>OnDisc</p><HeaderNav><KeyboardArrowDownIcon /></HeaderNav>
        </HeaderContent>
      </HeaderContainer>
      <FloatableProfile isShow={isShow} />
    </>
  );
}

export default Header;
