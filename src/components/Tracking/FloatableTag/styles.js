import styled from 'styled-components';
import {
  white,
  gray_line
} from '../../../styles/Colors';

export const FloatableTagContainer = styled.div`
  position: fixed;
  right: 0;
  top: 100px;
  min-height: 300px;
  width: 200px;
  background-color: ${white};
  z-index: 2;
  box-shadow: 4px 4px 30px 5px rgba(0, 0, 0, 0.25);
  padding: 16px;
  border-radius: 4px;
  transition: all .233s ease-in-out;
  text-align: center;
  max-height: 550px;
  overflow-y: auto;
  overflow-x: hidden;
  ul {
    margin-top: 20px;
  }
  li {
    border-bottom: 1px solid ${gray_line};
    padding: 8px 16px;
    width: 125%;
    margin-left: -16px;
    font-weight: 200;
    transition: all .233s ease-in-out;
  } 
`;

export const FloatableTagTitle = styled.h2`
  font-size: 14px;
  line-height: 20px;
`;

export const FloatableTagPrint = styled.div`
  margin-top: 25px
`;