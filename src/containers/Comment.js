import React from "react";
import { connect } from "react-redux";
import { getComment } from "../reducers";

const styles = {
  container: {
    padding: 8,
    borderBottom: "1px solid #ddd"
  }
};

const Comment = ({ id, author, likes, text }) => (
  <div style={styles.container}>
    <b>{author}</b>{" : "}{text}<br />
    {likes} likes ({id})
  </div>
);

const mapStateToProps = (state, { id }) => getComment(state, id);

export default connect(mapStateToProps)(Comment);
