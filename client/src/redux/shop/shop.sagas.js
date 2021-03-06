import { takeLatest, call, put, all } from "redux-saga/effects";

import { firestore, convertCollectionsSnapshotToMap } from './../../firebase/firebase.utils';

import {
  fetchCollectionssSucccess,
  fetchCollectionsFailure
} from './shop.actions'

import ShopActionTypes from "./shop.types";

export function* fetchCollectionsAsyn() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionssSucccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }

}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsyn )
}

export function* shopSagas()  {
  yield(all([
    call(fetchCollectionsStart)
  ]))
}

