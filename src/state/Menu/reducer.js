import {
  MENU_OPEN,
  MENU_CLOSE,
  MENU_TOGGLE,
} from './actions';

const initialState = {
  open: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MENU_OPEN:
      return Object.assign({}, state, { open: true });
    case MENU_CLOSE:
      return Object.assign({}, state, { open: false });
    case MENU_TOGGLE:
      return Object.assign({}, state, { open: !state.open });
    default:
      return state;
  }
}