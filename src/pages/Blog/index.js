import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

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
    let title;
    let summary;
    let keywords;

    if (this.props.blog) {
      title = this.props.blog.title;
      summary = this.props.blog.summary;
      keywords = this.props.blog.tags
        .map(tag => tag.fields.title.toLowerCase().split(' ').join(', '))
        .join(', ');
    }

    return (
      <div>
        <Helmet
          title={title}
          meta={[
            { name: 'description', content: summary },
            { name: 'keywords', content: keywords },
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
