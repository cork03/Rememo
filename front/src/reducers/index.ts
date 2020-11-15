import { combineReducers } from "redux";
import modal from "./modal";
import cards from "./cards";
import auth from "./user";

const reducer = combineReducers({
  modal,
  cards,
  auth,
});

export default reducer;
