import React from 'react';
import { Formik, Field, Form } from 'formik';

import BoxContent from '~/components/BoxContent';

import {
  Container
} from './styles';


function Profile() {  

  return (
    <BoxContent title='Profile'>
      <Container>
        <h1>Sign Up</h1>
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
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <label htmlFor="name">First Name</label>
            <Field id="name" name="name" placeholder="Jane" />

            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            />

            <label htmlFor="whatsapp">whatsapp</label>
            <Field id="whatsapp" name="whatsapp" placeholder="Jane" />

            <label htmlFor="fixedPhone">fixedPhone</label>
            <Field id="fixedPhone" name="fixedPhone" placeholder="Jane" />

            <label htmlFor="celPhone">celPhone</label>
            <Field id="celPhone" name="celPhone" placeholder="Jane" />

            <label htmlFor="password">password</label>
            <Field id="password" name="password" placeholder="Jane" />

            <label htmlFor="address">address</label>
            <Field id="address" name="address" placeholder="Jane" />

            <label htmlFor="cep">cep</label>
            <Field id="cep" name="cep" placeholder="Jane" />

            <label htmlFor="logradouro">logradouro</label>
            <Field id="logradouro" name="logradouro" placeholder="Jane" />

            <label htmlFor="number">number</label>
            <Field id="number" name="number" placeholder="Jane" />

            <label htmlFor="complement">complement</label>
            <Field id="complement" name="complement" placeholder="Jane" />

            <label htmlFor="neighborhood">neighborhood</label>
            <Field id="neighborhood" name="neighborhood" placeholder="Jane" />

            <label htmlFor="city">city</label>
            <Field id="city" name="city" placeholder="Jane" />

            <label htmlFor="uf">uf</label>
            <Field id="uf" name="uf" placeholder="Jane" />
            
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </Container>
    </BoxContent>
  );
}

export default Profile;
