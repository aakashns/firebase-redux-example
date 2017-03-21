import rawBind from "../firebase-redux/bind";
import attach from "./attach";

export default (path, actionCreator, accessor) =>
  attach(rawBind(path, actionCreator, accessor));
