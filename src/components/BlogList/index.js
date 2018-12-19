import React from 'react';

import BlogTeaser from '../BlogTeaser';

import './styles.css';

const BlogList = props => {
  const limit = props.limit || 3;
  let loadingBlogs = props.loading === false
    ? props.blogs
    : [{}, {}, {}];
  let blogs = loadingBlogs
    .filter((_, i) => i < limit)
    .map((blog, i) => {
      let imgSrc;
      let imgAlt;
      let slug;
      let title;
      let published;
      let timeToRead;
      
      if (props.loading === false) {
        slug = blog.fields.slug;
        title = blog.fields.title;
        published = blog.fields.published;
        timeToRead = Math.floor(blog.fields.body.split(' ').length / 150);

        if (blog.fields.teaser) {
          imgSrc = blog.fields.teaser.fields.file.url;
          imgAlt = blog.fields.teaser.fields.title;
        }
      }

      return !props.loading ? (
        <BlogTeaser
          key={slug}
          to={slug}
          src={imgSrc}
          alt={imgAlt}
          title={title}
          published={published}
          timeToRead={timeToRead}
          loading={props.loading}
        />
      ) : null;
    });

  return (
    <div className="blog-list">
      <ul className="blog-list__list">
        {blogs}
      </ul>
    </div>
  );
}

export default BlogList;
