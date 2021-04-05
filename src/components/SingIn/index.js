import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { signInRequest } from '~/store/modules/auth/actions';
import {BoxContentCenter} from '~/components/BoxContent';

import {SingInTitle, SingInSubTitle, SingInContainerButton, SingInWithOutAccess} from './styles';
import {FormFullLine, FormInputContainerFull} from '~/components/Forms/styles';
import {ButtonAction} from '~/components/Buttons/styles';


function SingIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  return (
    <BoxContentCenter>
      <SingInTitle>PORTAL DO SELLER</SingInTitle>
      <SingInSubTitle>Bem vindo ao seu painel</SingInSubTitle>   
      <Formik
        initialValues={{
          user: '',
          password: ''
        }}
        validationSchema={Yup.object({
          user: Yup.string('precisa ser um email valido').required(),
          password: Yup.string().required(),
        })}
        onSubmit={({user, password}) => {
          dispatch(signInRequest(user, password))
        }}
      >
        <Form>
          <FormFullLine>
            <FormInputContainerFull>
              <ErrorMessage component="span" name="user" />
              <Field name="user" type="email" placeholder="administrador@exemplo.pt" />
              <i><MailOutlineIcon/></i>
            </FormInputContainerFull>
          </FormFullLine>
          <FormFullLine>
            <FormInputContainerFull>
              <ErrorMessage component="span" name="password" />
              <Field name="password" type="text" placeholder="*******" />
              <i><LockOutlinedIcon/></i>
            </FormInputContainerFull>
          </FormFullLine>
          <SingInContainerButton>
            <ButtonAction type="submit">
              {loading
                ? 'Carregando ...'
                : 'Acessar'
              }
        </ButtonAction>
            <SingInWithOutAccess href="#">não consigo acessar</SingInWithOutAccess>
          </SingInContainerButton>
        </Form>
      </Formik> 
    </BoxContentCenter>
  );
}

export default SingIn;
