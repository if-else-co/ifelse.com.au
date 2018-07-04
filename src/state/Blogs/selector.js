export const getBlogsOfCategory = blogStore => 
  blogStore
  .blogs
  .filter(blog => blog.category);
  
export const getBlogById = (blogStore, id) => 
  blogStore
  .blogs
  .filter(blog => blog.sys.id === id)
  .map(blog => blog.fields)[0];