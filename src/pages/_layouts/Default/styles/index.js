import styled from 'styled-components';
import {blue_markup, blue_default, blue_area} from '../../../../styles/Colors';

export const WrapperLeft = styled.section`
  float: left;
  height: 1110px;
  background-color: ${blue_markup};
  width: 260px;
  color: ${blue_default};
  overflow-y: hidden;
`;

export const WrapperRight = styled.section`
  float: left;
  height: 100%;
  width: calc(100% - 260px);
  &::-webkit-scrollbar-thumb {
    background-color: ${blue_area};
  }
`;

export const ContentArea = styled.section`
  padding: 30px;
  height: 100%;
`;