import styled from 'styled-components';
import {
  blue_fit,
  green_fit
} from '../../../styles/Colors';

export const SalesDetailContent = styled.div`
  overflow: hidden;
  float: left;
  width: 33%;
  strong {
    display: block;
    margin-bottom: 20px;
  }
  div{
    margin-bottom: 10px
  }
  span {
    font-weight: 500;
    margin-right: 10px;
    font-size: 14px;
  }
  p {
    display: inline;
    font-size: 14px;
    font-weight: 400;
  }
`;

export const SalesDetailsSeparator = styled.div`
  overflow: hidden;
  float: left;
  clear: both;
  width: 100%;
  border-bottom: 1px solid ${blue_fit};
  margin: 30px 0;
`;

export const SalesDetailStatus = styled.div`
  padding: 8px 12px;
  border: 1px solid ${green_fit};
  border-radius: 16px;
  float: left;
  color: ${green_fit};
`;