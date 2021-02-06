import React from 'react';
import styled from 'styled-components';

import bg0 from '~/assets/bg0.png';
import bg1 from '~/assets/bg1.png';
import bg2 from '~/assets/bg2.png';

function ChangeBg({children}) {
  const arrayImages = [bg0, bg1, bg2];

  function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
      
  const changeBackgroundImage = () => {
    return arrayImages[getRandomNumber(3)]
  }

  const BackgroundImage = styled.div`
    background-image: url(${changeBackgroundImage});
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    overflow-y: auto;
    overflow-x: hidden;
`;

  return (
    <BackgroundImage>{children}</BackgroundImage>
  );
}

export default ChangeBg;