import React from 'react';

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
} from './CartItem.styles';

import { CartItem as CartItemType } from '../../redux/cart/cart.reducer';

type Props = {
  item: CartItemType;
};

const CartItem = ({ item: { imageUrl, price, name, quantity } }: Props) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt='item' />
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
