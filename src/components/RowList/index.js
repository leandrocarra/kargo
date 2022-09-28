import React from 'react';
import {Link} from "react-router-dom";

import {
  RowContainer
} from './styles';

function RowList({params}) {
  return (
    <Link to={`/vendas/detail/${params.id}`} >
      <RowContainer>
        <label>{params.protocolo}</label>
        <label>{params.comprador}</label>
        <label>{params.transaction.data}</label>
        <label>{params.itens}</label>
        <label>{params.originalValor}</label>
        <label>{params.originalPayed}</label>
        <label>{params.parcelas}</label>
        <label>{params.captured.data}</label>
        <label>{params.status}</label>
      </RowContainer>
    </Link>
  )
}

export default RowList;