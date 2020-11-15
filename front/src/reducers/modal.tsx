import { SHOW_MODAL, HIDE_MODAL } from "../actions";

const initialState = {
  show: false,
  copmonent: {},
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, component: action.payload, show: true };
    case HIDE_MODAL:
      return { ...state, show: false };
    default:
      return state;
  }
};

export default reducer;
