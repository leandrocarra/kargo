import React from 'react';

import Styles from '../../styles/Componentes/Forms/Destiny.module.scss';

function TypeTextForm(label, important=true) {
  return (
    <>
      <div className={Styles.form__labelContainer}>
        <label><i>{important ? '*' : '' }</i>{label} : </label>
      </div>
      <div className={Styles.form__inputContainer}>
        <input type='text' />
      </div>
    </>
  )
}

function ComboBoxForm(label, list ) {
  return (
    <>
      <div className={Styles.form__labelContainer}>
        <label><i>*</i>{label} : </label>
      </div>
      <div className={Styles.form__inputContainer}>
        <select>
          {list.map((item) => {
            return (
              <option key={item}>{item}</option>
            )
          })};
        </select>
      </div>
    </>
  )
}

function TicketBoxForm(label, list ) {
  return (
    <>
      <div className={Styles.form__labelContainer}>
        <label><i>*</i>{label} : </label>
      </div>
      <div className={Styles.form__inputContainer}>
        <div className={Styles.form__inputCheckboxContainer}>
          {list.map((item) => {
            return (
              <span key={item}>
                <input type='checkbox' value={item} name={item}/>
                <label>{item}</label>
              </span>
            )
          })}
        </div>
      </div>
    </>
  )
}

export function DestinyForm() {
  return (
    <div className={Styles.form__container}>
      <div className={Styles.form__Full_line}>
        {TypeTextForm('Nome')}
      </div>
      <div className={Styles.form__Full_line}>
        {TypeTextForm('Morada')}
      </div>
      <div className={Styles.form__Full_line}>
        <div className={Styles.form__half_line}>
          {TypeTextForm('Telefone')}
        </div>
        <div className={Styles.form__half_line}>
          {TypeTextForm('Codigo Postal')}
        </div>
      </div>
      <div className={Styles.form__Full_line}>
        {TypeTextForm('Email')}
      </div>
      <div className={Styles.form__Full_line}>
        {TypeTextForm('Localidade')}
      </div>
      <div className={Styles.form__Full_line}>
        <div className={Styles.form__half_line}>
          {TypeTextForm('NIF')}
        </div>
        <div className={Styles.form__half_line}>
          {TypeTextForm('Pais')}
        </div>
      </div>
    </div>
  );
}

export function DataProduct() {
  const list = ['back', 'fragik', 'gived']
  return (
    <div className={Styles.form__container}>
      <div className={Styles.form__Full_line}>
        <div className={Styles.form__half_line}>
          {TypeTextForm('Volumes')}
        </div>
        <div className={Styles.form__half_line}>
          {TypeTextForm('Ref. Interna')}
        </div>
      </div>
      <div className={Styles.form__Full_line}>
        <div className={Styles.form__half_line}>
          {ComboBoxForm('Produto', list)}
        </div>
        <div className={Styles.form__half_line}>
          <div className={Styles.form__small_line}>
            {TypeTextForm('Peso')}
          </div>
          <div className={Styles.form__small_line}>
            {TypeTextForm('Vol.(m3)', false)}
          </div>
        </div>
      </div>
      <div className={Styles.form__Full_line}>
        <div className={Styles.form__half_line}>
          {TypeTextForm('Mercadoria')}
        </div>
        <div className={Styles.form__half_line}>
          {TypeTextForm('Valor Declarado')}
        </div>
      </div>
      <div className={Styles.form__Full_line}>
        <div className={Styles.form__half_line}>
          {TypeTextForm('Observações')}
        </div>
        <div className={Styles.form__half_line}>
          {TicketBoxForm('Serviços', list)}
        </div>
      </div>
    </div>
  );
}