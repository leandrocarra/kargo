import React from 'react';

import {
  BoxContainer,
  BoxContainerCenter,
  BoxContentTitle,
  HalfBoxContainer,
  SmallBoxContainer
} from './styles';

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

export function BoxContentEmpty({ children }) {
  return (
    <BoxContainer> 
      {children}
    </BoxContainer>
  );
}

export function HalfBoxContent({ title, children }) {
  return (
    <HalfBoxContainer> 
      <BoxContentTitle>
        {title} 
      </BoxContentTitle>
        {children}
    </HalfBoxContainer>
  );
}

export function SmallBoxContent({ children }) {
  return (
    <SmallBoxContainer> 
      {children}
    </SmallBoxContainer>
  );
}