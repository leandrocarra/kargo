import React from 'react';
import { FaBoxOpen } from 'react-icons/fa'

import BoxContent from '~/components/BoxContent';
import Steps from './Steps';

import {
  TrackingStep,
  TrackingHeader
} from './styles';

const TrackingSteps = () => {
  return (
    <BoxContent>
      <TrackingStep>
        <TrackingHeader>
          <FaBoxOpen /> <span>Estimativa spanara entrega: 18 de Março á 01 de Abril</span>
        </TrackingHeader>
        <Steps />
      </TrackingStep>
    </BoxContent>
  );
}
 
export default TrackingSteps;
