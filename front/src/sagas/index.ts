import { all } from "redux-saga/effects";
import user from "./user";
import cards from "./cards";
import links from "./links";
import categories from "./categories";
import userSettings from "./fetchUserSettings";

function* rootSaga() {
  yield all([user(), cards(), links(), categories(), userSettings()]);
}

export default rootSaga;
