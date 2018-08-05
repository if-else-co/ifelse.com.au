import React, { createElement } from 'react';
import marksy from 'marksy';

import { formatDate } from '../../helpers';
import './styles.css';

const getMarkup = field => {
  if (!field) return null;
  const compile = marksy({
    createElement,
    elements: {}
  });
  return compile(field).tree;
};

const BlogDetail = props => {
  let loadingBlogDetail = (
    <div className="blog-detail blog-detail--loading">
      <div className="blog-detail__image-container">
        <div className="blog-detail__featured-image-wrapper loading-background">
        </div>
      </div>
      <div className="blog-detail__title">
        <div className="loading-background"></div>
        <div className="loading-background"></div>
      </div>
      <div className="blog-detail__meta">
        <div className="loading-background"></div>
      </div>
      <div className="blog-detail__content">
        <p className="loading-background"></p>
        <p className="loading-background"></p>
        <p className="loading-background"></p>
        <p className="loading-background"></p>
        <p className="loading-background"></p>
      </div>
    </div>
  );
  let title;
  let content;
  let imgSrc;
  let imgAlt;
  let publishedDate;
  let timeToRead;

  if (props.blog) {
    title = props.blog.title;
    imgSrc = props.blog.featured_image.fields.file.url;
    imgAlt = props.blog.featured_image.fields.title;
    content = getMarkup(props.blog.body);
    publishedDate = formatDate(new Date(props.blog.published));
    timeToRead = Math.floor(props.blog.body.split(' ').length / 150);
  }

  return props.loading ? loadingBlogDetail : (
    <div className="blog-detail">
      <div className="blog-detail__image-container">
        <div className="blog-detail__featured-image-wrapper">
          <img className="blog-detail__featured-image"
            src={imgSrc}
            alt={imgAlt} />
        </div>
      </div>
      <h1 className="blog-detail__title">{title}</h1>
      <div className="blog-detail__meta">
        {publishedDate} &middot; {timeToRead} min read
      </div>
      <div className="blog-detail__content">
        {content}
      </div>
    </div>
  )
};

export default BlogDetail;
