import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Header.styles.scss';

import { auth } from '../../firebase/firebase.utils';
import { RootState } from '../../redux/rootReducer';

const Header = ({ currentUser }: ReturnType<typeof mapStateToProps>) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        LOGO
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
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

const mapStateToProps = (state: RootState) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
