import styled from 'styled-components';
import {blue_ball, gray_step, gray_title, gray_cb} from '../../../styles/Colors';

export const MicroStepContainer = styled.section`
  overflow: hidden;
  color: ${gray_title}
`;

export const MicroStepContent = styled.div`
  padding-bottom: 30px;
  border-bottom: 1px solid ${gray_step};
  margin-bottom: 30px;
`;

export const MicroStepDetail = styled.div`
  width: 480px;
  margin: 0 auto;
`;

export const MicroStepActualStatus = styled.h2`
  font-size: 20px;
  color: ${blue_ball};
  margin-bottom: 5px;
`;

export const MicroStepWrapperDate = styled.div`
  float: left;
`;

export const MicroStepWrapperIcons = styled.div`
  float: left;
  width: 70px;
  position: relative;
`;

export const MicroStepWrapperDescriptions = styled.div`
  float: left;
  width: 253px;
`;

export const MicroStepLine = styled.div`
  /* border: 1px solid; */
  /* height: 300px; */
  /* width: 70px; */
`;
export const MicroStepLineIcon = styled.div`
  /* border: 1px solid; */
  /* height: 300px; */
  width: 70px;
`;

export const MicroStepBgIcon = styled.div`
  background-color: ${gray_cb};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const MicroStepLineTrack = styled.div`
  border: 1px solid ${gray_cb};
  border-style: dashed;
  width: 60px;
  transform: rotate(90deg);
  margin: 0 auto;
  position: relative;
  z-index: 0;
  top: -30px;
`;

export const MicroStepDateInfo = styled.p`
  min-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MicroStepDetailInfo = styled.p`
  min-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  strong {
    color: #000;
    line-height: 21px;
  }
`;

export const MicroStepStructure = styled.div`
  height: 90px;
  position: relative;
  display: flex;
  align-items: flex-end;
`;