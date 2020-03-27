import React from 'react';
import { Link } from 'react-router-dom';

import './Header.styles.scss';

const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        Logo
      </Link>
      <div className="options">
        <Link className="logo-container" to="/shop">
          Shop
        </Link>
        <Link className="logo-container" to="/shop">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
