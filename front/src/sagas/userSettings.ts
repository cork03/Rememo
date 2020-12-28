import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import { patchUserSettings, fetchUserSettings } from "../axios/userSettings";

function* fetch(action: any) {
  try {
    const userSetting = yield call(fetchUserSettings);
    yield put({
      type: actions.FETCH_USERSETTINGS_SUCCEEDED,
      payload: userSetting,
    });
    return userSetting;
  } catch (e) {
    yield put({
      type: actions.FETCH_USERSETTINGS_FAILED,
      messagae: e.message,
    });
  }
}

function* patch(action: any) {
  try {
    yield call(patchUserSettings, action.payload, action.id);
    yield put({
      type: actions.PATCH_USERSETTINGS_SUCCEEDED,
    });
    yield put({
      type: actions.FETCH_USERSETTINGS_REQUESTED,
    });
  } catch (e) {
    yield put({
      type: actions.PATCH_USERSETTINGS_FAILED,
      messagae: e.message,
    });
  }
}

function* userSettings() {
  yield takeLatest(actions.FETCH_USERSETTINGS_REQUESTED, fetch);
  yield takeLatest(actions.PATCH_USERSETTINGS_REQUESTED, patch);
}

export default userSettings;
