import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import { deleteLink } from "../axios/link";

function* deleteLinks(action: any) {
  try {
    yield call(deleteLink, action.id);
    yield put({ type: actions.DELETE_LINK_SUCCEEDED });
    yield put({ type: actions.FETCH_CARDS_REQUESTED });
  } catch (e) {
    yield put({ type: actions.DELETE_LINK_FAILED, messagae: e.message });
  }
}

function* links() {
  yield takeLatest(actions.DELETE_LINK_REQUESTED, deleteLinks);
}

export default links;
