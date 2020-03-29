import React, { Dispatch } from 'react';
import { connect } from 'react-redux';

import './CartIcon.styles.scss';
import icon from '../../assets/images/shopping-cart.png';

import { RootActionTypes } from '../../redux/rootReducer';
import { toggleCartVisible } from '../../redux/cart/cart.actions';

type Props = ReturnType<typeof mapDispatchToProps>;

const CartIcon = ({ toggleCartVisible }: Props) => (
  <div className="cart-icon" onClick={toggleCartVisible}>
    <img src={icon} alt="cart" />
    <span>0</span>
  </div>
);

const mapDispatchToProps = (dispatch: Dispatch<RootActionTypes>) => ({
  toggleCartVisible: () => dispatch(toggleCartVisible()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
