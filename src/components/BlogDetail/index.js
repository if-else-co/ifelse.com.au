import React, { createElement } from 'react';
import marksy from 'marksy';

//import { formatDate } from '../../helpers';
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

  if (props.blog) {
    title = props.blog.title;
    imgSrc = props.blog.featured_image.fields.file.url;
    content = getMarkup(props.blog.body);
  }

  //let publishedDate = formatDate(new Date(props.published));
  //let timeToRead = `${props.timeToRead} min${props.timeToRead > 1 ? 's' : ''}`;

  return (
    <div className="blog-detail">
      <img className="blog-detail__featured-image" src={imgSrc} alt="" />
      <h1 className="blog-detail__title">{title}</h1>
      <div className="blog-detail__content">
        {content}
      </div>
    </div>
  )
};

export default BlogDetail;
