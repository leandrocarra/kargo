export function destinyForm(data) {
  return {
    type: '@form/REGISTER_DESTINY',
    payload: { data }
  };
}

export function destinyFormSucess(data) {
  return {
    type: '@form/REGISTER_DESTINY_SUCCESS',
    payload: { data }
  };
}

export function destinyFormFailure() {
  return {
    type: '@form/REGISTER_DESTINY_FAILURE'
  };
}
