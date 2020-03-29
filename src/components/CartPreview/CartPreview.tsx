import React from 'react';

import './CartPreview.styles.scss';
import CustomButton from '../CustomButton/CustomButton';

const CartPreview = () => (
  <div className="cart-preview">
    <div className="cart-items"></div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartPreview;
