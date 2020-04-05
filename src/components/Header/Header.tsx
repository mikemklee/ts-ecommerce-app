import React from 'react';
import { connect } from 'react-redux';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from './Header.styles';

import CartIcon from '../CartIcon/CartIcon';
import CartPreview from '../CartPreview/CartPreview';

import { auth } from '../../firebase/firebase.utils';
import { RootState } from '../../redux/rootReducer';
import { selectCartVisible } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

type Props = ReturnType<typeof mapStateToProps>;

const Header = ({ currentUser, cartVisible }: Props) => {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>libre</LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/shop'>CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as='div' onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to='/signin'>SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {cartVisible ? <CartPreview /> : null}
    </HeaderContainer>
  );
};

const mapStateToProps = (state: RootState) => ({
  currentUser: selectCurrentUser(state),
  cartVisible: selectCartVisible(state),
});

export default connect(mapStateToProps)(Header);
