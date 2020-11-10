import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from '../actions'
import { createUser,userLogin } from '../axios/User'

function* createUsers(action: any) {
    try{
        yield call(createUser, {data: action.payload}  )
        yield put({type: actions.CREATE_USER_SUCCEEDED})
     } catch(e) {
        yield put({type: actions.CREATE_USER_FAILED, messagae: e.message})
    }
}

function* usersLogin(action: any) {
    try{
        const user = yield call(userLogin, {data: action.payload})
        debugger
        yield put({type: actions.USER_LOGIN_SUCCEEDED, payload: user})
     } catch(e) {
        yield put({type: actions.USER_LOGIN_FAILED, messagae: e.message})
    }
}

function* user() {
    yield takeLatest(actions.CREATE_USER_REQUESTED,createUsers)
    yield takeLatest(actions.USER_LOGIN_REQUESTED,usersLogin)
}

export default user;
