import { all } from "redux-saga/effects";
import user from './User'

function* rootSaga() {
  yield all([user()]);
}

export default rootSaga;
