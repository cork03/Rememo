import { combineReducers } from "redux";
import modal from "./modal";
import cards from "./cards";
import auth from "./user";
import userCategories from "./userCategories";

const reducer = combineReducers({
  modal,
  cards,
  auth,
  userCategories,
});

export default reducer;
