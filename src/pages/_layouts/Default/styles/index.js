import styled from 'styled-components';
import {blue_fit, blue_default, white} from '../../../../styles/Colors';

export const WrapperLeft = styled.section`
  float: left;
  height: 1110px;
  background-color: ${white};
  width: 260px;
  color: ${blue_default};
  overflow-y: hidden;
`;

export const WrapperRight = styled.section`
  float: left;
  height: 100%;
  min-height: 100vh;
  // width: calc(100% - 260px);
  // background-color: ${blue_fit};
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
  background-color: ${blue_fit};
`;