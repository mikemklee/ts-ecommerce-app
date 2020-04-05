import { ShopActionTypes, GET_COLLECTIONS } from './shop.actions';

export type Item = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

export type Collection = {
  id: number;
  title: string;
  routeName: string;
  items: Item[];
};

export type Collections = {
  [key: string]: Collection;
};

export type ShopState = {
  collections: Collections | null;
};

const INITIAL_STATE: ShopState = {
  collections: null,
};

const shopReducer = (
  state: ShopState = INITIAL_STATE,
  action: ShopActionTypes
) => {
  switch (action.type) {
    case GET_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
