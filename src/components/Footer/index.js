import React from 'react';

import './styles.css';
import call from './call.svg';

const Footer = () => {
  return (
    <footer role="contentinfo" className="footer">
      <div className="footer__copyright">
        &copy; David Disch 2017 &middot; <a className="footer__phone" href="tel:+17608964478">
          <img className="footer__phone-icon" src={call} alt="Telephone ready to call" />
          +1 (760) 896-4478 
        </a>
      </div>
    </footer>
  )
};

export default Footer;
