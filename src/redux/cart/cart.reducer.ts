import { Item } from './../../pages/Shop/Shop.data';
import { CartActionTypes, TOGGLE_CART_VISIBLE, ADD_ITEM } from './cart.actions';

import { addItemToCart } from './cart.utils';

export type CartItem = Item & { quantity: number };

export type CartState = {
  visible: boolean;
  items: CartItem[];
};

const INITIAL_STATE: CartState = {
  visible: false,
  items: [],
};

const cartReducer = (
  state: CartState = INITIAL_STATE,
  action: CartActionTypes
) => {
  switch (action.type) {
    case TOGGLE_CART_VISIBLE:
      return {
        ...state,
        visible: !state.visible,
      };
    case ADD_ITEM:
      return {
        ...state,
        items: addItemToCart(state.items, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
