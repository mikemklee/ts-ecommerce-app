import React from 'react';

import './CartItem.styles.scss';
import { CartItem as CartItemType } from '../../redux/cart/cart.reducer';

type Props = {
  item: CartItemType;
};

const CartItem = ({ item: { imageUrl, price, name, quantity } }: Props) => (
  <div className='cart-item'>
    <img src={imageUrl} alt='item' />
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default CartItem;
