import React from 'react';

import {
  Receipt,
  ViewList,
  Assessment,
  AccountBox,
  SyncAlt,
  LocalAtm,
  Help,
  ContactPhone,
  LocalOffer,
  Dashboard
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
          <MenuIcon><Dashboard /></MenuIcon>
          <MenuTextItem>
            <Link to="/dashboard">
              Dashboard
            </Link>
          </MenuTextItem>
        </MenuItem>
        <MenuItem>
          <MenuIcon><LocalOffer /></MenuIcon>
          <MenuTextItem>
            <Link to="/vendas">
              Vendas
            </Link>
          </MenuTextItem>
        </MenuItem>
        <MenuItem>
          <MenuIcon><LocalAtm /></MenuIcon>
          <MenuTextItem>
            <Link to="/financeiro">
              Financeiro
            </Link>
          </MenuTextItem>
        </MenuItem>
        <MenuItem>
          <MenuIcon><AccountBox /></MenuIcon>
          <MenuTextItem>
            <Link to="/profile">
              Perfil
            </Link>
          </MenuTextItem>
        </MenuItem>
        <MenuItem>
          <MenuIcon><SyncAlt /></MenuIcon>
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
          <MenuIcon><Help /></MenuIcon>
          <MenuTextItem>
            <Link to="/ajuda">
              Ajuda
            </Link>
          </MenuTextItem>
        </MenuItem>
        <MenuItem>
          <MenuIcon><ContactPhone /></MenuIcon>
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