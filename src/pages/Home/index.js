import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import Splash from '../../components/Splash';
import Intro from '../../components/Intro';
import BlogList from '../../components/BlogList';

import { fetchBlogs } from '../../state/Blogs/actions';

class Home extends Component {
  componentWillMount() {
    if (this.props.blogs.length < 1) {
      this.props.fetchBlogs();
    }
  }

  render() {
    return (
      <div>
        <Helmet title="auspicus.io" />
        <Splash />
        <Intro />
        <BlogList blogs={this.props.blogs || []} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  blogs: state.blogs.blogs
});

const mapDispatchToProps = (dispatch) => ({
  fetchBlogs: () => dispatch(fetchBlogs())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
