import styled from 'styled-components';
import {white, blue_area} from '../../../styles/Colors';

export const TopWrapper = styled.div`
  height: 72px;
  background-color: ${blue_area};
  padding: 0 20px;
`;

export const TopIcon = styled.div`
  float: left;
  margin-right: 20px;
  margin-top: 25px;
`;

export const TopMark = styled.div`
  float: left;
  width: 165px;
  height: 60px;
  background-color: ${white};
  border-radius: 0 0 10px 10px;
  padding: 10px;
  -webkit-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
`;
