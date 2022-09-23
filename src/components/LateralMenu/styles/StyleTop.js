import styled from 'styled-components';
import {white} from '../../../styles/Colors';

export const TopWrapper = styled.div`
  height: 72px;
  background-color: ${white};
  padding: 0 0 0 20px;
`;

export const TopLogo = styled.i`
  overflow: hidden;
  float: left;
  margin-top: 20px;
  img {
    float: left;
    width: 100%;
    max-width: 84px;
    min-width: 53px;
  }
`;

