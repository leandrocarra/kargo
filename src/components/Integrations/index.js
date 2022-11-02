import React from 'react';

import { HalfBoxContent } from '~/components/BoxContent';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import List from './List';
import {
  ButtonOption,
  IntegrationContent,
  IntegrationMain,
  ButtonTracking
} from './styles'

function Integrations() {
  return (
    <IntegrationMain>
      <HalfBoxContent title="GERAR WEBHOOK">
        <ButtonTracking>
          Gerar WEBHOOK Taki-Pay
        </ButtonTracking>
        <label>
          https://app.slack.com/client/TACN130GK/C03TTF64230
        </label>
        <i><FileCopyIcon/></i>
      </HalfBoxContent>
      <HalfBoxContent title="INCLUIR WEBHOOK">
        <IntegrationContent>
          <ButtonOption>HOTMART</ButtonOption>
          <ButtonOption>EDUZZ</ButtonOption>
          <ButtonOption>OUTRO</ButtonOption>
        </IntegrationContent>
        <input type="text" placeholder="Nome Produto"/>
        <input type="text" placeholder="URL"/>
        <ButtonTracking>
          Iniciar Tracking
        </ButtonTracking>

      </HalfBoxContent>
      
      <List />
    </IntegrationMain>
  )
}

export default Integrations;
