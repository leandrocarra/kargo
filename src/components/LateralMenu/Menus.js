import React from 'react';

import {
  Receipt,
  ViewList,
  Assessment,
} from '@material-ui/icons/';
import {Link} from "react-router-dom";

import Header from './Header';

import {
  MenuTitle,
  MenuContainer,
  MenuItem,
  MenuIcon,
  MenuTextItem,
  MenuLaterals
} from './styles/StylesMenus';

function Menus() {
  return (
    <MenuLaterals>
      <Header />
      <MenuTitle>Dashboard</MenuTitle>
      <MenuContainer>
        <MenuItem>
          <MenuIcon><Receipt /></MenuIcon>
          <MenuTextItem>
            <Link to="/registro-de-pacote">
              Guia manual
            </Link>
          </MenuTextItem>
        </MenuItem>
        <MenuItem>
          <MenuIcon><ViewList /></MenuIcon>
          <MenuTextItem>
            <Link to="/tracking">
              Tracking
            </Link>
          </MenuTextItem>
        </MenuItem>
        <MenuItem>
          <MenuIcon><Assessment /></MenuIcon>
          <MenuTextItem>
            <Link to="/metricas">
              Metricas
            </Link>
          </MenuTextItem>
        </MenuItem>
      </MenuContainer>
    </MenuLaterals>
  );
}

export default Menus;