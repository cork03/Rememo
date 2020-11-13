import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from '../actions'
import { fetchCard,postCard } from '../axios/Cards'

function* fetchCards(action: any) {
    try{
        const { cards } = yield call(fetchCard)
        yield put({type: actions.FETCH_CARDS_SUCCEEDED, payload: cards})
     } catch(e) {
        yield put({type: actions.FETCH_CARDS_FAILED, messagae: e.message})
    }
}

function* post(action: any) {
    try{
        yield call(postCard,{data: action.payload})
        yield put({type: actions.POST_CARD_SUCCEEDED})
     } catch(e) {
        yield put({type: actions.POST_CARD_FAILED, messagae: e.message})
    }
}




function* cards() {
    yield takeLatest(actions.FETCH_CARDS_REQUESTED,fetchCards)
    yield takeLatest(actions.POST_CARD_REQUESTED,post)
}

export default cards;
