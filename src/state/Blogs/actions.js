export const BLOGS_FETCH = 'BLOGS_FETCH';
export const BLOGS_FETCH_SUCCESSFUL = 'BLOGS_FETCH_SUCCESSFUL';
export const BLOGS_FETCH_FAILED = 'BLOGS_FETCH_FAILED';

export const fetchBlogs = () => ({
  type: BLOGS_FETCH,
});
export const fetchBlogsSuccessful = blogs => ({
  type: BLOGS_FETCH_SUCCESSFUL,
  blogs,
});
export const fetchBlogsFailed = () => ({
  type: BLOGS_FETCH_FAILED
});
