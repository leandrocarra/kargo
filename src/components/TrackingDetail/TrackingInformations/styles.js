import styled from 'styled-components';
import {black_text, gray_title} from '../../../styles/Colors';

export const InformationsContainer = styled.ul`
  overflow: hidden;
`;

export const InformationsItem = styled.li`
  margin-bottom: 10px;
  font-size: 12px;
  span {
    color: ${gray_title};
  }
  strong {
    color: ${black_text};
  }
`;
