import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Intro = () => (
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
      website. Get online today, <Link to='#contact'>send us a message</Link> and
       let's get started!
    </p>
  </div>
);

export default Intro;