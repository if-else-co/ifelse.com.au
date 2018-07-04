import React from 'react';

import BlogTeaser from '../BlogTeaser';

import './styles.css';

const BlogList = props => {
  let imgSrc = null;
  let blogs = props.blogs.map(blog => {
    if (blog.fields.featured_image) {
      imgSrc = blog.fields.featured_image.fields.file.url;
    }
    return (
      <BlogTeaser
        key={blog.sys.id}
        to={blog.sys.id}
        src={imgSrc}
        title={blog.fields.title}
        published={blog.fields.published}
        timeToRead={Math.floor(blog.fields.body.split(' ').length / 150)}
      />
    );
  });
  return (
    <div className="blog-list">
      <h2 className="blog-list__title" id="blogs">Blogs</h2>
      <ul className="blog-list__list">
        {blogs}
      </ul>
    </div>
  );
}

export default BlogList;
