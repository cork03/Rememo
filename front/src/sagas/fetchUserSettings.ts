import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import { fetchUserSettings } from "../axios/userSettings";

function* fetch(action: any) {
  try {
    const userSettings = yield call(fetchUserSettings);
    yield put({
      type: actions.FETCH_USERSETTINGS_SUCCEEDED,
      payload: userSettings,
    });
    return userSettings;
  } catch (e) {
    yield put({ type: actions.FETCH_USERSETTINGS_FAILED, messagae: e.message });
  }
}

function* userSettings() {}

export default userSettings;
