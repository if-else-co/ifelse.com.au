import React from 'react';

import './styles.css';
import call from './call.svg';
import mail from '../Header/mail.svg';

const Footer = () => {
  return (
    <footer role="contentinfo" className="footer">
      <div className="footer__copyright">
        <div>&copy; David Disch 2017</div>
        <div className="footer__contact-methods">
          <a className="footer__contact-method" href="tel:+17608964478">
            <img className="footer__contact-method-icon" src={call} alt="Telephone ready to call" /> +1 (760) 896-4478 
          </a>
          <a className="footer__contact-method" href="mailto:davidedisch@gmail.com">
            <img className="footer__contact-method-icon" src={mail} alt="Letter" /> davidedisch@gmail.com 
          </a>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
