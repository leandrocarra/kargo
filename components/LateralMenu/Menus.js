import React from 'react';

import Styles from '../../styles/Componentes/LateralMenu/Menu.module.scss';
import {
  Receipt,
  ViewList,
  Assessment,
} from '@material-ui/icons/';

function Menus() {
  return (
    <>
      <h3 className={Styles.menu__title}>Dashboard</h3>
      <ul className={Styles.menu__containerMenus}>
        <li className={Styles.menu__item}>
          <i className={Styles.menu__icon}><Receipt /></i>
          <p className={Styles.menu__textItem}>Guia manual</p>
        </li>
        <li className={Styles.menu__item}>
          <i className={Styles.menu__icon}><ViewList /></i>
          <p className={Styles.menu__textItem}>Tracking</p>
        </li>
        <li className={Styles.menu__item}>
          <i className={Styles.menu__icon}><Assessment /></i>
          <p className={Styles.menu__textItem}>Métricas</p>
        </li>
      </ul>
    </>
  );
}

export default Menus;