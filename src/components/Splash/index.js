import React, { Component } from 'react';
import { connect } from 'react-redux';

import config from '../../config';
import background from './background.png';
import './styles.css';

import { smoothScrollTo } from '../../helpers';

import Typewriter from '../Typewriter';
import { toggleMenu } from '../../state/Menu/actions';

class Splash extends Component {
  render() {
    return (
      <div className="splash">
        <div style={{backgroundImage: `url(${background})`}} className="splash__background"></div>
        <div className="splash__content">
          <h1 className="splash__title">{config.title}</h1>
          <h2 className="splash__subtitle">{config.subtitle}</h2>
          <h3 className="splash__blurb">
            <Typewriter texts={config.blurb} />
          </h3>
          <a className="splash__button" onClick={() => smoothScrollTo('learn-more', 16, 500)}>{config.learn_more.label}</a>
          <a className="splash__button" onClick={this.props.toggleMenu}>{config.inquire.label}</a>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleMenu: () => dispatch(toggleMenu()),
});

export default connect(null, mapDispatchToProps)(Splash);