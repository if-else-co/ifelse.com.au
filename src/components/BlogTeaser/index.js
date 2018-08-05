import React from 'react';
import { Link } from 'react-router-dom';

import { formatDate } from '../../helpers';
import './styles.css';

const BlogTeaser = props => {
  let publishedDate = formatDate(new Date(props.published));
  let timeToRead = `${props.timeToRead} min${props.timeToRead > 1 ? 's' : ''}`;

  let loadingBlog = <li className="blog-teaser blog-teaser--loading">
    <div className="loading-background blog-teaser__image-wrapper"></div>
    <div className="blog-teaser__wrapper">
      <div className="loading-background blog-teaser__title"></div>
      <div className="loading-background blog-teaser__title"></div>
      <div className="loading-background blog-teaser__title"></div>
      <div className="loading-background blog-teaser__published"></div>
    </div>
  </li>;
  let renderedBlog;
  if (props.loading === false) {
    renderedBlog = <li className="blog-teaser">
      <Link className="blog-teaser__link" to={`post/${props.to}`}>
        <div className="blog-teaser__image-wrapper">
          <img className="blog-teaser__image" src={props.src} alt={props.alt} />
        </div>
        <div className="blog-teaser__wrapper">
          <div className="blog-teaser__title">
            {props.title}
          </div>
          <div className="blog-teaser__published">
            {publishedDate} &middot; {timeToRead}
          </div>
        </div>
      </Link>
    </li>;
  }

  return props.loading === false ? renderedBlog : loadingBlog;
};

export default BlogTeaser;
