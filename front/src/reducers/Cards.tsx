import { FETCH_CARDS_SUCCEEDED } from '../actions'

const initialData = {}
const initialState = {
    index: Object.values(initialData).length,
    data: initialData,
  };

const reducer = (state = initialState,action: any) => {
    switch (action.type) {
        case FETCH_CARDS_SUCCEEDED:
          return {...state,data: action.payload}
        default:
          return state
    }
}

export default reducer
