import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import config from '../../config';

import BlogDetail from '../../components/BlogDetail';

import { fetchBlogs } from '../../state/Blogs/actions';
import { getBlogBySlug } from '../../state/Blogs/selector';

class Blog extends Component {
  componentWillMount() {
    if (!this.props.blog) {
      this.props.fetchBlogs();
    }
  }

  render() {
    const slug = this.props.match.params.slug;
    let title;
    let summary;
    let keywords;
    let image;

    if (this.props.blog) {
      title = this.props.blog.title;
      summary = this.props.blog.summary;
      keywords = this.props.blog.tags
        .map(tag => tag.fields.title.toLowerCase().split(' ').join(', '))
        .join(', ');
      image = 'https:' + this.props.blog.teaser.fields.file.url;
    }

    return (
      <div>
        <Helmet
          title={title}
          meta={[
            { name: 'description', content: summary },
            { name: 'keywords', content: keywords },
            { name: 'og:url', content: `${config.url}/post/${slug}` },
            { name: 'og:type', content: 'article' },
            { name: 'og:title', content: title },
            { name: 'og:description', content: summary },
            { name: 'og:image', content: image },
            { name: 'twitter:site', content: '@Auspicus' },
            { name: 'twitter:creator', content: '@Auspicus' },
          ]} />
        <BlogDetail
          blog={this.props.blog}
          loading={this.props.loading} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchBlogs: () => dispatch(fetchBlogs())
});

const mapStateToProps = (state, ownProps) => ({
  blog: getBlogBySlug(state.blogs, ownProps.match.params.slug),
  loading: state.blogs.fetching,
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
