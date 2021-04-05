import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/reducer';
import form from './form/sagas';

export default function* rootSaga() {
  return yield all([
    auth,
    user,
    form,
  ]);
}
