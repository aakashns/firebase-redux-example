import React from "react";
import { connect } from "react-redux";
import { setDummy } from "../reducers/dummy";

const Dummy = ({ value, onChange }) => (
  <div style={{ textAlign: "center" }}>
    <div>The value of dummy is:</div>
    <div><b>{value}</b></div>
    <br />
    <div>You can edit it below</div>
    <input type="text" value={value} onChange={e => onChange(e.target.value)} />
  </div>
);

const mapStateToProps = state => ({
  value: state.dummy
});

const mapDispatchToProps = dispatch => ({
  onChange: value => dispatch(setDummy(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dummy);
