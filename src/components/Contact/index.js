import React from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import BoxContent from '~/components/BoxContent';
import * as Styles from '../Forms/styles';
import {ButtonSuccess} from '~/components/Buttons/styles'

function Contact() {
  return (
    <BoxContent title='FALE CONOSCO'>
      <Formik
        initialValues={{
          name: '',
          email: '',         
          celPhone: '',
          title: '',
          message: ''
        }}
        validationSchema={Yup.object({
          name: Yup.string().required(),
          email: Yup.string().required(),
          pass: Yup.string().required(),
        })}
        onSubmit={ async values  => {
                      
          const payload = {
            email: "f2ulanowwwwwqwwww2@gmail.com",
            password: "123qwe456",
            name: "SUCRATA",
            document_id: "2qwqqq",
            phone: "11999999999",
            cellphone: "11999999999",
            address: {
              address: "R Dr Carlos Alberto Bastos de Matos",
              number: 2741,
              postal_code: "14412-290",
              complement: null,
              neighborhood: "Franca Pólo Club",
              city: "Franca",
              state: "SP",
              type: "home",
              default: true
            }
          }
          console.log('paypal', payload)
        }}
      >
        <Form>
          <Styles.FormContainer>
            <Styles.FormFullLine>
              <Styles.FormLabelContainer>
                <label htmlFor="name"><i>*</i>name</label>
              </Styles.FormLabelContainer>
              <Styles.FormInputContainer>
                <ErrorMessage component="span" name="name" />
                <Field id="name" name="name" placeholder="nome" />
              </Styles.FormInputContainer>
            </Styles.FormFullLine>

            <Styles.FormFullLine>
              <Styles.FormLabelContainer>
                <label htmlFor="email"><i>*</i>email</label>
              </Styles.FormLabelContainer>
              <Styles.FormInputContainer>
                <ErrorMessage component="span" name="email" />
                <Field id="email" name="email" placeholder="nome" />
              </Styles.FormInputContainer>
            </Styles.FormFullLine>

            <Styles.FormFullLine>
              <Styles.FormLabelContainer>
                <label htmlFor="title"><i>*</i>Assunto</label>
              </Styles.FormLabelContainer>
              <Styles.FormInputContainer>
                <ErrorMessage component="span" name="name" />
                <Field id="title" name="title" placeholder="Assunto" />
              </Styles.FormInputContainer>
            </Styles.FormFullLine>             
           
            <Styles.FormFullLine>
              <Styles.FormLabelContainer>
                <label htmlFor="message"><i>*</i>Mensagem</label>
              </Styles.FormLabelContainer>
              <Styles.FormInputContainer>
                <ErrorMessage component="span" name="name" />
                <Field as="textarea" id="message" name="message" placeholder="(11)99999999999" />
              </Styles.FormInputContainer>
            </Styles.FormFullLine>
                                                      
            
            <Styles.FormBottomContent>
              <ButtonSuccess type="submit">Enviar</ButtonSuccess>
            </Styles.FormBottomContent>

          </Styles.FormContainer>
        </Form>
      </Formik>
    </BoxContent>
  );
}

export default Contact;