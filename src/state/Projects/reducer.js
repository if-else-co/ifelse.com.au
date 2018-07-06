import {
  PROJECTS_FETCH,
  PROJECTS_FETCH_SUCCESSFUL,
  PROJECTS_FETCH_FAILED,
} from './actions';

const initialState = {
  fetching: false,
  projects: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PROJECTS_FETCH:
      return Object.assign({}, state, { fetching: true });
    case PROJECTS_FETCH_SUCCESSFUL:
      return Object.assign({}, state, { projects: action.projects, fetching: false });
    case PROJECTS_FETCH_FAILED:
      return Object.assign({}, state, { fetching: false });
    default:
      return state;
  }
}