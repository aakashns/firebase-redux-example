import link from "./link";

/**
 * Bind the children of specific path in the database to a specific portion of the state
 * @param path : Path in the database which you want to bind
 * @param setActionCreator: (val) => // Contains and 'id' at which the 'val' is supposed to be written
 * @param removeActionCreator : (id) => // Returns the action that will remove the specific key
 */

const bindChildren = (path, setActionCreator, removeActionCreator) =>
  (db, store) => {
    const fromFirebase = (db, dispatch) => {
      const commentsRef = db.ref(path);

      const handleResult = snap => {
        const comment = snap.val();
        if (comment) {
          dispatch(setActionCreator({ ...comment, id: snap.key }));
        }
      };

      const addedListener = commentsRef.on("child_added", handleResult);

      const changedListener = commentsRef.on("child_changed", handleResult);

      const removedListener = commentsRef.on("child_removed", snap => {
        dispatch(removeActionCreator(snap.key));
      });

      const unsubscribe = () => {
        commentsRef.off("child_added", addedListener);
        commentsRef.off("child_changed", changedListener);
        commentsRef.off("child_removed", removedListener);
      };
      return unsubscribe;
    };

    const unbind = link(fromFirebase)(db, store);
    return unbind;
  };

export default bindChildren;
