import React from 'react';

import PrintIcon from '@material-ui/icons/Print';

import TrackingSteps from './TrackingSteps/index'
import TrackingMicroSteps from './TrackingMicroSteps/index'
import TrackingUtility from './TrackingUtility/index'
import TrackingInformations from './TrackingInformations/index'

import {ButtonActionWithIconSmallDark} from '~/components/Buttons/styles'

import {
  TrackingDetailMain,
  TrackingDetailLeft,
  TrackingDetailRight
} from './styles';
 
const TrackingDetail = () => {
  return (
    <TrackingDetailMain>
      <TrackingDetailLeft>
        <TrackingSteps />
        <TrackingMicroSteps />
      </TrackingDetailLeft>
      <TrackingDetailRight>
        <TrackingUtility />
        <TrackingInformations />
        <ButtonActionWithIconSmallDark>
          <PrintIcon />Gerar etiqueta
        </ButtonActionWithIconSmallDark>
      </TrackingDetailRight>
    </TrackingDetailMain>
  );
}
 
export default TrackingDetail;
