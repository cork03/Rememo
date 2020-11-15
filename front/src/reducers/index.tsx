import { combineReducers } from "redux";
import modal from "./Modal";
import cards from "./Cards";
import auth from "./User";

const reducer = combineReducers({
  modal,
  cards,
  auth,
});

export default reducer;
