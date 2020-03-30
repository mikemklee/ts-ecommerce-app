import React, { Dispatch } from 'react';
import { connect } from 'react-redux';

import './CheckoutItem.styles.scss';

import { CartItem } from '../../redux/cart/cart.reducer';
import { dropItemFromCart } from '../../redux/cart/cart.actions';
import { RootActionTypes } from '../../redux/rootReducer';

type Props = ReturnType<typeof mapDispatchToProps> & {
  cartItem: CartItem;
};

const CheckoutItem = ({ cartItem, dropItem }: Props) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => dropItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<RootActionTypes>) => ({
  dropItem: (item: CartItem) => dispatch(dropItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
