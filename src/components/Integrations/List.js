import React from 'react';

import BoxContent from '~/components/BoxContent';

import {
  IntegrationListMain,
  IntegrationListFirst,
  IntegrationListSecond,
  IntegrationListThird,
  IntegrationListFourth,
} from './styles'

function Integrations() {
  return (
    <BoxContent title="WEBHOOKS INCLUIDOS">
      <IntegrationListMain>
        <ul>
          <li>
            <IntegrationListFirst>Origem</IntegrationListFirst>
            <IntegrationListSecond>Nome do produto</IntegrationListSecond>
            <IntegrationListThird>Serviço</IntegrationListThird>
            <IntegrationListFourth>Incluido em</IntegrationListFourth>
            
          </li>
          <li>
            <IntegrationListFirst>HOTMART</IntegrationListFirst>
            <IntegrationListSecond>Lincenciamento IPVA</IntegrationListSecond>
            <IntegrationListThird>Whatsapp</IntegrationListThird>
            <IntegrationListFourth>10/10/2022</IntegrationListFourth>
          </li>         
        </ul>
      </IntegrationListMain>
    </BoxContent>
  )
}

export default Integrations;
