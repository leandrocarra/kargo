import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import BoxContent from '~/components/BoxContent';

import { Container } from './styles';

function Profile() {
  const profile = useSelector(state => state.user.profile)

  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <BoxContent title='Profile'>
      <Container>
        <Form initialData={profile} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome completo" />
          <Input name="email"  type="email" placeholder="email" />
          <hr />
          <Input type="password" name="oldPassword" placeholder="Sua senha atual" />
          <Input type="password" name="password" placeholder="Nova senha" />
          <Input type="password" name="confirmPassword" placeholder="Confirmação de senha" />
          <button type="submit">Atualizar Perfil</button>
        </Form>
        <button type="button">Sair da kargo Painel</button>
      </Container>
    </BoxContent>
  );
}

export default Profile;
