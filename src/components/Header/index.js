import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import logo from './logo.png';
import './styles.css';

import { toggleMenu } from '../../state/Menu/actions';

import { smoothScrollTo } from '../../helpers';

class Header extends Component {
  render() {
    

    let navItems = [
      {
        icon: '',
        onClick: () => {smoothScrollTo('blogs', 16, 500)},
        label: 'blogs',
      },
      {
        icon: '',
        onClick: () => {smoothScrollTo('solutions', 16, 500)},
        label: 'solutions',
      },
      {
        icon: '',
        onClick: () => {smoothScrollTo('case-studies', 16, 500)},
        label: 'case studies',
      },
      {
        icon: '',
        onClick: () => {
          if (!this.props.isMenuOpen) {
            this.props.toggleMenu();
          }
        },
        label: 'get in touch',
        button: true,
      },
    ].map(item => {
      let contents = item.icon !== ''
        ? <img className="nav__button-icon" src={item.icon} alt="" />
        : <span className="nav__button-label">{item.label}</span>;
      return (
        <li key={item.label} className="nav__item">
          <button className={`nav__link ${item.button ? 'nav__button' : ''}`} onClick={item.onClick}>
            {contents}
          </button>
        </li>
      );
    });
    
    return (
      <header className="nav__wrapper">
        <nav className="nav">
          <div className="nav__wrapper">
            <Link className="nav__logo" to="/">
              <img src={logo} className="nav__logo-img" alt="logo" />
            </Link>
            <ul className="nav__menu">{navItems}</ul>
            <div className="clearfix"></div>
          </div>
        </nav>
      </header>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleMenu: () => dispatch(toggleMenu()),
});

const mapStateToProps = state => ({
  isMenuOpen: state.menu.open
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
