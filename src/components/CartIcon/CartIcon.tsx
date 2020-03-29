import React, { Dispatch } from 'react';
import { connect } from 'react-redux';

import './CartIcon.styles.scss';
import icon from '../../assets/images/shopping-cart.png';

import { RootActionTypes, RootState } from '../../redux/rootReducer';
import { toggleCartVisible } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const CartIcon = ({ itemCount, toggleCartVisible }: Props) => (
  <div className="cart-icon" onClick={toggleCartVisible}>
    <img src={icon} alt="cart" />
    <span>{itemCount}</span>
  </div>
);

const mapStateToProps = (state: RootState) => ({
  itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch: Dispatch<RootActionTypes>) => ({
  toggleCartVisible: () => dispatch(toggleCartVisible()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
