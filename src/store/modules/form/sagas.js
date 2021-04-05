import {takeLatest, call, put, all} from 'redux-saga/effects';
import {toast} from 'react-toastify';

import api from '~/services/api';

import { destinyFormSucess, destinyFormFailure } from './actions';

export function* registerDestiny({ payload }) {
  try {
    
    const values = payload.data;

    const response = yield call(api.post, '/tracking/', values);
    toast.success('Cadastrado')

    yield put(destinyFormSucess(response.data));
  }catch (err) {
    toast.error('Valide os dados')
    yield put(destinyFormFailure());
  }
}

export default all([
  takeLatest('@form/REGISTER_DESTINY', registerDestiny)
]);