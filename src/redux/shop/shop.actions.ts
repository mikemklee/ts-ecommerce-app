import { Collections } from './shop.reducer';

export const GET_COLLECTIONS_REQUEST = 'GET_COLLECTIONS_REQUEST';
export type GetCollectionsRequestAction = {
  type: typeof GET_COLLECTIONS_REQUEST;
};
export const getCollectionsRequest = (): GetCollectionsRequestAction => ({
  type: GET_COLLECTIONS_REQUEST,
});

export const GET_COLLECTIONS_SUCCESS = 'GET_COLLECTIONS_SUCCESS';
export type GetCollectionsSuccessAction = {
  type: typeof GET_COLLECTIONS_SUCCESS;
  payload: Collections;
};
export const getCollectionsSuccess = (
  collectionsMap: Collections
): GetCollectionsSuccessAction => ({
  type: GET_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const GET_COLLECTIONS_FAILURE = 'GET_COLLECTIONS_FAILURE';
export type GetCollectionsFailureAction = {
  type: typeof GET_COLLECTIONS_FAILURE;
  payload: string | undefined;
};
export const getCollectionsFailure = (
  errorMessage: string | undefined
): GetCollectionsFailureAction => ({
  type: GET_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export type ShopActions =
  | GetCollectionsRequestAction
  | GetCollectionsSuccessAction
  | GetCollectionsFailureAction;
