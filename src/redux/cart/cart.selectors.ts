import { createSelector } from 'reselect';

import { RootState } from './../rootReducer';

const selectCart = (state: RootState) => state.cart;

export const selectCartItems = createSelector([selectCart], cart => cart.items);

export const selectCartItemsCount = createSelector([selectCartItems], items =>
  items.reduce((acc, item) => acc + item.quantity, 0)
);

export const selectCartVisible = createSelector(
  [selectCart],
  cart => cart.visible
);
