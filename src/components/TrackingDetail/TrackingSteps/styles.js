import styled from 'styled-components';
import {blue_ball, gray_step, white, gray_cb} from '../../../styles/Colors';

export const TrackingStep = styled.div`
  margin-top: -30px;
`;

export const TrackingHeader = styled.div`
  display: flex;
  align-items: center;
  margin-top: -30px;
  margin-bottom: 50px;
  svg {
    font-size: 20px;
    margin-right: 5px;
  }
  span {
    font-size: 14px;
  }
`;

export const StepsContainer = styled.div`
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  width: 585px;
`;

export const StepsLine = styled.span`
  border-bottom: 1px solid ${blue_ball};
  /* width: 80%; */
  width: 467px;
  height: 3px;
  float: left;
  position: absolute;
  top: 37px;
  z-index: 0;
  left: 50px;
`;

export const StepsLineDashed = styled.span`
  border-bottom: 1px solid ${gray_step};
  /* width: 80%; */
  width: 467px;
  height: 3px;
  float: left;
  position: absolute;
  top: 37px;
  z-index: 0;
  left: 50px;
  border-style: dashed;
`;

export const StepsContainerBall = styled.div`
  float: left;
  text-align: center;
  /* width: 25%; */
  width: 145px;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
`;

export const StepsBall = styled.div`
  border-radius: 50%;
  background-color: ${blue_ball};
  border: 1px solid ${blue_ball};
  width: 75px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StepsBallEmpty = styled.div`
  border-radius: 50%;
  background-color: ${white};
  border: 1px solid ${gray_step};
  width: 75px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StepsWrapperTitle = styled.p`
  width: 75px;
  text-align: center;
`;

export const StepsTitle = styled.p`
  color: ${blue_ball};
  font-size: 14px;
  font-weight: 400;
  margin-top: 5px;
`;

export const StepsTitleEmpty = styled.p`
  color: ${gray_cb};
  font-size: 14px;
  font-weight: 400;
  margin-top: 5px;
`;

export const StepFullBall = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export const StepEmptyBall = styled.section`
  position: relative;
  top: 0;
  left: 0;
`;

