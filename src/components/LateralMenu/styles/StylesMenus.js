import styled from 'styled-components';
import {blue_feature, yellow_markup} from '../../../styles/Colors';

export const MenuTitle = styled.h3`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 10px;
  color: ${blue_feature};
  margin-top: 30px;
`;

export const MenuContainer = styled.ul`
  padding-left: 10px;
  font-weight: 700;
  font-size: 14px;
  color: ${blue_feature};
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  height: 40px;
  position: relative;
  cursor: pointer;
  &:hover {
    background-color: rgba(0,0,0, .15);
    margin-left: -30px;
    padding-left: 30px;
    width: 260px;
    color: ${yellow_markup};
    a {
      color: ${yellow_markup};
    }
  }
`;

export const MenuIcon = styled.i`
  margin-right: 10px;
`;

export const MenuTextItem = styled.p`
  letter-spacing: 1px;
    & a {
      color: ${blue_feature};
    }
`;

export const MenuLaterals = styled.div`
  padding: 0 20px;
  height: 100%;
  position: relative;
`;

