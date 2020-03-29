import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import './CartPreview.styles.scss';

import CartItem from '../CartItem/CartItem';
import CustomButton from '../CustomButton/CustomButton';

import { RootState, RootActionTypes } from '../../redux/rootReducer';
import { toggleCartVisible } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  RouteComponentProps;

const CartPreview = ({ cartItems, history, toggleCart }: Props) => (
  <div className="cart-preview">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        toggleCart();
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = (state: RootState) => ({
  cartItems: selectCartItems(state),
});

const mapDispatchToProps = (dispatch: Dispatch<RootActionTypes>) => ({
  toggleCart: () => dispatch(toggleCartVisible()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartPreview)
);
