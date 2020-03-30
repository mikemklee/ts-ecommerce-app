import React, { Dispatch } from 'react';
import { connect } from 'react-redux';

import './CheckoutItem.styles.scss';

import { CartItem } from '../../redux/cart/cart.reducer';
import { addItem, removeItem, dropItem } from '../../redux/cart/cart.actions';
import { RootActionTypes } from '../../redux/rootReducer';

type Props = ReturnType<typeof mapDispatchToProps> & {
  cartItem: CartItem;
};

const CheckoutItem = ({ cartItem, addItem, removeItem, dropItem }: Props) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => dropItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<RootActionTypes>) => ({
  addItem: (item: CartItem) => dispatch(addItem(item)),
  removeItem: (item: CartItem) => dispatch(removeItem(item)),
  dropItem: (item: CartItem) => dispatch(dropItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
