import { all } from "redux-saga/effects";
import user from "./user";
import cards from "./cards";
import links from "./links";

function* rootSaga() {
  yield all([user(), cards(), links()]);
}

export default rootSaga;
