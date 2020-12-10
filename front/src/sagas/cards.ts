import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import { checkCard, fetchCard, patchCard, postCard } from "../axios/cards";

function* fetchCards(action: any) {
  try {
    const { cards } = yield call(fetchCard);
    yield put({ type: actions.FETCH_CARDS_SUCCEEDED, payload: cards });
  } catch (e) {
    yield put({ type: actions.FETCH_CARDS_FAILED, messagae: e.message });
  }
}

function* post(action: any) {
  try {
    console.log(action.payload);
    yield call(postCard, { data: action.payload });
    yield put({ type: actions.POST_CARD_SUCCEEDED });
    yield put({ type: actions.FETCH_CARDS_REQUESTED });
  } catch (e) {
    yield put({ type: actions.POST_CARD_FAILED, messagae: e.message });
  }
}

function* patch(action: any) {
  try {
    yield call(patchCard, { data: action.payload }, action.id);
    yield put({ type: actions.PATCH_CARD_SUCCEEDED });
    yield put({ type: actions.FETCH_CARDS_REQUESTED });
  } catch (e) {
    yield put({ type: actions.POST_CARD_FAILED, messagae: e.message });
  }
}

function* check(action: any) {
  try {
    yield call(checkCard, action.payload);
    yield put({ type: actions.CHECK_CARD_SUCCEEDED });
    yield put({ type: actions.FETCH_CARDS_REQUESTED });
  } catch (e) {
    yield put({ type: actions.CHECK_CARD_FAILED, messagae: e.message });
  }
}

function* cards() {
  yield takeLatest(actions.FETCH_CARDS_REQUESTED, fetchCards);
  yield takeLatest(actions.POST_CARD_REQUESTED, post);
  yield takeLatest(actions.CHECK_CARD_REQUESTED, check);
  yield takeLatest(actions.PATCH_CARD_REQUESTED, patch);
}

export default cards;
