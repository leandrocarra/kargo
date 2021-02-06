import React from 'react';

import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import BoxContent from '~/components/BoxContent';

import * as Styles from '../styles';
import {ButtonSuccess} from '~/components/Buttons/styles'

const DestinyForm = () => {
  return (
    <BoxContent>
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
        <Form>
          <Styles.FormTitle>DESTINATARIO</Styles.FormTitle>
          <Styles.FormContainer>
            <Styles.FormFullLine>
                <Styles.FormLabelContainer>
                  <label><i>*</i>Nome : </label>
                </Styles.FormLabelContainer>
                <Styles.FormInputContainer>
                  <ErrorMessage component="span" name="name" />
                  <Field name="name" type="text" />
                </Styles.FormInputContainer>
              </Styles.FormFullLine>
            <Styles.FormFullLine>
              <Styles.FormLabelContainer>
                <label><i>*</i>Morada : </label>
              </Styles.FormLabelContainer>
              <Styles.FormInputContainer>
                <ErrorMessage component="span" name="morada" />
                <Field name="morada" type="text" />
              </Styles.FormInputContainer>
            </Styles.FormFullLine>
            <Styles.FormFullLine>
              <Styles.FormHalfLine>
                <Styles.FormLabelContainer>
                  <label><i>*</i>Telefone : </label>
                </Styles.FormLabelContainer>
                <Styles.FormInputContainer>
                  <ErrorMessage component="span" name="phone" />
                  <Field name="phone" type="text" />
                </Styles.FormInputContainer>
              </Styles.FormHalfLine>
              <Styles.FormHalfLine>
                <Styles.FormLabelContainer>
                  <label><i>*</i>Codigo Postal : </label>
                </Styles.FormLabelContainer>
                <Styles.FormInputContainer>
                  <ErrorMessage component="span" name="postalCode" />
                  <Field name="postalCode" type="text" />
                </Styles.FormInputContainer>
              </Styles.FormHalfLine>
            </Styles.FormFullLine>
            <Styles.FormFullLine>
              <Styles.FormLabelContainer>
                <label><i>*</i>Email : </label>
              </Styles.FormLabelContainer>
              <Styles.FormInputContainer>
                <ErrorMessage component="span" name="email" />
                <Field name="email" type="text" />
              </Styles.FormInputContainer>
            </Styles.FormFullLine>
            <Styles.FormFullLine>
              <Styles.FormLabelContainer>
                <label><i>*</i>Localidade : </label>
              </Styles.FormLabelContainer>
              <Styles.FormInputContainer>
                <ErrorMessage component="span" name="local" />
                <Field name="local" type="text" />
              </Styles.FormInputContainer>
            </Styles.FormFullLine>
            <Styles.FormFullLine>
              <Styles.FormHalfLine>
                <Styles.FormLabelContainer>
                  <label><i>*</i>NIF : </label>
                </Styles.FormLabelContainer>
                <Styles.FormInputContainer>
                  <ErrorMessage component="span" name="nif" />
                  <Field name="nif" type="text" />
                </Styles.FormInputContainer>
              </Styles.FormHalfLine>
              <Styles.FormHalfLine>
                <Styles.FormLabelContainer>
                  <label><i>*</i>Pais : </label>
                </Styles.FormLabelContainer>
                <Styles.FormInputContainer>
                  <ErrorMessage component="span" name="country" />
                  <Field name="country" type="text" />
                </Styles.FormInputContainer>
              </Styles.FormHalfLine>
            </Styles.FormFullLine>
            <Styles.FormTitle>DADOS DO PRODUTO</Styles.FormTitle>
            <Styles.FormFullLine>
              <Styles.FormHalfLine>
                <Styles.FormLabelContainer>
                  <label><i>*</i>Volumes : </label>
                </Styles.FormLabelContainer>
                <Styles.FormInputContainer>
                  <ErrorMessage component="span" name="volume" />
                  <Field name="volume" type="text" />
                </Styles.FormInputContainer>
              </Styles.FormHalfLine>
              <Styles.FormHalfLine>
                <Styles.FormLabelContainer>
                  <label><i>*</i>Ref. Interna : </label>
                </Styles.FormLabelContainer>
                <Styles.FormInputContainer>
                  <ErrorMessage component="span" name="reference" />
                  <Field name="reference" type="text" />
                </Styles.FormInputContainer>
              </Styles.FormHalfLine>
            </Styles.FormFullLine>
            <Styles.FormFullLine>
              <Styles.FormHalfLine>
                <Styles.FormLabelContainer>
                  <label><i>*</i>Produto : </label>
                </Styles.FormLabelContainer>
                <Styles.FormInputContainer>
                  <ErrorMessage component="span" name="product" />
                  <Field name="product" type="text" />
                </Styles.FormInputContainer>
              </Styles.FormHalfLine>
              <Styles.FormHalfLine>
                <Styles.FormSmallLine>
                  <Styles.FormLabelContainer>
                    <label><i>*</i>Peso : </label>
                  </Styles.FormLabelContainer>
                  <Styles.FormInputContainer>
                    <ErrorMessage component="span" name="weight" />
                    <Field name="weight" type="text" />
                  </Styles.FormInputContainer>
                </Styles.FormSmallLine>
                <Styles.FormSmallLine>
                  <Styles.FormLabelContainer>
                    <label>Vol. (m3) : </label>
                  </Styles.FormLabelContainer>
                  <Styles.FormInputContainer>
                    <ErrorMessage component="span" name="vol" />
                    <Field name="vol" type="text" />
                  </Styles.FormInputContainer>
                </Styles.FormSmallLine>
              </Styles.FormHalfLine>
            </Styles.FormFullLine>
            <Styles.FormFullLine>
              <Styles.FormHalfLine>
                <Styles.FormLabelContainer>
                  <label><i>*</i>Mercadoria : </label>
                </Styles.FormLabelContainer>
                <Styles.FormInputContainer>
                  <ErrorMessage component="span" name="mercadoria" />
                  <Field name="mercadoria" type="text" />
                </Styles.FormInputContainer>
              </Styles.FormHalfLine>
              <Styles.FormHalfLine>
                <Styles.FormLabelContainer>
                  <label><i>*</i>Valor Declarado : </label>
                </Styles.FormLabelContainer>
                <Styles.FormInputContainer>
                  <ErrorMessage component="span" name="declared" />
                  <Field name="declared" type="text" />
                </Styles.FormInputContainer>
              </Styles.FormHalfLine>
            </Styles.FormFullLine>
            <Styles.FormFullLine> 
              <Styles.FormHalfLine>
                <Styles.FormLabelContainer>
                  <label>Observações : </label>
                </Styles.FormLabelContainer>
                <Styles.FormInputContainer>
                  <ErrorMessage component="span" name="observation" />
                  <Field name="observation" type="text" />
                </Styles.FormInputContainer>
              </Styles.FormHalfLine>
              <Styles.FormHalfLine>
                <Styles.FormLabelContainer>
                  <label>Serviços : </label>
                </Styles.FormLabelContainer>
                <Styles.FormInputContainer>
                  <Styles.FormInputCheckboxContainer>
                    <Field name="services" type="checkbox" value="back"/>
                    <label>Black</label>
                    <Field name="services" type="checkbox" value="fragil"/>
                    <label>Fragil</label>
                  </Styles.FormInputCheckboxContainer>
                </Styles.FormInputContainer>
              </Styles.FormHalfLine>
            </Styles.FormFullLine>
            <Styles.FormBottomContent>
              <ButtonSuccess type="submit">Criar</ButtonSuccess>
            </Styles.FormBottomContent>
          </Styles.FormContainer>
        </Form>
      </Formik>
    </BoxContent>
  );
}

export default DestinyForm;