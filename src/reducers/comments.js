/** Action Types */
export const SET_COMMENT = "SET_COMMENT";
export const CLEAR_COMMENT = "CLEAR_COMMENT";

/** Action Creators */
export const setComment = comment => ({
  type: SET_COMMENT,
  payload: {
    id: comment.id,
    comment
  }
});

export const clearComment = id => ({
  type: CLEAR_COMMENT,
  payload: {
    id
  }
});

export const sampleComments = {
  a1: {
    text: "This is a comment",
    likes: 23,
    author: "Aakash N S"
  },
  a2: {
    text: "This is another comment",
    likes: 7,
    author: "Alankar Saxena"
  }
};

/** Reducer */
const comments = (state = {}, { type, payload }) => {
  switch (type) {
    case SET_COMMENT:
      return {
        ...state,
        [payload.id]: payload.comment
      };
    case CLEAR_COMMENT: {
      const {
        [payload.id]: deleted,
        ...newState
      } = state;
      return newState;
    }
    default:
      return state;
  }
};

export default comments;

/** Accessors */
export const getComment = (state, id) => state[id];

export const getCommentIds = state => Object.keys(state);
