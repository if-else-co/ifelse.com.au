import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import logo from './logo.png';
import chat from './chat.svg';
import call from '../Footer/call.svg';
import mail from './mail.svg';
import './styles.css';

import { toggleMenu } from '../../state/Menu/actions';

import { smoothScrollTo } from '../../helpers';

class Header extends Component {
  render() {
    let navItems = [
      {
        icon: '',
        onClick: () => {
          smoothScrollTo('blogs', 16, 500)
        },
        label: 'blogs',
      },
      {
        icon: '',
        onClick: () => {
          smoothScrollTo('solutions', 16, 500)
        },
        label: 'solutions',
      },
      {
        icon: '',
        onClick: () => {
          smoothScrollTo('case-studies', 16, 500)
        },
        label: 'case studies',
      },
      {
        icon: chat,
        onClick: () => {
          if (!this.props.isMenuOpen) {
            this.props.toggleMenu();
          }
        },
        label: 'get in touch',
        button: true,
      },
    ]
    .filter((_, i) => {
      return !(this.props.pathname !== '/' && i < 3);
    })
    .map(item => {
      let icon = item.icon !== ''
        ? <img className="nav__button-icon" src={item.icon} alt="" />
        : null;
      let contents = <span className="nav__button-label">{item.label}</span>;
      return (
        <li key={item.label} className="nav__item">
          <button className={`nav__link ${item.button ? 'nav__button' : ''}`} onClick={item.onClick}>
            {icon}{contents}
          </button>
        </li>
      );
    });
    
    return (
      <header>
        <div className="nav__contact">
          <div className="nav__contact-container">
            <a className="nav__contact-method" href="tel:+17608964478">
              <img
                className="nav__contact-method-icon"
                src={call}
                alt="Telephone ready to call" />
              +1 (760) 896-4478
            </a>
            <a className="nav__contact-method" href="mailto:davidedisch@gmail.com">
              <img
                className="nav__contact-method-icon"
                src={mail}
                alt="Letter" />
              davidedisch@gmail.com
            </a>
          </div>
        </div>
        <div className="nav__wrapper">
          <nav className="nav">
            <div className="nav__wrapper">
              <Link className="nav__logo" to="/">
                <img src={logo} className="nav__logo-img" alt="logo" />
              </Link>
              <ul className="nav__menu">
                {navItems}
              </ul>
              <div className="clearfix"></div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleMenu: () => dispatch(toggleMenu()),
});

const mapStateToProps = state => ({
  isMenuOpen: state.menu.open,
  pathname: state.router.location.pathname,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
