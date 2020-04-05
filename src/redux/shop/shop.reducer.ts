import { ShopActionTypes } from './shop.actions';
import { SHOP_DATA, Collections } from './shop.data';

export type ShopState = {
  collections: Collections;
};

const INITIAL_STATE: ShopState = {
  collections: SHOP_DATA,
};

const shopReducer = (
  state: ShopState = INITIAL_STATE,
  action: ShopActionTypes
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
