import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {

  try {
    const { user, password } = payload;

    const response = yield call(api.post, '/login/', {
      user,
      password,
    });

    const { jwt } = response.data;

    api.defaults.headers={"x-kargo-token": `${jwt}`};

    if ( jwt === undefined) {
      yield put(signFailure());
    }
    if (jwt !== undefined ) {
      yield put(signInSuccess(jwt, user));
    }

    history.push('/registro-de-pacote');
  } catch (err) {
    toast.error('Revise seu email ou senha, parecem estar diferentes');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: true,
    });

    history.push('/');
  } catch (err) {
    toast.error('Falha no cadastro, verifique seus dados!');

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers={"x-kargo-token": `${token}`};
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
