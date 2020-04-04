import { combineReducers } from 'redux';

import userReducer, { UserState } from './user/user.reducer';
import { UserActionTypes } from './user/user.actions';

import cartReducer, { CartState } from './cart/cart.reducer';
import { CartActionTypes } from './cart/cart.actions';

import directoryReducer, {
  DirectoryState,
} from './directory/directory.reducer';
import { DirectoryActionTypes } from './directory/directory.actions';

import shopReducer, { ShopState } from './shop/shop.reducer';
import { ShopActionTypes } from './shop/shop.actions';

export type RootState = {
  user: UserState;
  cart: CartState;
  directory: DirectoryState;
  shop: ShopState;
};

export type RootActionTypes =
  | UserActionTypes
  | CartActionTypes
  | DirectoryActionTypes
  | ShopActionTypes;

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});
