import { createSelector } from 'reselect';

import { RootState } from './../rootReducer';

const selectShop = (state: RootState) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);
