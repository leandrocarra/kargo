import React from 'react';
import {Link} from "react-router-dom";

import {
  RowContainer
} from './styles';

function RowList({
  protocol,
  transactionData,
  payer,
  productName,
  originalValue,
  originalPayed,
  installments,
  capturedData,
  status
}) {
  return (
    <Link to={`/vendas/detail/${protocol}`} >
      <RowContainer>
        <label>{protocol}</label>
        <label>{payer}</label>
        <label>{transactionData}</label>
        <label>{productName}</label>
        <label>{originalValue}</label>
        <label>{originalPayed}</label>
        <label>{installments}</label>
        <label>{capturedData}</label>
        <label>{status}</label>
      </RowContainer>
    </Link>
  )
}

export default RowList;