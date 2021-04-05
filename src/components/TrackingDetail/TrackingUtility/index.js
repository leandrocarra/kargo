import React, {useState} from 'react';

import {CopyToClipboard} from 'react-copy-to-clipboard';
import { FiPackage } from 'react-icons/fi'

import {BoxContentEmpty} from '~/components/BoxContent';

import {
  UtilityTop,
  UtilityBottom,
  UtilityCode,
  UtilityCopy
} from './styles';

import {ButtonCopy} from '~/components/Buttons/styles';

const TrackingUtility = () => {
  const [copied, setCopied] = useState(false);

  return (
    <BoxContentEmpty>
      <UtilityTop>
        <UtilityCode>
          <UtilityCopy>
          <CopyToClipboard
            text={'12345678'}
            onCopy={() => setCopied(true)}
          >
            <ButtonCopy>
              {copied ? 'copiado' : 'copiar'}
            </ButtonCopy>
          </CopyToClipboard>
          </UtilityCopy>
          <i>
            <FiPackage size={23}/>
          </i>
          <strong>
            Codigo de rastreio
          </strong>
          <p>123456789</p>
        </UtilityCode>
      </UtilityTop>
      <UtilityBottom>
          <p>Envie o link de rastreio para o seu cliente</p>
          <a
            href='https://kargo.pt/acompanhar-encomenda/'
            target="_blank"
            rel="noreferrer">
              KargoDotCom
          </a>
      </UtilityBottom>
    </BoxContentEmpty>
  );
}
 
export default TrackingUtility;