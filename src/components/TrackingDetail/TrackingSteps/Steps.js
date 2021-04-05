import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { GoGear } from 'react-icons/go';
import { FaShippingFast } from 'react-icons/fa';

import {
  StepsContainer,
  StepsBall,
  StepsTitle,
  StepsContainerBall,
  StepsLine,
  StepsWrapperTitle,
  StepsLineDashed,
  StepsBallEmpty,
  StepsTitleEmpty,
  StepFullBall,
  StepEmptyBall
} from './styles';

const useStyles = makeStyles({
  statusCriado: {
    width: '25%',
    overflow: 'hidden',
  },
  statusAceite: {
    width: '50%',
    overflow: 'hidden',
  },
  statusEmTransito: {
    width: '75%',
    overflow: 'hidden',
  },
  statusEntregue: {
    width: '100%',
    overflow: 'hidden',
  }
});

const FullBalls = () => {
  const classes = useStyles();
  return (
    <StepFullBall className={classes.statusAceite}>
      <StepsLine/>
      <StepsContainerBall>
        <StepsWrapperTitle>
          <StepsBall>
            <CheckIcon style={{fontSize: '50px', color: '#FFF'}}/>
          </StepsBall>
          <StepsTitle>
            Criado
          </StepsTitle>
        </StepsWrapperTitle>
      </StepsContainerBall>

      <StepsContainerBall>
        <StepsWrapperTitle>
          <StepsBall>
            <GoGear size={45} color="#fff"/>
          </StepsBall>
          <StepsTitle>
            Aceite
          </StepsTitle>
        </StepsWrapperTitle>
      </StepsContainerBall>

      <StepsContainerBall>
        <StepsWrapperTitle>
          <StepsBall>
            <FaShippingFast size={40} color="#fff"/>
          </StepsBall>
          <StepsTitle>
            Transito
          </StepsTitle>
        </StepsWrapperTitle>
      </StepsContainerBall>

      <StepsContainerBall>
        <StepsWrapperTitle>
          <StepsBall>
            <LocationOnIcon style={{fontSize: '50px', color: '#FFF'}}/>
          </StepsBall>
          <StepsTitle>
            Entregue
          </StepsTitle>
        </StepsWrapperTitle>
      </StepsContainerBall>
    </StepFullBall>
  )
}

const EmptyBalls = () => (
  <StepEmptyBall>
    <StepsLineDashed/>
    <StepsContainerBall>
      <StepsWrapperTitle>
        <StepsBallEmpty>
          <CheckIcon style={{fontSize: '50px', color: '#CBCBCB'}}/>
        </StepsBallEmpty>
        <StepsTitleEmpty>
          Criado
        </StepsTitleEmpty>
      </StepsWrapperTitle>
    </StepsContainerBall>

    <StepsContainerBall>
      <StepsWrapperTitle>
        <StepsBallEmpty>
          <GoGear size={45} color="#CBCBCB"/>
        </StepsBallEmpty>
        <StepsTitleEmpty>
          Aceite
        </StepsTitleEmpty>
      </StepsWrapperTitle>
    </StepsContainerBall>

    <StepsContainerBall>
      <StepsWrapperTitle>
        <StepsBallEmpty>
          <FaShippingFast size={40} color="#CBCBCB"/>
        </StepsBallEmpty>
        <StepsTitleEmpty>
          Transito
        </StepsTitleEmpty>
      </StepsWrapperTitle>
    </StepsContainerBall>

    <StepsContainerBall>
      <StepsWrapperTitle>
        <StepsBallEmpty>
          <LocationOnIcon style={{fontSize: '50px', color: '#CBCBCB'}}/>
        </StepsBallEmpty>
        <StepsTitleEmpty>
          Entregue
        </StepsTitleEmpty>
      </StepsWrapperTitle>
    </StepsContainerBall>
  </StepEmptyBall>
)
 
const Steps = () => {
  return (
    <StepsContainer>
      <EmptyBalls />
      <FullBalls />
    </StepsContainer>
  );
}
 
export default Steps;
