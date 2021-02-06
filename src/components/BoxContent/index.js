import React from 'react';

import {BoxContainer, BoxContainerCenter, BoxContentTitle} from './styles';

export default function BoxContent({ title, children }) {
  return (
    <BoxContainer> 
      <BoxContentTitle>
        {title} 
      </BoxContentTitle>
      <>
        {children}
      </>
    </BoxContainer>
  );
}

export function BoxContentCenter({ children }) {
  return (
    <BoxContainerCenter> 
      {children}
    </BoxContainerCenter>
  );
}
