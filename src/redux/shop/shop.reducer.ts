import { ShopActionTypes } from './shop.actions';
import { SHOP_DATA, Collection } from './Shop.data';

export type ShopState = {
  collections: Collection[];
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
