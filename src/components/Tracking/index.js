import React from 'react';
import TagToPrintContext from '~/hooks/useTags';
import BoxContent from '~/components/BoxContent';
import Header from '~/components/Tracking/Header';
import StatusBox from '~/components/Tracking/StatusBox';
import FloatableTag from '~/components/Tracking/FloatableTag';
import FilterTracking from '~/components/FilterTracking/';
import Accordion from '~/components/Accordion';

import { ContainerTracking } from './styles';

function Tracking() {
  return (
    <TagToPrintContext>
      <Accordion title='FILTRAR ENTREGAS'>
        <FilterTracking />
      </Accordion>
      <BoxContent title='GUIAS DE TRANSPORTES'>
      <FloatableTag/>
      <ContainerTracking>
        <Header/>
        <StatusBox
          status='atrasado'
          numeroGuia='aaaaa'
          refCliente='ENK K 1234567'
          refExterna='1234556677'
          destinatario='Pedro dias da silva'
          createAt='11/12/1000'
          atualizado='11/12/1000'
        />
        <StatusBox
          status='pendente'
          numeroGuia='bbbbb'
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
    </TagToPrintContext>
  )
}

export default Tracking;