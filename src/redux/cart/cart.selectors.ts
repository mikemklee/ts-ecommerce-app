import { RootState } from './../rootReducer';
import { createSelector } from 'reselect';

const selectCart = (state: RootState) => state.cart;

export const selectCartItems = createSelector([selectCart], cart => cart.items);

export const selectCartItemsCount = createSelector([selectCartItems], items =>
  items.reduce((acc, item) => acc + item.quantity, 0)
);