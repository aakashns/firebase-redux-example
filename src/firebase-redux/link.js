/**
 * Link the store and database with custom logic
 * @param fromFirebase : (db, dispatch) => // fetch some data and dispatch actions
 * @param fromStore : (state, db) => // Read some state and save it to database
 */

// prettier-ignore
const link = (fromFirebase, fromStore) =>
  (db, store) => {
    const unlinkFromFirebase = fromFirebase && fromFirebase(db, store.dispatch);
    const unlinkFromStore = fromStore &&
      store.subscribe(() => fromStore(store.getState(), db));

    const unlink = () => {
      console.log("Disconnecting the store and the realitime database");
      unlinkFromFirebase && unlinkFromFirebase();
      unlinkFromStore && unlinkFromStore();
    };
    return unlink;
  };

export default link;
