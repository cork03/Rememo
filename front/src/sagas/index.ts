import { all } from "redux-saga/effects";
import cards from "./cards";
import links from "./links";
import categories from "./categories";
import userSettings from "./userSettings";

function* rootSaga() {
  yield all([cards(), links(), categories(), userSettings()]);
}

export default rootSaga;
