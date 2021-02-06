import React from 'react';

import {
  Receipt,
  ViewList,
  Assessment,
} from '@material-ui/icons/';

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
      <MenuTitle>Dashboard</MenuTitle>
      <MenuContainer>
        <MenuItem>
          <MenuIcon><Receipt /></MenuIcon>
          <MenuTextItem>Guia manual</MenuTextItem>
        </MenuItem>
        <MenuItem>
          <MenuIcon><ViewList /></MenuIcon>
          <MenuTextItem>Tracking</MenuTextItem>
        </MenuItem>
        <MenuItem>
          <MenuIcon><Assessment /></MenuIcon>
          <MenuTextItem>Métricas</MenuTextItem>
        </MenuItem>
      </MenuContainer>
    </MenuLaterals>
  );
}

export default Menus;