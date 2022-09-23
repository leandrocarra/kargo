import styled from 'styled-components';
import {gray_area, gray_markup, gray_line, white} from '../../../styles/Colors';

export const SearchContainer = styled.div`
  background-color: ${white};
  height: 72px;
  //box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.15);
  display: flex;
  align-items: center;
`;

export const SearchContent = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  border: 1px solid ${gray_line};
  padding: 0 0 0 10px;
  border-radius: 4px;
`;

export const Input = styled.input`
  border-radius: 4px;
  border: 0 none;
  padding: 10px 15px;
  outline: 0 none;
  font-size: 14px;
  box-sizing: border-box;
  width: 80%;
  background-color: transparent;
  letter-spacing: 1px;
  float: left;
  &::-webkit-input-placeholder { /* Edge */
    color: ${gray_area};
  }
  &:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: ${gray_area};
  }
  &::placeholder {
    color: ${gray_area};
  }
`;

export const SearchIcon = styled.div`
  float: left;
  color: ${gray_area};
`;
