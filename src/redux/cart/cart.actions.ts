import { Item } from './../../pages/Shop/Shop.data';

export const TOGGLE_CART_VISIBLE = 'TOGGLE_CART_VISIBLE';
export type ToggleCartVisibleAction = {
  type: typeof TOGGLE_CART_VISIBLE;
  payload: null;
};
export const toggleCartVisible = (): ToggleCartVisibleAction => ({
  type: TOGGLE_CART_VISIBLE,
  payload: null,
});

export const ADD_ITEM = 'ADD_ITEM';
export type AddItemAction = {
  type: typeof ADD_ITEM;
  payload: Item;
};
export const addItem = (item: Item): AddItemAction => ({
  type: ADD_ITEM,
  payload: item,
});

export type CartActionTypes = ToggleCartVisibleAction | AddItemAction;
