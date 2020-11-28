import { FETCH_CATEGORY_SUCCEEDED } from "../actions";

const initialState = {};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_CATEGORY_SUCCEEDED:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
