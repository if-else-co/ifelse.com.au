import { createClient } from 'contentful';
import {
  PROJECTS_FETCH, fetchProjectsSuccessful,
} from './actions';

const client = createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
});

const getProjects = cb => (
  client.getEntries({ content_type: 'project' }).then((response) => {cb(response.items)})
);

export default (store) => next => action => {
  switch (action.type) {
    case PROJECTS_FETCH:
      getProjects(projects => store.dispatch(fetchProjectsSuccessful(projects)));
      break;
    default:
  }

  return next(action);
}
