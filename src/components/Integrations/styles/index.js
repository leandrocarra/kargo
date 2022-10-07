import styled from 'styled-components';
import {
  gray_area,
  white,
  green_default,
  green_effect_one,
  green_effect_two,
  green_effect_three
} from '../../../styles/Colors';

export const IntegrationMain = styled.div`
  input, input[type=text],select, textarea {
    border-radius: 4px;
    border: 1px solid ${gray_area};
    padding: 10px 15px;
    outline: 0 none;
    font-size: 14px;
    box-sizing: border-box;
    width: 100%;
    background-color: transparent;
    margin-bottom: 30px;
  }
  label {
    margin-top: 30px;
    display: block;
  }
`;

export const IntegrationContent = styled.div`
  overflow: hidden;
  margin-bottom: 20px;
`;

export const ButtonOption = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  outline: 0px;
  border: 0px;
  margin: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  line-height: 1.75;
  min-width: 64px;
  padding: 6px 16px;
  margin-right: 10px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  color: rgb(255, 255, 255);
  background-color: rgb(33, 150, 243);
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
  font-weight: 500;
  border-radius: 4px;
`;

export const ButtonTracking = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  outline: 0px;
  border: 0px;
  margin: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  line-height: 1.75;
  min-width: 64px;
  padding: 6px 16px;
  margin-right: 10px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-weight: 500;
  border-radius: 4px;
  color: ${white};
  background-color: ${green_default};
  &:hover {
    background: $color_green_effect_one linear-gradient(180deg,${green_effect_two},${green_effect_one}) repeat-x;
    border-color: ${green_effect_three};
  }
`;

export const IntegrationListMain = styled.div`
  overflow: hidden;
  margin-bottom: 20px;
  ul {
    overflow: hidden;
  };
  li {
    overflow: hidden;
    border-bottom: 1px solid;
    padding: 30px 0;
    div {
      float: left;
      overflow: hidden;
      width: 20%;
      text-align: center;
    }
  }
`;

