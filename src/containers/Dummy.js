import React from "react";
import { connect } from "react-redux";
import { setDummy } from "../reducers/dummy";
import { getDummy } from "../reducers";
import bind from "../firebase-redux-react/bind";

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

const DummyContainer = connect(mapStateToProps, mapDispatchToProps)(Dummy);

export default bind("/dummy", setDummy, getDummy)(DummyContainer);
