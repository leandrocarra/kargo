import React from 'react';
//import { useDispatch } from 'react-redux';

//import { destinyForm } from '~/store/modules/form/actions';
import {useSingUp} from '../../../context/useSingUp'
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import { BoxContentCenter } from '~/components/BoxContent';

import * as Styles from '../styles';
import {ButtonSuccess} from '~/components/Buttons/styles'

const DestinyForm = () => {
  //const dispatch = useDispatch();
  const { singUp } = useSingUp()

  return (
    <BoxContentCenter>
      <Formik
        initialValues={{
          name: '',
          email: '',
          pass: '',
          cpf: ''
        }}
        validationSchema={Yup.object({
          name: Yup.string().required(),
          email: Yup.string().required(),
          pass: Yup.string().required(),
        })}
        onSubmit={ async values  => {
          
          const payload = {
            name: values.name,
            email: values.email,
            pass: values.pass,
            document_id: values.cpf,
          }

          singUp(payload)

          console.log('paypal', payload)
        }}
      >
        <Form>
          <Styles.FormTitle>Cadastro</Styles.FormTitle>
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
                <label><i>*</i>Email : </label>
              </Styles.FormLabelContainer>
              <Styles.FormInputContainer>
                <ErrorMessage component="span" name="email" />
                <Field name="email" type="text" />
              </Styles.FormInputContainer>
            </Styles.FormFullLine>

            <Styles.FormFullLine>
              <Styles.FormLabelContainer>
                <label><i>*</i>Pass : </label>
              </Styles.FormLabelContainer>
              <Styles.FormInputContainer>
                <ErrorMessage component="span" name="pass" />
                <Field name="pass" type="text" />
              </Styles.FormInputContainer>
            </Styles.FormFullLine>

            <Styles.FormFullLine>
              <Styles.FormLabelContainer>
                <label><i>*</i>CPf : </label>
              </Styles.FormLabelContainer>
              <Styles.FormInputContainer>
                <ErrorMessage component="span" name="cpf" />
                <Field name="cpf" type="text" />
              </Styles.FormInputContainer>
            </Styles.FormFullLine>
            
            <Styles.FormBottomContent>
              <ButtonSuccess type="submit">Criar</ButtonSuccess>
            </Styles.FormBottomContent>
          </Styles.FormContainer>
        </Form>
      </Formik>
    </BoxContentCenter>
  );
}

export default DestinyForm;