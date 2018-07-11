import {
  NOTIFICATION_CREATE,
  NOTIFICATION_DELETE,
} from './actions';

const initialState = {
  nextId: 0,
  items: [],
};

export default (state = initialState, action) => {
  let id = action.id;
  let message = action.message;
  let status = action.status;
  let duration = action.duration;
  
  switch (action.type) {
    case NOTIFICATION_CREATE:
      return Object.assign(
        {},
        state,
        {
          nextId: state.nextId + 1,
          items: [{
            id,
            message,
            status,
            duration,
          }, ...state.items]
        }
      );
    case NOTIFICATION_DELETE:
      return Object.assign({}, state, { items: state.items.filter(item => item.id !== id) });
    default:
      return state;
  }
}