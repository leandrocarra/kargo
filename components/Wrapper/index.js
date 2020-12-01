import React from 'react';

import Styles from  '../../styles/Componentes/Wrapper/wrapper.module.scss'

import LateralMenu from '../LateralMenu'
import ContentArea from '../ContentArea'

function wrapper() {
  return (
    <>
      <section className={Styles.wrapper__left}>
        <LateralMenu/>
      </section>
      <section className={Styles.wrapper__right}>
        <ContentArea />
      </section>
    </>
  )
}

export default wrapper;