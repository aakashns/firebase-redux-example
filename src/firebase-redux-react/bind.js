import rawBind from "../firebase-redux/bind";
import attach from "./attach";

export default (path, actionCreator, accessor) =>
  attach(props => rawBind(path(props), actionCreator, accessor));
