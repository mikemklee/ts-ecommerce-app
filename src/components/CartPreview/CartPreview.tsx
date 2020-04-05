import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import {
  CartPreviewContainer,
  CartPreviewButton,
  EmptyMessageContainer,
  CartItemsContainer,
} from './CartPreview.styles';

import CartItem from '../CartItem/CartItem';

import { RootState, RootActionTypes } from '../../redux/rootReducer';
import { toggleCartVisible } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  RouteComponentProps;

const CartPreview = ({ cartItems, history, toggleCart }: Props) => (
  <CartPreviewContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      )}
    </CartItemsContainer>
    <CartPreviewButton
      onClick={() => {
        history.push('/checkout');
        toggleCart();
      }}
    >
      GO TO CHECKOUT
    </CartPreviewButton>
  </CartPreviewContainer>
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
