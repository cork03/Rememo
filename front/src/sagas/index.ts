import { all } from "redux-saga/effects";
import user from "./user";
import cards from "./cards";

function* rootSaga() {
  yield all([user(), cards()]);
}

export default rootSaga;
