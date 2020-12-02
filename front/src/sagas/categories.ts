import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import { createCategory, fetchCategory } from "../axios/categories";

function* fetch(action: any) {
  try {
    const userCategories = yield call(fetchCategory);
    yield put({
      type: actions.FETCH_CATEGORY_SUCCEEDED,
      payload: userCategories,
    });
  } catch (e) {
    yield put({ type: actions.FETCH_CATEGORY_FAILED, messagae: e.message });
  }
}

function* create(action: any) {
  try {
    yield call(createCategory, action.payload);
    yield put({ type: actions.CREATE_CATEGORY_SUCCEEDED });
    yield put({ type: actions.FETCH_CATEGORY_REQUESTED });
  } catch (e) {
    yield put({ type: actions.CREATE_CATEGORY_FAILED, messagae: e.message });
  }
}

function* categories() {
  yield takeLatest(actions.CREATE_CATEGORY_REQUESTED, create);
  yield takeLatest(actions.FETCH_CATEGORY_REQUESTED, fetch);
}

export default categories;
