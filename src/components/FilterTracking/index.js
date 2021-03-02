import React from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import DateRangeIcon from '@material-ui/icons/DateRange';

import * as Styles from '~/components/Forms/styles';
import {ButtonActionSmall} from '~/components/Buttons/styles'

function FilterTracking() {
  return (
    <>
       <Formik
          initialValues={{
            name: '',
          }}
          validationSchema={Yup.object({
            name: Yup.string().required()
          })}
          onSubmit={(values) => {
            console.log(JSON.stringify(values, null, 2));
          }}
        >
        <Form>
          <Styles.FormContainerSuplier>
            <Styles.FormFeaturedArea>
              <Styles.FormFullLine>
                <Styles.FormHalfLine>
                  <Styles.FormLabelContainer>
                    <label>Criado de : </label>
                  </Styles.FormLabelContainer>
                  <Styles.FormInputContainer>
                    <ErrorMessage component="span" name="phone" />
                    <Field name="phone" type="text" placeholder="selecione uma data"/>
                    <DateRangeIcon />
                  </Styles.FormInputContainer>
                </Styles.FormHalfLine>
                <Styles.FormHalfLine>
                  <Styles.FormLabelContainer>
                    <label>Actualizado em : </label>
                  </Styles.FormLabelContainer>
                  <Styles.FormInputContainer>
                    <ErrorMessage component="span" name="postalCode" />
                    <Field name="postalCode" type="text" placeholder="selecione uma data"/>
                    <DateRangeIcon />
                  </Styles.FormInputContainer>
                </Styles.FormHalfLine>
              </Styles.FormFullLine>         
              <Styles.FormFullLine>
                <Styles.FormHalfLine>
                  <Styles.FormLabelContainer>
                    <label>Até : </label>
                  </Styles.FormLabelContainer>
                  <Styles.FormInputContainer>
                    <ErrorMessage component="span" name="phone" />
                    <Field name="phone" type="text" placeholder="selecione uma data"/>
                    <DateRangeIcon />
                  </Styles.FormInputContainer>
                </Styles.FormHalfLine>
                <Styles.FormHalfLine>
                  <Styles.FormLabelContainer>
                    <label>Até : </label>
                  </Styles.FormLabelContainer>
                  <Styles.FormInputContainer>
                    <ErrorMessage component="span" name="postalCode" />
                    <Field name="postalCode" type="text" placeholder="selecione uma data"/>
                    <DateRangeIcon />
                  </Styles.FormInputContainer>
                </Styles.FormHalfLine>
              </Styles.FormFullLine>
            </Styles.FormFeaturedArea>
            <Styles.FormFullLine>
              <Styles.FormHalfLine>
                <Styles.FormLabelContainer>
                  <label>Destinatário : </label>
                </Styles.FormLabelContainer>
                <Styles.FormInputContainer>
                  <ErrorMessage component="span" name="phone" />
                  <Field name="phone" type="text" />
                </Styles.FormInputContainer>
              </Styles.FormHalfLine>

              <Styles.FormHalfLine>
                <Styles.FormLabelContainer>
                  <label>Produto : </label>
                </Styles.FormLabelContainer>
                <Styles.FormInputContainer>
                  <ErrorMessage component="span" name="postalCode" />
                  <Field name="postalCode" type="text" />
                </Styles.FormInputContainer>
              </Styles.FormHalfLine>
            </Styles.FormFullLine>
            <Styles.FormFullLine>
              <Styles.FormHalfLine>
                <Styles.FormLabelContainer>
                  <label>Tipo Estado : </label>
                </Styles.FormLabelContainer>
                <Styles.FormInputContainer>
                  <ErrorMessage component="span" name="phone" />
                  <Field name="phone" type="text" />
                </Styles.FormInputContainer>
              </Styles.FormHalfLine>

              <Styles.FormHalfLine>
                <Styles.FormLabelContainer>
                  <label>Estado : </label>
                </Styles.FormLabelContainer>
                <Styles.FormInputContainer>
                  <ErrorMessage component="span" name="postalCode" />
                  <Field name="postalCode" type="text" />
                </Styles.FormInputContainer>
              </Styles.FormHalfLine>
            </Styles.FormFullLine>
            <Styles.FormFullLine>
              <Styles.FormHalfLine>
                <Styles.FormLabelContainer>
                  <label>Caixa Postal : </label>
                </Styles.FormLabelContainer>
                <Styles.FormInputContainer>
                  <ErrorMessage component="span" name="phone" />
                  <Field name="phone" type="text" />
                </Styles.FormInputContainer>
              </Styles.FormHalfLine>

              <Styles.FormHalfLine>
                <Styles.FormLabelContainer>
                  <label>Ref. Cliente : </label>
                </Styles.FormLabelContainer>
                <Styles.FormInputContainer>
                  <ErrorMessage component="span" name="postalCode" />
                  <Field name="postalCode" type="text" />
                </Styles.FormInputContainer>
              </Styles.FormHalfLine>
            </Styles.FormFullLine>
            <ButtonActionSmall type="submit">Pesquisar</ButtonActionSmall> 
          </Styles.FormContainerSuplier>
        </Form>
      </Formik>
    </>
  )
}

export default FilterTracking;