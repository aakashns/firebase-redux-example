import { combineReducers } from "redux";
import dummy from "./dummy";
import profile from "./profile";
import comments, * as fromComments from "./comments";

export default combineReducers({
  dummy,
  profile,
  comments
});

export const getDummy = state => state.dummy;
export const getComment = (state, id) =>
  fromComments.getComment(state.comments, id);
export const getCommentIds = state =>
  fromComments.getCommentIds(state.comments);
