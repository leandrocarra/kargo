import styled from 'styled-components';
import {
  white,
  green_default,
  green_effect_one,
  green_effect_two,
  green_effect_three
} from '../../../styles/Colors';

export const Button = styled.button`
  box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.60);
  width: 360px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  outline: 0 none;
  font-size: 23px;
  font-weight: 700;
  border: 0 none;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover {
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 
    0px 4px 5px 0px rgba(0,0,0,0.14),
    0px 1px 10px 0px rgba(0,0,0,0.12);
  }
  &:active {
    margin-top: 1px;
    box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.10);
  }
`;

export const ButtonSuccess = styled(Button)`
  color: ${white};
  background-color: ${green_default};
  &:hover {
    background: $color_green_effect_one linear-gradient(180deg,${green_effect_two},${green_effect_one}) repeat-x;
    border-color: ${green_effect_three};
  }
`;

export const ButtonAction = styled(Button)`
  color: ${white};
  background-color: #5D92F4;
  width: 80%;
  font-weight: 400;
  margin: 0 auto;
  &:hover {
    background-color: rgb(65, 102, 170);
    border-color: ${green_effect_three};
  }
`;

export const ButtonActionWithIcon = styled(Button)`
  color: ${white};
  background-color: #5D92F4;
  width: 80%;
  font-weight: 400;
  margin: 0 auto;
  svg {
    margin-right: 5px;
  }
  &:hover {
    background-color: rgb(65, 102, 170);
    border-color: ${green_effect_three};
  }
`;

export const ButtonActionSmall = styled(Button)`
  color: ${white};
  background-color: #5D92F4;
  width: 20%;
  height: 40px;
  font-size: 16px;
  font-weight: 700;
  float: right;
  &:hover {
    background-color: rgb(65, 102, 170);
    border-color: ${green_effect_three};
  }
`;

export const ButtonActionWithIconSmall = styled(Button)`
  height: 40px;
  color: ${white};
  background-color: #5D92F4;
  font-size: 14px;
  width: 100%;
  font-weight: 400;
  margin: 0 auto;
  svg {
    margin-right: 5px;
  }
  &:hover {
    background-color: rgb(65, 102, 170);
    border-color: ${green_effect_three};
  }
`;

export const ButtonActionWithIconSmallDark = styled(Button)`
  height: 40px;
  color: ${white};
  background-color: #015EA2;
  font-size: 14px;
  width: 70%;
  font-weight: 400;
  margin: 0 auto;
  svg {
    margin-right: 5px;
  }
  &:hover {
    background-color: rgb(65, 102, 170);
    border-color: ${green_effect_three};
  }
`;

export const ButtonActionOnlyIcon = styled(Button)`
  height: 43px;
  color: ${white};
  background-color: #5D92F4;
  font-size: 12px;
  width: 12%;
  font-weight: 400;
  margin: 0 auto;
  box-shadow: none;
  margin-right: -2px;
  position: relative;
  top: -1px;
  margin-bottom: -3px;
  border-radius: 0 4px 4px 0;
  &:hover {
    background-color: rgb(65, 102, 170);
    border-color: ${green_effect_three};
  }
`;

export const ButtonCopy = styled(Button)`
  height: 25px;
  color: #2E9CC3;
  background-color: #D0ECF5;
  font-size: 12px;
  width: 60px;
  font-weight: 400;
  margin: 0 auto;
  box-shadow: none;
  &:hover {
    background-color: rgb(93, 146, 244);
    border-color: ${green_effect_three};
    color: #fff;
  }
`;