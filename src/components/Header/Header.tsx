import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Header.styles.scss';

import CartIcon from '../CartIcon/CartIcon';
import CartPreview from '../CartPreview/CartPreview';

import { auth } from '../../firebase/firebase.utils';
import { RootState } from '../../redux/rootReducer';
import { selectCartVisible } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

type Props = ReturnType<typeof mapStateToProps>;

const Header = ({ currentUser, cartVisible }: Props) => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        libre
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {cartVisible ? <CartPreview /> : null}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  currentUser: selectCurrentUser(state),
  cartVisible: selectCartVisible(state),
});

export default connect(mapStateToProps)(Header);
