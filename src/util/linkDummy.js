import { setDummy } from "../reducers/dummy";
import link from "../firebase-redux/link";

let mustUpdate = true;

const fromFirebase = (db, dispatch) => {
  // console.log('Connecting "store.dummy" to "/dummy"');
  const listener = db.ref("/dummy").on("value", snap => {
    // console.log("Data loaded from firebase :", snap.val());
    if (snap.val()) {
      mustUpdate = false;
      dispatch(setDummy(snap.val()));
    }
  });
  const unsubscribe = () => db.ref("/dummy").off("value", listener);
  return unsubscribe;
};

const fromStore = (state, db) => {
  if (mustUpdate) {
    // console.log(
    //   'Propagating a change from "store.dummy" to "/dummy" :',
    //   state.dummy
    // );
    db.ref("/dummy").set(state.dummy);
  } else {
    mustUpdate = true;
  }
};

export default link(fromFirebase, fromStore);
