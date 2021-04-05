import React, {useState} from 'react';
import moment from 'moment';
// import * as Yup from 'yup';
// import { Formik, Form } from 'formik';

import { KeyboardDatePicker } from "@material-ui/pickers";
import  { useTracking } from '~/context/useTracking'

import * as Styles from '~/components/Forms/styles';
import {ButtonActionSmall} from '~/components/Buttons/styles'

function FilterTracking() {
  const [selectedInitialDate, handleInitialDateChange] = useState(null);
  const [selectedFinalDate, handleFinalDateChange] = useState(null);
  const { getTrackings } = useTracking();

  const handleClickDate = (type) => {
    type === 'initial'
      ? handleInitialDateChange(null)
      : handleFinalDateChange(null)
  }
  const handleSubmit = () => {
    getTrackings(
      moment(selectedInitialDate).format('YYYY-MM-DD'),
      moment(selectedFinalDate).format('YYYY-MM-DD')
    )
  }

  return (
    <>
      <form>
        <Styles.FormContainerSuplier>
          <Styles.FormFeaturedArea>
            <Styles.FormFullLine>
              <Styles.FormHalfLine>
                <Styles.FormLabelContainer>
                  <label>Data inicial : </label>
                </Styles.FormLabelContainer>
                <Styles.FormInputContainer>
                  <KeyboardDatePicker
                    value={selectedInitialDate}
                    placeholder="Digite uma data"
                    onChange={handleInitialDateChange}
                    onClick={() => handleClickDate('initial')}
                    format="yyyy/MM/dd"
                  />
                </Styles.FormInputContainer>
              </Styles.FormHalfLine>
              <Styles.FormHalfLine>
                <Styles.FormLabelContainer>
                  <label>Data final : </label>
                </Styles.FormLabelContainer>
                <Styles.FormInputContainer>
                  <KeyboardDatePicker
                    value={selectedFinalDate}
                    placeholder="Digite um data"
                    onChange={handleFinalDateChange}
                    onClick={() => handleClickDate('final')}
                    format="yyyy/MM/dd"
                  />
                </Styles.FormInputContainer>
              </Styles.FormHalfLine>
            </Styles.FormFullLine>   

            {/* <Styles.FormFullLine>
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
            </Styles.FormFullLine> */}
          </Styles.FormFeaturedArea>
          
          {/* <Styles.FormFullLine>
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
          </Styles.FormFullLine> */}
          {
            (selectedInitialDate === null || selectedFinalDate === null)
              ? null
              : <Styles.DisclaimerPeriod>
                  <h2>Pesquisar</h2>
                  <p>
                    de 
                    <span>{` ${moment(selectedInitialDate).format('YYYY-MM-DD')} `}</span>
                    até
                    <span>{` ${moment(selectedFinalDate).format('YYYY-MM-DD')} `}</span>
                  </p>
                </Styles.DisclaimerPeriod>
          }
          <ButtonActionSmall
            type="button"
            onClick={handleSubmit}>
              Pesquisar
          </ButtonActionSmall> 
        </Styles.FormContainerSuplier>
      </form>
    </>
  )
}

export default FilterTracking;