import { combineReducers } from 'redux';

import userReducer, { UserState } from './user/user.reducer';
import { UserActions } from './user/user.actions';

import cartReducer, { CartState } from './cart/cart.reducer';
import { CartActions } from './cart/cart.actions';

import directoryReducer, {
  DirectoryState,
} from './directory/directory.reducer';
import { DirectoryActions } from './directory/directory.actions';

import shopReducer, { ShopState } from './shop/shop.reducer';
import { ShopActions } from './shop/shop.actions';

export type RootState = {
  user: UserState;
  cart: CartState;
  directory: DirectoryState;
  shop: ShopState;
};

export type RootActionTypes =
  | UserActions
  | CartActions
  | DirectoryActions
  | ShopActions;

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});
