import { CartActionTypes, TOGGLE_CART_VISIBLE } from './cart.actions';

export type CartState = {
  visible: boolean;
};

const INITIAL_STATE: CartState = {
  visible: false,
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
    default:
      return state;
  }
};

export default cartReducer;
