import { Item } from './../../pages/Shop/Shop.data';
import { CartItem } from './cart.reducer';

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

export const REMOVE_ITEM = 'REMOVE_ITEM';
export type RemoveItemAction = {
  type: typeof REMOVE_ITEM;
  payload: Item;
};
export const removeItem = (item: Item): RemoveItemAction => ({
  type: REMOVE_ITEM,
  payload: item,
});

export const DROP_ITEM = 'DROP_ITEM';
export type DropItemAction = {
  type: typeof DROP_ITEM;
  payload: CartItem;
};
export const dropItem = (item: CartItem): DropItemAction => ({
  type: DROP_ITEM,
  payload: item,
});

export type CartActionTypes =
  | ToggleCartVisibleAction
  | AddItemAction
  | RemoveItemAction
  | DropItemAction;
