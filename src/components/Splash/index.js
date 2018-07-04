import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import config from '../../config';
import background from './background.png';
import './styles.css';

class Splash extends Component {
  render() {
    return (
      <div className="splash">
        <div style={{backgroundImage: `url(${background})`}} className="splash__background"></div>
        <div className="splash__content">
          <h1 className="splash__title">{config.title}</h1>
          <h2 className="splash__subtitle">{config.subtitle}</h2>
          <h3 className="splash__blurb">{config.blurb}</h3>
          <Link className="splash__button" to={config.learn_more.link}>{config.learn_more.label}</Link>
          <Link className="splash__button" to={config.inquire.link}>{config.inquire.label}</Link>
        </div>
      </div>
    );
  }
}

export default Splash;