import { createSelector } from 'reselect';

import { RootState } from './../rootReducer';

const selectShop = (state: RootState) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

type collectionParams = 'hats' | 'sneakers' | 'jackets' | 'womens' | 'mens';

export const selectCollection = (collectionUrlParam: collectionParams) =>
  createSelector([selectCollections], (collections) =>
    collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  );
