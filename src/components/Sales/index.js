import React from 'react';

import RowList from '~/components/RowList'
import BoxContent from '~/components/BoxContent';
import {
  SalesListTitles
} from './styles';

const xuxu = 
  {
    protocolo: '1231232112312',
    comprador: 'nome fuladno',
    transaction:{
      data: '29/09/2022', 
      time: '13:00',
    },
    itens : [
      '21312312312312121212',
    ],
    originalValor: 'R$ 1.234,00',
    originalPayed: 'R$ 1.234,00',
    parcelas: '2x',
    captured:{
      data: '29/09/2022', 
      time: '13:00',
    },
    status: 'APROVADO'
  }


function Sales() {
  return (
    <>
      <BoxContent>
        <SalesListTitles>
          <label>Protocolo</label>
          <label>Comprador</label>
          <label>Data Transição</label>
          <label>Itens</label>
          <label>Valor Original</label>
          <label>Valor Pago</label>
          <label>Parcelas</label>
          <label>Data Captura</label>
          <label>Status</label>
        </SalesListTitles>
        <RowList params={xuxu}/>
        <RowList params={xuxu}/>
        <RowList params={xuxu}/>
        <RowList params={xuxu}/>
        <RowList params={xuxu}/>
        <RowList params={xuxu}/>
        <RowList params={xuxu}/>
        <RowList params={xuxu}/>
        <RowList params={xuxu}/>
        <RowList params={xuxu}/>
        <RowList params={xuxu}/>
        <RowList params={xuxu}/>
        <RowList params={xuxu}/>
        <RowList params={xuxu}/>
        <RowList params={xuxu}/>
        <RowList params={xuxu}/>
        <RowList params={xuxu}/>
        <RowList params={xuxu}/>
        <RowList params={xuxu}/>
        <RowList params={xuxu}/>
        <RowList params={xuxu}/>
        <RowList params={xuxu}/>
        <RowList params={xuxu}/>
        <RowList params={xuxu}/>
        <RowList params={xuxu}/>
        <RowList params={xuxu}/>
        <RowList params={xuxu}/>
        <RowList params={xuxu}/>
        <RowList params={xuxu}/>
        <RowList params={xuxu}/>
        <RowList params={xuxu}/>
        <RowList params={xuxu}/>
      </BoxContent>
    </>
  )
}

export default Sales;