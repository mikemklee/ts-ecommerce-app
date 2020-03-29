import React from 'react';

import './CheckoutItem.styles.scss';

import { CartItem } from '../../redux/cart/cart.reducer';

type Props = {
  cartItem: CartItem;
};

const CheckoutItem = ({
  cartItem: { name, imageUrl, price, quantity },
}: Props) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <div className="remove-button">&#10005;</div>
  </div>
);

export default CheckoutItem;
