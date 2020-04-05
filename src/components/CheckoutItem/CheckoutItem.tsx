import React, { Dispatch } from 'react';
import { connect } from 'react-redux';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from './CheckoutItem.styles';

import { CartItem } from '../../redux/cart/cart.reducer';
import { addItem, removeItem, dropItem } from '../../redux/cart/cart.actions';
import { RootActionTypes } from '../../redux/rootReducer';

type Props = ReturnType<typeof mapDispatchToProps> & {
  cartItem: CartItem;
};

const CheckoutItem = ({ cartItem, addItem, removeItem, dropItem }: Props) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => dropItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<RootActionTypes>) => ({
  addItem: (item: CartItem) => dispatch(addItem(item)),
  removeItem: (item: CartItem) => dispatch(removeItem(item)),
  dropItem: (item: CartItem) => dispatch(dropItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
