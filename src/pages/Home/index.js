import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import Splash from '../../components/Splash';
import ProjectList from '../../components/ProjectList';
import BlogList from '../../components/BlogList';

import { fetchBlogs } from '../../state/Blogs/actions';
import { fetchProjects } from '../../state/Projects/actions';

import './styles.css';

class Home extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
    
    if (this.props.blogs.length < 1) {
      this.props.fetchBlogs();
    }

    if (this.props.projects.length < 1) {
      this.props.fetchProjects();
    }
  }

  render() {
    return (
      <div>
        <Helmet title="auspicus.io" />
        <Splash />
        <div className="intro">
          <h2 className="intro__title" id="learn-more">What we do</h2>
          <p className="intro__body">
            Whether you're a brand new company or an established business, 
            there's no denying that moving online is a big step. 
            We make that transition easy for you by providing services 
            to manage your social media accounts, websites, analytics and 
            applications.<br/><br/>We work with you to manage and update your 
            Facebook, Instagram, Twitter, Google Analytics, Adsense &amp; 
            Search Console as well as maintaining and hosting your own custom 
            website. Get online today, <a href='#contact'>send us a message</a> and
            let's get started!
          </p>
        </div>
        <ProjectList projects={this.props.projects || []} />
        <BlogList blogs={this.props.blogs || []} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  blogs: state.blogs.blogs,
  projects: state.projects.projects,
});

const mapDispatchToProps = (dispatch) => ({
  fetchBlogs: () => dispatch(fetchBlogs()),
  fetchProjects: () => dispatch(fetchProjects()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
