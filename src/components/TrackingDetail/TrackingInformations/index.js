import React from 'react';

import BoxContent from '~/components/BoxContent';

import {
  InformationsContainer,
  InformationsItem,
} from './styles';
 
const TrackingInformations = () => {
  return (
    <BoxContent title="INFORMAÇÕES DO PEDIDO">
      <InformationsContainer>
        <InformationsItem>
          <span>Numero da guia: </span><strong>123456789</strong>
        </InformationsItem>
        <InformationsItem>
          <span>Referencia externa: </span><strong>123456789</strong>
        </InformationsItem>
        <InformationsItem>
          <span>Destinatario: </span><strong>123456789</strong>
        </InformationsItem>
        <InformationsItem>
          <span>Criado em: </span><strong>123456789</strong>
        </InformationsItem>
        <InformationsItem>
          <span>Status do pedido: </span><strong>123456789</strong>
        </InformationsItem>
      </InformationsContainer>
    </BoxContent>
  );
}
 
export default TrackingInformations;