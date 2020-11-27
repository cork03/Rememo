import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import { createCategory } from "../axios/categories";

function* create(action: any) {
  try {
    console.log(action.payload);
    yield call(createCategory, action.payload);
    yield put({ type: actions.CREATE_CATEGORY_SUCCEEDED });
    yield put({ type: actions.FETCH_CARDS_REQUESTED });
  } catch (e) {
    yield put({ type: actions.CREATE_CATEGORY_FAILED, messagae: e.message });
  }
}

function* categories() {
  yield takeLatest(actions.CREATE_CATEGORY_REQUESTED, create);
}

export default categories;
