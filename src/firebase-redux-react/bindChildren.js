import rawBindChildren from "../firebase-redux/bindChildren";
import attach from "./attach";

export default (path, setActionCreator, removeActionCreator) =>
  attach(props =>
    rawBindChildren(path(props), setActionCreator, removeActionCreator));
