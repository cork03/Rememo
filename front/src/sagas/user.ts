import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import { createUser, fetchUsers } from "../axios/user";

function* fetch(action: any) {
  try {
    const user = yield call(fetchUsers);
    yield put({ type: actions.FETCH_USER_SUCCEEDED, payload: user });
  } catch (e) {
    yield put({ type: actions.FETCH_USER_FAILED, messagae: e.message });
  }
}

function* create(action: any) {
  try {
    yield call(createUser, { data: action.payload });
    yield put({ type: actions.CREATE_USER_SUCCEEDED });
  } catch (e) {
    yield put({ type: actions.CREATE_USER_FAILED, messagae: e.message });
  }
}

function* user() {
  yield takeLatest(actions.FETCH_USER_REQUESTED, fetch);
  yield takeLatest(actions.CREATE_USER_REQUESTED, create);
}

export default user;
