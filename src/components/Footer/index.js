import React from 'react';

import {FooterContent, FooterContainer, FooterItem} from './styles';

function Footer() {
  return (
    <FooterContent>
      <FooterContainer>
        <FooterItem>Sobre nós</FooterItem>
        <FooterItem>Faq</FooterItem>
        <FooterItem>Termos e condições</FooterItem>
        <FooterItem>Feedback</FooterItem>
        <FooterItem>Kargo@2021 All Rights Reserved.</FooterItem>
      </FooterContainer>
    </FooterContent>
  );
}

export default Footer;