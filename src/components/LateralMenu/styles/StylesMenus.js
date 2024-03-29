import styled from 'styled-components';
import {
  black,
  black_text,
  gray_step,
  purple_rain,
  purple_main
} from '../../../styles/Colors';

export const MenuContainer = styled.ul`
  padding-left: 10px;
  font-size: 14px;
  color: ${black_text};
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  height: 40px;
  position: relative;
  cursor: pointer;
  margin-left: 20px;
  &:hover {
    background-color: ${purple_main};
    margin-left: -30px;
    padding-left: 50px;
    width: 260px;
    color: ${purple_rain};
    a {
      color: ${purple_rain};
    }
  }
`;

export const MenuIcon = styled.i`
  margin-right: 10px;
`;

export const MenuTextItem = styled.p`
  letter-spacing: 1px;
    & a {
      color: ${black_text};
    }
`;

export const MenuLaterals = styled.div`
  padding: 30px 20px 0 20px;
  height: 100%;
  position: relative;
`;

export const MenuTitleRefer = styled.div`
  color: ${black}; 
  margin-bottom: 15px;
  letter-spacing: 0
  margin-top: 20px;
`;

export const MenuSeparator = styled.div`
  border-bottom: 1px solid ${gray_step};
  width: 100%;
  margin: 5px;
`;


