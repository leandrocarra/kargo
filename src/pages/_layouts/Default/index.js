import React from 'react';

import Search from '../../../components/Search';
import LateralMenu from '../../../components/LateralMenu';
import Footer from '../../../components/Footer';

import { WrapperLeft, WrapperRight, ContentArea } from './styles';

function LayoutDefault({ children }) {
  return (
    <>
      <WrapperLeft>
        <LateralMenu />
      </WrapperLeft>
      <WrapperRight>
        <Search />
        <ContentArea>
          {children}
        </ContentArea>
        <Footer />
      </WrapperRight>
    </>
  );
}

export default LayoutDefault;