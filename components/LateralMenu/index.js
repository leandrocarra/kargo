import React from 'react';

import Styles from '../../styles/Componentes/LateralMenu/LateralMenu.module.scss'

import Top from './Top';
import User from '../User';
import Menus from './Menus';

function LateralMenu() {
  return (
    <>
      <Top />
      <div className={Styles.lateralMenu__laterals}>
        {/* <User /> */}
        <Menus />
      </div>
    </>
  );
}

export default LateralMenu;