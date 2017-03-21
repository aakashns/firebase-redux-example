import React from "react";
import * as firebase from "firebase";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

const config = {
  apiKey: "AIzaSyCeCjqsRyo0h8QyqgheFgRgRbbP9o8PkuA",
  authDomain: "fir-redux-test.firebaseapp.com",
  databaseURL: "https://fir-redux-test.firebaseio.com",
  storageBucket: "fir-redux-test.appspot.com",
  messagingSenderId: "534719380613"
};

firebase.initializeApp(config);

window.firebase = firebase;

ReactDOM.render(<App />, document.getElementById("root"));
