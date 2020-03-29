import React from 'react';

import './CartIcon.styles.scss';
import icon from '../../assets/images/shopping-cart.png';

const CartIcon = () => (
  <div className="cart-icon">
    <img src={icon} alt="cart" />
    <span>0</span>
  </div>
);

export default CartIcon;
