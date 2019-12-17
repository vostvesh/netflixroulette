import React from 'react';

import './Footer.css';

import Logo from '../logo/Logo';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <Logo />
      </div>
    </footer>
  );
};

export default Footer;