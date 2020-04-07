import { call, put } from 'redux-saga/effects';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

import { getCollectionsSuccess, getCollectionsFailure } from './shop.actions';

export function* getCollectionsSaga() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(getCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(getCollectionsFailure(error.message));
  }
}
