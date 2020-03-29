export const TOGGLE_CART_VISIBLE = 'TOGGLE_CART_VISIBLE';

export type ToggleCartVisibleAction = {
  type: typeof TOGGLE_CART_VISIBLE;
  payload: null;
};

export type CartActionTypes = ToggleCartVisibleAction;

export const toggleCartVisible = (): ToggleCartVisibleAction => ({
  type: TOGGLE_CART_VISIBLE,
  payload: null,
});
