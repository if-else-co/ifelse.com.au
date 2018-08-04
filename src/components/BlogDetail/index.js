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
  let title;
  let content;
  let imgSrc;
  let publishedDate;
  let timeToRead;

  if (props.blog) {
    title = props.blog.title;
    imgSrc = props.blog.featured_image.fields.file.url;
    content = getMarkup(props.blog.body);
    publishedDate = formatDate(new Date(props.blog.published));
    timeToRead = Math.floor(props.blog.body.split(' ').length / 150);
  }

  return (
    <div className="blog-detail">
      <img className="blog-detail__featured-image" src={imgSrc} alt="" />
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
