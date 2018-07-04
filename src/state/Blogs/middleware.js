import { createClient } from 'contentful';
import {
  BLOGS_FETCH, fetchBlogsSuccessful,
  BLOG_FETCH, fetchBlogSuccessful,
} from './actions';

const client = createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
});

const getBlogs = cb => (
  client.getEntries({ content_type: 'blog' }).then((response) => {cb(response.items)})
);
const getBlog = (id, cb) => (
  client.getEntries({ 'sys.id[in]': id }).then(response => {cb(response.items[0].fields)})
)

export default (store) => next => action => {
  switch (action.type) {
    case BLOGS_FETCH:
      getBlogs(blogs => store.dispatch(fetchBlogsSuccessful(blogs)));
      break;
    case BLOG_FETCH:
      getBlog(action.id, blog => store.dispatch(fetchBlogSuccessful(action.id, blog)))
      break;
    default:
  }

  return next(action);
}
