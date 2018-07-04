export const BLOGS_FETCH = 'BLOGS_FETCH';
export const BLOGS_FETCH_SUCCESSFUL = 'BLOGS_FETCH_SUCCESSFUL';
export const BLOGS_FETCH_FAILED = 'BLOGS_FETCH_FAILED';

export const BLOG_FETCH = 'BLOG_FETCH';
export const BLOG_FETCH_SUCCESSFUL = 'BLOG_FETCH_SUCCESSFUL';
export const BLOG_FETCH_FAILED = 'BLOG_FETCH_FAILED';

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

export const fetchBlog = id => ({
  type: BLOG_FETCH,
  id,
});
export const fetchBlogSuccessful = (id, blog) => ({
  type: BLOG_FETCH_SUCCESSFUL,
  id,
  blog,
});
export const fetchBlogFailed = () => ({
  type: BLOG_FETCH_FAILED,
});
