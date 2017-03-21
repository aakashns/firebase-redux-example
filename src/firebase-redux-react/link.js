import rawLink from "../firebase-redux";
import attach from "./attach";

export default (fromFirebase, fromStore) =>
  attach(rawLink(fromFirebase, fromStore));
