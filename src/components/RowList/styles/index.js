import styled from 'styled-components';
import {
  gray_area,
  gray_markup,
  black_text,
  white
} from '../../../styles/Colors';

export const RowContainer = styled.div`
  border-bottom: 1px solid;
  padding: 10px 0;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
  label {
    overflow: hidden;
    float: left;
    width: 11.1%;
    font-weight: 500;
    justify-content: center;
    text-align: center;
    display: flex;
    align-items: center;
    height: 50px;
    cursor: pointer;
  }
`;
