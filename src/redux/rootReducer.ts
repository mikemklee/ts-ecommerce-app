import { combineReducers } from 'redux';

import userReducer, { UserState } from './user/user.reducer';
import { UserActionTypes } from './user/user.actions';

import cartReducer, { CartState } from './cart/cart.reducer';
import { CartActionTypes } from './cart/cart.actions';

export type RootState = {
  user: UserState;
  cart: CartState;
};

export type RootActionTypes = UserActionTypes | CartActionTypes;

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
