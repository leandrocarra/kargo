import styled from 'styled-components';
import {white} from '../../../styles/Colors';

export const BoxContainer = styled.div`
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.10);
  min-height: 30px;
  min-width: 30px;
  background-color: ${white};
  border-radius: 10px;
  padding: 30px;
  width: 100%;
  margin-bottom: 30px;
`;

export const BoxContainerCenter= styled.div`
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.10);
  min-height: 30px;
  min-width: 30px;
  background-color: ${white};
  border-radius: 10px;
  padding: 40px 70px;
  width: 70%;
  margin-bottom: 30px;
  margin: 0 auto;
  text-align: center;
  height: 477px;
  top: 50%;
  position: relative;
  margin-top: -235px;
`;

export const BoxContentTitle = styled.div`
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 30px;
  text-transform: uppercase;
`;

export const HalfBoxContainer = styled.div`
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.10);
  min-height: 30px;
  min-width: 30px;
  background-color: ${white};
  border-radius: 10px;
  padding: 30px;
  width: 45%;
  margin-bottom: 30px;
  float: left;
  margin: 0 2%;
`;
