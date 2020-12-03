import axios from 'axios';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import Styles from '../../styles/Componentes/Forms/Destiny.module.scss';
import Button from '../../styles/braga/_buttons.module.scss';


 export const DestinyForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        morada: '',
        phone: '',
        postalCode: '',
        email: '',
        local: '',
        nif: '',
        country: '',
        volume: '',
        reference: '',
        product: '',
        weight:'',
        mercadoria: '',
        vol: '',
        declared: '',
        observation: '',
        services: ''
      }}
      validationSchema={Yup.object({
        name: Yup.string().required(),
        morada: Yup.string().required(),
        phone: Yup.string().required(),
        postalCode: Yup.string().required(),
        email: Yup.string().required(),
        local: Yup.string().required(),
        nif: Yup.string().required(),
        country: Yup.string().required(),
        volume: Yup.string().required(),
        reference: Yup.string().required(),
        product: Yup.string().required(),
        weight:Yup.string().required(),
        mercadoria: Yup.string().required(),
        vol: Yup.string().required(),
        declared: Yup.string().required(),
        observation: Yup.string(),
      })}
      onSubmit={(values) => {
        console.log(JSON.stringify(values, null, 2));
      }}
    >
      <Form className={Styles.form__container} >
        <div className={Styles.form__Full_line}>
          <div className={Styles.form__labelContainer}>
            <label><i>*</i>Nome : </label>
          </div>
          <div className={Styles.form__inputContainer}>
            <ErrorMessage component="span" name="name" />
            <Field name="name" type="text" />
          </div>
        </div>
        <div className={Styles.form__Full_line}>
          <div className={Styles.form__labelContainer}>
            <label><i>*</i>Morada : </label>
          </div>
          <div className={Styles.form__inputContainer}>
            <ErrorMessage component="span" name="morada" />
            <Field name="morada" type="text" />
          </div>
        </div>
        <div className={Styles.form__Full_line}>
          <div className={Styles.form__half_line}>
            <div className={Styles.form__labelContainer}>
              <label><i>*</i>Telefone : </label>
            </div>
            <div className={Styles.form__inputContainer}>
              <ErrorMessage component="span" name="phone" />
              <Field name="phone" type="text" />
            </div>
          </div>
          <div className={Styles.form__half_line}>
            <div className={Styles.form__labelContainer}>
              <label><i>*</i>Codigo Postal : </label>
            </div>
            <div className={Styles.form__inputContainer}>
              <ErrorMessage component="span" name="postalCode" />
              <Field name="postalCode" type="text" />
            </div>
          </div>
        </div>
        <div className={Styles.form__Full_line}>
          <div className={Styles.form__labelContainer}>
            <label><i>*</i>Email : </label>
          </div>
          <div className={Styles.form__inputContainer}>
            <ErrorMessage component="span" name="email" />
            <Field name="email" type="text" />
          </div>
        </div>
        <div className={Styles.form__Full_line}>
          <div className={Styles.form__labelContainer}>
            <label><i>*</i>Localidade : </label>
          </div>
          <div className={Styles.form__inputContainer}>
            <ErrorMessage component="span" name="local" />
            <Field name="local" type="text" />
          </div>
        </div>
        <div className={Styles.form__Full_line}>
          <div className={Styles.form__half_line}>
            <div className={Styles.form__labelContainer}>
              <label><i>*</i>NIF : </label>
            </div>
            <div className={Styles.form__inputContainer}>
              <ErrorMessage component="span" name="nif" />
              <Field name="nif" type="text" />
            </div>
          </div>
          <div className={Styles.form__half_line}>
            <div className={Styles.form__labelContainer}>
              <label><i>*</i>Pais : </label>
            </div>
            <div className={Styles.form__inputContainer}>
              <ErrorMessage component="span" name="country" />
              <Field name="country" type="text" />
            </div>
          </div>
        </div>
        <div className={Styles.form__title}>DADOS DO PRODUTO</div>
        <div className={Styles.form__Full_line}>
          <div className={Styles.form__half_line}>
            <div className={Styles.form__labelContainer}>
              <label><i>*</i>Volumes : </label>
            </div>
            <div className={Styles.form__inputContainer}>
              <ErrorMessage component="span" name="volume" />
              <Field name="volume" type="text" />
            </div>
          </div>
          <div className={Styles.form__half_line}>
            <div className={Styles.form__labelContainer}>
              <label><i>*</i>Ref. Interna : </label>
            </div>
            <div className={Styles.form__inputContainer}>
              <ErrorMessage component="span" name="reference" />
              <Field name="reference" type="text" />
            </div>
          </div>
        </div>
        <div className={Styles.form__Full_line}>
          <div className={Styles.form__half_line}>
            <div className={Styles.form__labelContainer}>
              <label><i>*</i>Produto : </label>
            </div>
            <div className={Styles.form__inputContainer}>
              <ErrorMessage component="span" name="product" />
              <Field name="product" type="text" />
            </div>
          </div>
          <div className={Styles.form__half_line}>
            <div className={Styles.form__small_line}>
              <div className={Styles.form__labelContainer}>
                <label><i>*</i>Peso : </label>
              </div>
              <div className={Styles.form__inputContainer}>
                <ErrorMessage component="span" name="weight" />
                <Field name="weight" type="text" />
              </div>
            </div>
            <div className={Styles.form__small_line}>
              <div className={Styles.form__labelContainer}>
                <label>Vol. (m3) : </label>
              </div>
              <div className={Styles.form__inputContainer}>
                <ErrorMessage component="span" name="vol" />
                <Field name="vol" type="text" />
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.form__Full_line}>
          <div className={Styles.form__half_line}>
            <div className={Styles.form__labelContainer}>
              <label><i>*</i>Mercadoria : </label>
            </div>
            <div className={Styles.form__inputContainer}>
              <ErrorMessage component="span" name="mercadoria" />
              <Field name="mercadoria" type="text" />
            </div>
          </div>
          <div className={Styles.form__half_line}>
            <div className={Styles.form__labelContainer}>
              <label><i>*</i>Valor Declarado : </label>
            </div>
            <div className={Styles.form__inputContainer}>
              <ErrorMessage component="span" name="declared" />
              <Field name="declared" type="text" />
            </div>
          </div>
        </div>
        <div className={Styles.form__Full_line}>
          <div className={Styles.form__half_line}>
            <div className={Styles.form__labelContainer}>
              <label>Observações : </label>
            </div>
            <div className={Styles.form__inputContainer}>
              <ErrorMessage component="span" name="observation" />
              <Field name="observation" type="text" />
            </div>
          </div>
          <div className={Styles.form__half_line}>
            <div className={Styles.form__labelContainer}>
              <label>Serviços : </label>
            </div>
            <div className={Styles.form__inputContainer}>
              <div className={Styles.form__inputCheckboxContainer}>
                <Field name="services" type="checkbox" value="back"/>
                <label>Black</label>
                <Field name="services" type="checkbox" value="fragil"/>
                <label>Fragil</label>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.form__bottomContent}>
          <button className={Button.button__success} type="submit" onClick={teste}>Criar</button>
        </div>
      </Form>
    </Formik>
  );
}
