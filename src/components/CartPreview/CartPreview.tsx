import React from 'react';
import { connect } from 'react-redux';

import './CartPreview.styles.scss';

import CartItem from '../CartItem/CartItem';
import CustomButton from '../CustomButton/CustomButton';

import { RootState } from '../../redux/rootReducer';
import { selectCartItems } from '../../redux/cart/cart.selectors';

type Props = ReturnType<typeof mapStateToProps>;

const CartPreview = ({ cartItems }: Props) => (
  <div className="cart-preview">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (state: RootState) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartPreview);
