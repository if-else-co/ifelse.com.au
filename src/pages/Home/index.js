import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import Splash from '../../components/Splash';
import ProjectList from '../../components/ProjectList';
import BlogList from '../../components/BlogList';
import CallToAction from '../../components/CallToAction';

import { fetchBlogs } from '../../state/Blogs/actions';
import { fetchProjects } from '../../state/Projects/actions';
import { toggleMenu } from '../../state/Menu/actions';

import drupal8 from './drupal-8.png';
import netlify from './netlify.png';
import wordpress from './wordpress.png';
import nodejs from './nodejs.png';

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
            website. Get online today, <a onClick={this.props.toggleMenu}>send us a message</a> and
            let's get started!
          </p>
        </div>
        <ProjectList projects={this.props.projects || []} />
        <div className="solutions">
          <ul className="solutions__list">
            <li className="solutions__list-item">
              <img className="solutions__image" src={wordpress} alt=""/>
            </li>
            <li className="solutions__list-item">
              <img className="solutions__image" src={drupal8} alt=""/>
            </li>
            <li className="solutions__list-item">
              <img className="solutions__image" src={netlify} alt=""/>
            </li>
            <li className="solutions__list-item">
              <img className="solutions__image" src={nodejs} alt=""/>
            </li>
            <li className="solutions__list-item">
              <img className="solutions__image" src={nodejs} alt=""/>
            </li>
            <li className="solutions__list-item">
              <img className="solutions__image" src={nodejs} alt=""/>
            </li>
          </ul>
        </div>
        <div id="blogs">
          <BlogList blogs={this.props.blogs || []} limit={3} />
        </div>
        <CallToAction
          foreground="#fff"
          background="#3e8889"
          prompt="Ready to get started?"
          buttonText="Tell us about your project."
          onClick={this.props.toggleMenu}
          />
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
  toggleMenu: () => dispatch(toggleMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
