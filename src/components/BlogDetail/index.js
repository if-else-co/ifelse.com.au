import React from 'react';
import showdown from 'showdown';
import Prism from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-yaml';
import 'prismjs/themes/prism-okaidia.css';

import { formatDate } from '../../helpers';
import './styles.css';

const renderMarkup = (string) => {
  const fragment = document.createDocumentFragment();
  const wrapper = document.createElement('div');
  const converter = new showdown.Converter();
  wrapper.innerHTML = converter.makeHtml(string);
  wrapper.id = 'prism-wrapper';
  fragment.appendChild(wrapper);
  Prism.highlightAllUnder(fragment);
  return fragment.querySelector('#prism-wrapper').innerHTML;
}

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
    content = renderMarkup(props.blog.body);
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
      <div className="blog-detail__content" dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  )
};

export default BlogDetail;
