import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ContactForm from '../ContactForm';

import logo from './logo.png';
import './styles.css';

import { toggleMenu } from '../../state/Menu/actions';

class Header extends Component {
  render() {
    let navItems = [
      {
        icon: '',
        onClick: () => {},
        label: 'blogs',
      },
      {
        icon: '',
        onClick: () => {},
        label: 'solutions',
      },
      {
        icon: '',
        onClick: () => {},
        label: 'case studies',
      },
      {
        icon: '',
        onClick: () => {
          this.props.toggleMenu();
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

    let contactForm = this.props.isMenuOpen ? <ContactForm /> : null;
    
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
        {contactForm}
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
