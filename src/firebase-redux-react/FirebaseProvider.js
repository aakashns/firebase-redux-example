import { Component, PropTypes } from "react";

export default class FirebaseProvider extends Component {
  getChildContext() {
    return { database: this.props.database };
  }
  render() {
    return this.props.children;
  }
}

FirebaseProvider.childContextTypes = {
  database: PropTypes.any
};
