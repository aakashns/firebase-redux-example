import React from "react";
import Comment from "./Comment";
import { connect } from "react-redux";
import { getCommentIds } from "../reducers";
import bindChildren from "../firebase-redux-react/bindChildren";
import { setComment, clearComment } from "../reducers/comments";

const Comments = ({ commentIds }) => (
  <div>
    <h3>Comments</h3>
    {commentIds.map(id => <Comment id={id} key={id} />)}
    {commentIds.length === 0 && <div>There are no comments! :-(</div>}
  </div>
);

const mapStateToProps = state => ({
  commentIds: getCommentIds(state)
});

const CommentsContainer = connect(mapStateToProps)(Comments);

export default bindChildren(() => "comments", setComment, clearComment)(
  CommentsContainer
);
