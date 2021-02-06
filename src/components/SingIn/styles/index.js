import styled from 'styled-components';
import {gray_text, black_text} from '../../../styles/Colors';

export const SingInTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const SingInSubTitle = styled.h3`
  font-size: 20px;
  color: ${gray_text};
  margin-bottom: 70px;
`;

export const SingInContainerButton = styled.div`
  margin-top: 70px;
`;

export const SingInWithOutAccess = styled.a`
  font-size: 16px;
  color: ${black_text};
  text-decoration: underline;
  margin-top: 20px;
  display: block;
`;
