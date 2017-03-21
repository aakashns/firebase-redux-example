import { setDummy } from "../reducers/dummy";
import { getDummy } from "../reducers";
import bind from "../firebase-redux/bind";

const dummyPath = "/dummy";
const dummyActionCreator = setDummy;
const dummyAccessor = getDummy;

const bindDummy = bind(dummyPath, dummyActionCreator, dummyAccessor);

export default bindDummy;
