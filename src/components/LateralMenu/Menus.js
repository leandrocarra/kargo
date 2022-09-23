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
      <MenuContainer>
        <MenuItem>
          <MenuIcon><Receipt /></MenuIcon>
          <MenuTextItem>
            <Link to="/dashboard">
              Dashboard
            </Link>
          </MenuTextItem>
        </MenuItem>
        <MenuItem>
          <MenuIcon><ViewList /></MenuIcon>
          <MenuTextItem>
            <Link to="/vendas">
              Vendas
            </Link>
          </MenuTextItem>
        </MenuItem>
        <MenuItem>
          <MenuIcon><Assessment /></MenuIcon>
          <MenuTextItem>
            <Link to="/financeiro">
              Financeiro
            </Link>
          </MenuTextItem>
        </MenuItem>
        <MenuItem>
          <MenuIcon><Assessment /></MenuIcon>
          <MenuTextItem>
            <Link to="/profile">
              Perfil
            </Link>
          </MenuTextItem>
        </MenuItem>
        <MenuItem>
          <MenuIcon><Assessment /></MenuIcon>
          <MenuTextItem>
            <Link to="/integracao">
              Integração
            </Link>
          </MenuTextItem>
        </MenuItem>
        <MenuItem>
          <MenuIcon><Assessment /></MenuIcon>
          <MenuTextItem>
            <Link to="/relatorios">
              Relatórios
            </Link>
          </MenuTextItem>
        </MenuItem>
        <MenuItem>
          <MenuIcon><Assessment /></MenuIcon>
          <MenuTextItem>
            <Link to="/ajuda">
              Ajuda
            </Link>
          </MenuTextItem>
        </MenuItem>
        <MenuItem>
          <MenuIcon><Assessment /></MenuIcon>
          <MenuTextItem>
            <Link to="/fale-conosco">
              Fale conosco
            </Link>
          </MenuTextItem>
        </MenuItem>
      </MenuContainer>
    </MenuLaterals>
  );
}

export default Menus;