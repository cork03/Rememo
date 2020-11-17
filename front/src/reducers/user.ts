import { USER_LOGIN } from "../actions";

const initialState = { user: null };

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default reducer;
