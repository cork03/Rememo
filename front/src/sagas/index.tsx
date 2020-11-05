import { all } from "redux-saga/effects";
import user from './User'
import cards from './Cards'

function* rootSaga() {
  yield all([user(),cards()]);
}

export default rootSaga;
