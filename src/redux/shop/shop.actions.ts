import { Collections } from './shop.reducer';

export const GET_COLLECTIONS = 'GET_COLLECTIONS';
export type GetCollectionsAction = {
  type: typeof GET_COLLECTIONS;
  payload: Collections;
};
export const getCollections = (
  collectionsMap: Collections
): GetCollectionsAction => ({
  type: GET_COLLECTIONS,
  payload: collectionsMap,
});

export type ShopActionTypes = GetCollectionsAction;
