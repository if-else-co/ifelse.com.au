import React from 'react';

import './styles.css';
import call from './call.svg';
import mail from '../Header/mail.svg';

const Footer = () => {
  return (
    <footer role="contentinfo" className="footer">
      <div className="footer__copyright">
        <div>&copy; IfElse {(new Date()).getFullYear()}</div>
        <div className="footer__contact-methods">
          <a className="footer__contact-method" href="tel:+61421401521">
            <img className="footer__contact-method-icon" src={call} alt="Telephone ready to call" /> +61 421 401 521 
          </a>
          <a className="footer__contact-method" href="mailto:sales@ifelse.com.au">
            <img className="footer__contact-method-icon" src={mail} alt="Letter" /> sales@ifelse.com.au 
          </a>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
