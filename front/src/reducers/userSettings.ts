import { FETCH_USERSETTINGS_SUCCEEDED } from "../actions";

const initialState = { userSettings: null };

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_USERSETTINGS_SUCCEEDED:
      return { ...state, userSettings: action.payload };
    default:
      return state;
  }
};

export default reducer;
