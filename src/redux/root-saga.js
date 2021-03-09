import { all, call } from 'redux-saga/effects';
 
import { fetchCollectionsStart } from './shop/shop.sagas';

export default function* rootSaga() {
  yield all([
    yield call(fetchCollectionsStart)
  ])
}