import React from 'react';
import { Link } from 'react-router-dom';

import { formatDate } from '../../helpers';
import './styles.css';

const BlogTeaser = props => {
  let publishedDate = formatDate(new Date(props.published));
  let timeToRead = `${props.timeToRead} min${props.timeToRead > 1 ? 's' : ''}`;
  return (
    <li className="blog-teaser">
      <Link className="blog-teaser__link" to={`post/${props.to}`}>
        <div className="blog-teaser__image-wrapper">
          <img className="blog-teaser__image" src={props.src} alt="" />
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
    </li>
  )
};

export default BlogTeaser;
