import React from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import BoxContent from '~/components/BoxContent';
import * as Styles from '../Forms/styles';
import {ButtonSuccess} from '~/components/Buttons/styles'

// import {
//   Container
// } from './styles';


function Profile() {  

  return (
    <BoxContent title='Profile'>
      <Formik
        initialValues={{
          name: '',
          email: '',
          whatsapp: '',
          fixedPhone: '',
          celPhone: '',
          password: '',
          address: '',
          cep: '',
          logradouro: '',
          number: '',
          complement: '',
          neighborhood: '',
          city: '',
          uf: ''
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
                <label htmlFor="password"><i>*</i>password</label>
              </Styles.FormLabelContainer>
              <Styles.FormInputContainer>
                <ErrorMessage component="span" name="name" />
                <Field id="password" name="password" placeholder="(11)99999999999" />
              </Styles.FormInputContainer>
            </Styles.FormFullLine>

            <Styles.FormFullLine>
              <Styles.FormHalfLine>
                <Styles.FormLabelContainer>
                  <label htmlFor="whatsapp"><i>*</i>whatsapp</label>
                </Styles.FormLabelContainer>
                <Styles.FormInputContainer>
                  <ErrorMessage component="span" name="name" />
                  <Field id="whatsapp" name="whatsapp" placeholder="nome" />
                </Styles.FormInputContainer>
              </Styles.FormHalfLine>
              <Styles.FormHalfLine>
                <Styles.FormLabelContainer>
                  <label htmlFor="fixedPhone"><i>*</i>Telefone Fixo</label>
                </Styles.FormLabelContainer>
                <Styles.FormInputContainer>
                  <ErrorMessage component="span" name="name" />
                  <Field id="fixedPhone" name="fixedPhone" placeholder="(11)99999999999" />
                </Styles.FormInputContainer>
              </Styles.FormHalfLine>
            </Styles.FormFullLine>                                    
           
            <Styles.FormFullLine>
              <Styles.FormHalfLine>
                <Styles.FormLabelContainer>
                  <label htmlFor="cep"><i>*</i>Cep</label>
                </Styles.FormLabelContainer>
                <Styles.FormInputContainer>
                  <ErrorMessage component="span" name="name" />
                  <Field id="cep" name="cep" placeholder="(11)99999999999" />
                </Styles.FormInputContainer>
              </Styles.FormHalfLine>
            </Styles.FormFullLine>

            <Styles.FormFullLine>
              <Styles.FormLabelContainer>
                <label htmlFor="address"><i>*</i>Endereço</label>
              </Styles.FormLabelContainer>
              <Styles.FormInputContainer>
                <ErrorMessage component="span" name="name" />
                <Field id="address" name="address" placeholder="(11)99999999999" />
              </Styles.FormInputContainer>
            </Styles.FormFullLine>

            <Styles.FormFullLine>
              <Styles.FormHalfLine>
                <Styles.FormLabelContainer>
                  <label htmlFor="logradouro"><i>*</i>logradouro</label>
                </Styles.FormLabelContainer>
                <Styles.FormInputContainer>
                  <ErrorMessage component="span" name="name" />
                  <Field id="logradouro" name="logradouro" placeholder="(11)99999999999" />
                </Styles.FormInputContainer>
              </Styles.FormHalfLine>
              <Styles.FormHalfLine>
                <Styles.FormLabelContainer>
                  <label htmlFor="number"><i>*</i>number</label>
                </Styles.FormLabelContainer>
                <Styles.FormInputContainer>
                  <ErrorMessage component="span" name="name" />
                  <Field id="number" name="number" placeholder="(11)99999999999" />
                </Styles.FormInputContainer>
              </Styles.FormHalfLine>
            </Styles.FormFullLine>

            <Styles.FormFullLine>
              <Styles.FormHalfLine>
                <Styles.FormLabelContainer>
                  <label htmlFor="complement"><i>*</i>complement</label>
                </Styles.FormLabelContainer>
                <Styles.FormInputContainer>
                  <ErrorMessage component="span" name="name" />
                  <Field id="complement" name="complement" placeholder="(11)99999999999" />
                </Styles.FormInputContainer>
              </Styles.FormHalfLine>
              <Styles.FormHalfLine>
                <Styles.FormLabelContainer>
                  <label htmlFor="neighborhood"><i>*</i>neighborhood</label>
                </Styles.FormLabelContainer>
                <Styles.FormInputContainer>
                  <ErrorMessage component="span" name="name" />
                  <Field id="neighborhood" name="neighborhood" placeholder="(11)99999999999" />
                </Styles.FormInputContainer>
              </Styles.FormHalfLine>
            </Styles.FormFullLine>

            <Styles.FormFullLine>
              <Styles.FormHalfLine>
                <Styles.FormLabelContainer>
                  <label htmlFor="city"><i>*</i>city</label>
                </Styles.FormLabelContainer>
                <Styles.FormInputContainer>
                  <ErrorMessage component="span" name="name" />
                  <Field id="city" name="city" placeholder="(11)99999999999" />
                </Styles.FormInputContainer>
              </Styles.FormHalfLine>
              <Styles.FormHalfLine>
                <Styles.FormLabelContainer>
                  <label htmlFor="uf"><i>*</i>uf</label>
                </Styles.FormLabelContainer>
                <Styles.FormInputContainer>
                  <ErrorMessage component="span" name="name" />
                  <Field id="uf" name="uf" placeholder="(11)99999999999" />
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

export default Profile;