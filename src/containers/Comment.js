import React from "react";
import { connect } from "react-redux";
import { getComment } from "../reducers";
import { setComment, editComment } from "../reducers/comments";
import bind from "../firebase-redux-react/bind";

const styles = {
  container: {
    padding: 8,
    borderBottom: "1px solid #ddd"
  }
};

const Comment = ({ id, author, likes, text, onChange }) => (
  <div style={styles.container}>
    <b>{author}</b>{" : "}{text}<br />
    {likes} likes ({id})
    <br />
    <br />
    <textarea
      value={text}
      className="u-full-width"
      onChange={e => onChange(e.target.value)}
    />
  </div>
);

const mapStateToProps = (state, { id }) => getComment(state, id);
const mapDispatchToProps = (dispatch, { id }) => ({
  onChange: text => dispatch(editComment(id, { text }))
});

const CommentContainer = connect(mapStateToProps, mapDispatchToProps)(Comment);

export default bind(
  ({ id }) => "/comments/" + id,
  ({ id }) => comment => setComment({ ...comment, id }),
  ({ id }) => state => getComment(state, id)
)(CommentContainer);
