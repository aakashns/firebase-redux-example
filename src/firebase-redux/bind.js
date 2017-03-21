/**
 * Bind a specific path in the database to a specific portion of the state
 * @param path : Path in the database which you want to bind
 * @param actionCreator: (val) => // Retunrns an action which when dispatched will deliver the value
 * @param accessor : (state) => // Get the value from the state which can be written to database
 */

import link from "./link";

const bind = (path, actionCreator, accessor) =>
  (db, store) => {
    let mustUpdate = true;

    const fromFirebase = (db, dispatch) => {
      const listener = db.ref(path).on("value", snap => {
        if (snap.val()) {
          mustUpdate = false;
          dispatch(actionCreator(snap.val()));
        }
      });
      return () => db.ref(path).off("value", listener);
    };

    const fromStore = (state, db) => {
      if (mustUpdate) {
        db.ref(path).set(accessor(state));
      } else {
        mustUpdate = true;
      }
    };

    const unbind = link(fromFirebase, fromStore)(db, store);
    return unbind;
  };

export default bind;
