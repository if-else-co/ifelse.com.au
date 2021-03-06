import {
  BLOGS_FETCH,
  BLOGS_FETCH_SUCCESSFUL,
  BLOGS_FETCH_FAILED,
} from './actions';

const initialState = {
  fetching: false,
  blogs: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BLOGS_FETCH:
      return Object.assign({}, state, { fetching: true });
    case BLOGS_FETCH_SUCCESSFUL:
      return Object.assign({}, state, { blogs: action.blogs, fetching: false });
    case BLOGS_FETCH_FAILED:
      return Object.assign({}, state, { fetching: false });
    default:
      return state;
  }
}