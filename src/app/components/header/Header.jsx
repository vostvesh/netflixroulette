import React from 'react';
import './Header.css';

import Logo from '../logo/Logo';
import Search from '../../containers/Search';

const Header = ({ urlParams }) => {
  return (
    <div className="header">
      <div className="header_bg">
        <div className="header__logo">
          <Logo />
        </div>
        <div className="header__search">
          <Search urlParams={urlParams} />
        </div>
      </div>
    </div>
  );
};

export default Header;