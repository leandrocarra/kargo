import styled from 'styled-components';
import {blue_fit, blue_default, white} from '../../../../styles/Colors';

export const WrapperLeft = styled.section`
  float: left;
  height: 100vh;
  background-color: ${white};
  width: 260px;
  color: ${blue_default};
  overflow-y: hidden;
  position: fixed;
`;

export const WrapperRight = styled.section`
  float: left;
  height: 100%;
  margin-left: 260px;
  min-height: 100vh;
  overflow: hidden;
  &::-webkit-scrollbar-thumb {
    background-color: ${white};
  }
`;

export const ContentArea = styled.section`
  border-radius: 8px 8px 0px 0px;
  height: 100%;
  width: 98%;
  margin-top: 5px;
  min-height: 100vh;
  padding: 20px;
  overflow: hidden;
  margin-top: 72px;
  background-color: ${blue_fit};
`;