import React from 'react';
import { connect } from 'react-redux';

import './Checkout.styles.scss';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';

import { RootState } from '../../redux/rootReducer';

type Props = ReturnType<typeof mapStateToProps>;

const CheckoutPage = ({ cartItems, total }: Props) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className='total'>TOTAL: ${total}</div>
  </div>
);

const mapStateToProps = (state: RootState) => ({
  cartItems: selectCartItems(state),
  total: selectCartTotal(state),
});

export default connect(mapStateToProps)(CheckoutPage);
