import {SHOW_MODAL,HIDE_MODAL } from '../actions'

const initialState = {
    show: false
}

const reducer = (state = initialState,action: any) => {
    switch (action.type) {
        case SHOW_MODAL:
            return {...state, show: true}
        case HIDE_MODAL:
            return {...state, show: true}
        default:
          return state
    }
}

export default reducer
