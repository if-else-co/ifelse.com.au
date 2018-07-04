import {
  BLOGS_FETCH,
  BLOGS_FETCH_SUCCESSFUL,
  BLOGS_FETCH_FAILED,
  BLOG_FETCH,
  BLOG_FETCH_SUCCESSFUL,
  BLOG_FETCH_FAILED,
} from './actions';

const initialState = {
  fetching: false,
  blogs: [],
  blogDetails: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BLOGS_FETCH:
      return Object.assign({}, state, { fetching: true });
    case BLOGS_FETCH_SUCCESSFUL:
      return Object.assign({}, state, { blogs: action.blogs, fetching: false });
    case BLOGS_FETCH_FAILED:
      return Object.assign({}, state, { fetching: false });
    case BLOG_FETCH:
      return Object.assign({}, state, { fetching: true });
    case BLOG_FETCH_SUCCESSFUL:
      let mergeObject = {};
      mergeObject[action.id] = action.blog;
      let blogDetails = Object.assign({}, state.blogDetails, mergeObject);
      return Object.assign({}, state, {
        blogDetails,
        fetching: false
      });
    case BLOG_FETCH_FAILED:
      return Object.assign({}, state, { fetching: false });
    default:
      return state;
  }
}