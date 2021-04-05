import styled from 'styled-components';
import {gray_title, gray_grade, blue_hipe} from '../../../styles/Colors';

export const UtilityTop = styled.div`
  padding-bottom: 27px;
  border-bottom: 1px solid ${gray_grade};
  margin-bottom: 27px;
`;

export const UtilityCode = styled.div`
  i {
    background-color: ${gray_grade};
    height: 35px;
    width: 35px;
    padding: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    float: left;
    margin-right: 10px;
  };
  strong {
    font-weight: 700;
    margin-bottom: 4px;
    display: block;
  }
`;

export const UtilityCopy = styled.div`
  float: right;
`;

export const UtilityBottom = styled.div`
  p {
    color: ${gray_title};
    font-size: 14px;
  }
  a {
    color: ${blue_hipe};
    font-size: 12px;
    &:hover {
      text-decoration: underline;
    }
  }
`;
