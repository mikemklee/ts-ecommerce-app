import { all, takeLatest } from 'redux-saga/effects';

import { getCollectionsSaga } from './shop/shop.sagas';
import { GET_COLLECTIONS_REQUEST } from './shop/shop.actions';

export default function* rootSaga() {
  yield all([takeLatest(GET_COLLECTIONS_REQUEST, getCollectionsSaga)]);
}
