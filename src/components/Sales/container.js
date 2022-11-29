import React from 'react';

import RowList from '~/components/RowList'
import BoxContent from '~/components/BoxContent';
import Loading from '~/components/Loading';
import {useSales} from '~/context/useSales'
import {
  SalesListTitles
} from './styles';


function Sales() {
  const { 
    loading,
    sales,
    error
   } = useSales()

   console.log(sales);

  return (
    <>
      {loading && (
        <Loading/>
      )}
      {sales && (
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
        { sales && (
          <>
            {sales.results.data.map((item)=> {
              return (
                <RowList
                  key={item.protocolo}
                  protocol={item.protocolo}
                  transactionData={item.transaction_date}
                  payer={item.payer}
                  productName={item.product_name[0]}
                  originalValue={item.original_value}
                  originalPayed={item.payd_amount}
                  installments={item.installments}
                  capturedData={item.capture_date}
                  status={item.status}
                />
              )              
            })}        
          </>
        )}
      </BoxContent>
      )}
      
    </>
  )
}

export default Sales;