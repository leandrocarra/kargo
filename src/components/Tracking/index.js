import React from 'react';

import BoxContent from '~/components/BoxContent';
import Header from '~/components/Tracking/Header';
import StatusBox from '~/components/Tracking/StatusBox';

import { ContainerTracking } from './styles';
// import {ButtonAction} from '~/components/Buttons/styles';

function Tracking() {
  return (
    <BoxContent title={'GUIAS DE TRANSPORTES'}>
      <ContainerTracking>
        <Header/>
        <StatusBox
          status='atrasado'
          numeroGuia='12345678'
          refCliente='ENK K 1234567'
          refExterna='1234556677'
          destinatario='Pedro dias da silva'
          createAt='11/12/1000'
          atualizado='11/12/1000'
        />
        <StatusBox
          status='pendente'
          numeroGuia='12345678'
          refCliente='ENK K 1234567'
          refExterna='1234556677'
          destinatario='Pedro dias da silva'
          createAt='11/12/1000'
          atualizado='11/12/1000'
        />
        <StatusBox
          status='finalizado'
          numeroGuia='12345678'
          refCliente='ENK K 1234567'
          refExterna='1234556677'
          destinatario='Pedro dias da silva'
          createAt='11/12/1000'
          atualizado='11/12/1000'
        />
        <StatusBox
          status='em_rota'
          numeroGuia='12345678'
          refCliente='ENK K 1234567'
          refExterna='1234556677'
          destinatario='Pedro dias da silva'
          createAt='11/12/1000'
          atualizado='11/12/1000'
        />
        <StatusBox
          status='em_rota'
          numeroGuia='12345678'
          refCliente='ENK K 1234567'
          refExterna='1234556677'
          destinatario='Pedro dias da silva'
          createAt='11/12/1000'
          atualizado='11/12/1000'
        />
        
      </ContainerTracking>
    </BoxContent>
  )
}

export default Tracking;