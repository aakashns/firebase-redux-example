import { combineReducers } from "redux";
import dummy from "./dummy";
import profile from "./profile";

export default combineReducers({
  dummy,
  profile
});

export const getDummy = state => state.dummy;
