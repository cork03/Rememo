import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import { createUser } from "../axios/user";

function* createUsers(action: any) {
  try {
    yield call(createUser, { data: action.payload });
    yield put({ type: actions.CREATE_USER_SUCCEEDED });
  } catch (e) {
    yield put({ type: actions.CREATE_USER_FAILED, messagae: e.message });
  }
}

function* user() {
  yield takeLatest(actions.CREATE_USER_REQUESTED, createUsers);
}

export default user;
