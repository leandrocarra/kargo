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
    //<BackgroundImage></BackgroundImage>
    <div className="header">

      <div className="inner-header">
        {children}
      </div>

      <div className="content-svg">
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g className="parallax">
        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
        <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
        </g>
        </svg>
      </div>
    </div>

  );
}

export default ChangeBg;