import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import BlogDetail from '../../components/BlogDetail';

import { fetchBlogs } from '../../state/Blogs/actions';
import { getBlogById } from '../../state/Blogs/selector';

class Blog extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);

    if (!this.props.blog) {
      this.props.fetchBlogs();
    }
  }

  render() {
    let title;

    if (this.props.blog) {
      title = this.props.blog.title;
    }

    return (
      <div>
        <Helmet title={title} />
        <BlogDetail blog={this.props.blog} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchBlogs: () => dispatch(fetchBlogs())
});

const mapStateToProps = (state, ownProps) => ({
  blog: getBlogById(state.blogs, ownProps.match.params.id)
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
