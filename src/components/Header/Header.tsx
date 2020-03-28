import React from 'react';
import { Link } from 'react-router-dom';

import './Header.styles.scss';

import { auth } from '../../firebase/firebase.utils';

type Props = {
  currentUser: firebase.User | null;
};

const Header = ({ currentUser }: Props) => {
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
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
