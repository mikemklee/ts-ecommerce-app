import {
  ShopActions,
  GET_COLLECTIONS_REQUEST,
  GET_COLLECTIONS_SUCCESS,
  GET_COLLECTIONS_FAILURE,
} from './shop.actions';

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
  isFetching: boolean;
  errorMessage: string | null;
};

const INITIAL_STATE: ShopState = {
  collections: null,
  isFetching: false,
  errorMessage: null,
};

const shopReducer = (state: ShopState = INITIAL_STATE, action: ShopActions) => {
  switch (action.type) {
    case GET_COLLECTIONS_REQUEST:
      return {
        ...state,
        isFectching: true,
      };
    case GET_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    case GET_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
