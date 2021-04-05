import produce from 'immer';

const INITIAL_STATE = {
  teste: null,
};

export default function form(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@form/REGISTER_DESTINY_SUCCESS': {
        draft.teste = action.payload;
        break;
      }
      default:
        return state;
    }
  });
}
