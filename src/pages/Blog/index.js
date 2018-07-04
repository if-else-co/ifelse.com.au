import React, { Component, createElement } from 'react';
import Helmet from 'react-helmet';
import marksy from 'marksy';
import { connect } from 'react-redux';

import { fetchBlogs } from '../../state/Blogs/actions';
import { getBlogById } from '../../state/Blogs/selector';

const getMarkup = field => {
  if (!field) return null;
  const compile = marksy({
    createElement,
    elements: {}
  });
  return compile(field).tree;
};

class Blog extends Component {
  componentWillMount() {
    if (!this.props.blog) {
      this.props.fetchBlogs();
    }
  }

  render() {
    let title;
    let content;

    if (this.props.blog) {
      title = this.props.blog.title;
      content = getMarkup(this.props.blog.body);
    }

    return (
      <div className="post">
        <Helmet title={title} />
        <h1>{title}</h1>
        {content}
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
