import styled from 'styled-components';
import {green_effect_three} from '../../../styles/Colors';

export const TotalOrderContent = styled.div`
  overflow: hidden;
`;

export const QuantitySelledContent = styled.div`
  overflow: hidden;
`;

export const IconSelled = styled.div`
  float: left;
  overflow: hidden;
  margin-right: 30px
  svg {
    font-size: 90px;
    color: ${green_effect_three}
  }
`;

export const ContentSelled = styled.div`
  float: left;
  overflow: hidden;
  strong {
    display: block;
    margin-bottom: 20px;
    color: ${green_effect_three}
  };
  span {
    display: block;
    font-weight: 900;
    font-size: 40px; 
    color: ${green_effect_three}
  }
`;

