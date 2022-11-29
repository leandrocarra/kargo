import React from 'react';
import BoxContent from '~/components/BoxContent';
import {useSalesDetail} from '~/context/useSalesDetail'
import Loading from '~/components/Loading';
import {
  SalesDetailContent,
  SalesDetailsSeparator,
} from './styles';
 
function SalesDetail() {
  const { 
    loading,
    salesDetail,
   } = useSalesDetail()

   console.log('detail',salesDetail);
  return (
    <>
      {loading && (
        <Loading/>
      )}
      {salesDetail !== null && (
        <BoxContent title='Detalhes da compra'>
        <SalesDetailContent>
          <strong>Detalhes do Cartão</strong>
          <div>
            <span>Bandeira:</span>
            <p>{salesDetail.data.card.brand}</p>
          </div>
          <div>
            <span>Data de expiração:</span>
            <p>{salesDetail.data.card.expirationDate}</p>
          </div>
          <div>
            <span>Numero:</span>
            <p>{salesDetail.data.card.number}</p>
          </div>
        </SalesDetailContent>
        <SalesDetailContent>
          <strong>Dados do produto</strong>
          <div>
            <span>Produto:</span>
            <p>{salesDetail.data.items[0].title}</p>
          </div>
          <div>
            <span>Valor bruto:</span>
            <p>{salesDetail.data.items[0].grossAmount}</p>
          </div>
          <div>
            <span>Disconto:</span>
            <p>{salesDetail.data.items[0].discount}</p>
          </div>
          <div>
            <span>Valor Original:</span>
            <p>{salesDetail.data.items[0].originalAmount}</p>
          </div>
        </SalesDetailContent>
        <SalesDetailContent>
          <div>
            <span>Identificador:</span>
            <p>{salesDetail.data.items[0].identification}</p>
          </div>
          <div>
            <span>Quantidade:</span>
            <p>{salesDetail.data.items[0].quantity}</p>
          </div>
          <div>
            <span>Valor:</span>
            <p>{salesDetail.data.items[0].amount}</p>
          </div>
          {/* <div>
            <SalesDetailStatus>
              PAGO
            </SalesDetailStatus>
          </div> */}
        </SalesDetailContent>
        <SalesDetailsSeparator />
        <SalesDetailContent>
          <strong>Informações do Comprador</strong>
          <div>
            <span>Nome:</span>
            <p>{salesDetail.data.payer.name}</p>
          </div>
          <div>
            <span>Email:</span>
            <p>{salesDetail.data.payer.email}</p>
          </div>
          <div>
            <span>Telfone:</span>
            <p>{salesDetail.data.payer.phones[0].number}</p>
          </div>                  
        </SalesDetailContent>
        <SalesDetailContent>
          <div>
            <span>{salesDetail.data.payer.documents[0].type}:</span>
            <p>{salesDetail.data.payer.documents[0].identification}</p>
          </div>
          <div>
            <span>Email:</span>
            <p>{salesDetail.data.payer.email}</p>
          </div>
          <div>
            <span>Telfone:</span>
            <p>{salesDetail.data.payer.phones[0].number}</p>
          </div>                  
        </SalesDetailContent>
        <SalesDetailContent>
          <div>
            <span>Cidade:</span>
            <p>{salesDetail.data.payer.address.city}</p>
          </div>
          <div>
            <span>Endereço:</span>
            <p>{salesDetail.data.payer.address.street}</p>
          </div>
          <div>
            <span>Bairro:</span>
            <p>{salesDetail.data.payer.address.neighborhood}</p>
          </div>
          <div>
            <span>Numero:</span>
            <p>{salesDetail.data.payer.address.number}</p>
          </div>
          <div>
            <span>Complemento:</span>
            <p>{salesDetail.data.payer.address.complement}</p>
          </div>
          <div>
            <span>CEP:</span>
            <p>{salesDetail.data.payer.address.zipCode}</p>
          </div>                  
        </SalesDetailContent>
      </BoxContent>
      )}
      
    </>
    
  );
}
 
export default SalesDetail;
