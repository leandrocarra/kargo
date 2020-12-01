import React from 'react';

import Styles from '../../styles/Componentes/User/User.module.scss';

function User() {
  return (
    <div className={Styles.user__wrapper}>
      <div className={Styles.user__image}></div>
      <p className={Styles.user__name}>Anderson Calixto</p>
    </div>
  );
}

export default User;