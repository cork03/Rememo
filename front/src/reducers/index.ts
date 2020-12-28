import { combineReducers } from "redux";
import modal from "./modal";
import cards from "./cards";
import auth from "./user";
import userCategories from "./userCategories";
import userSettings from "./userSettings";

const reducer = combineReducers({
  modal,
  cards,
  auth,
  userCategories,
  userSettings,
});

export default reducer;
