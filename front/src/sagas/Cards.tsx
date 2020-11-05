import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from '../actions'
import { fetchCard } from '../axios/Cards'

function* fetchCards(action: any) {
    try{
        const { cards } = yield call(fetchCard)
        yield put({type: actions.FETCH_CARDS_SUCCEEDED, payload: cards})
     } catch(e) {
        yield put({type: actions.FETCH_CARDS_FAILED, messagae: e.message})
    }
}



function* cards() {
    yield takeLatest(actions.FETCH_CARDS_REQUESTED,fetchCards)

}

export default cards;
