import React, { Component, PropTypes } from "react";

const attach = connection =>
  C => {
    class FirebaseReduxWrapper extends Component {
      componentDidMount() {
        const { database, store } = this.context;
        this.endConnection = connection(database, store);
      }

      componentWillUnmount() {
        this.endConnection();
      }

      render() {
        return <C {...this.props} />;
      }
    }

    FirebaseReduxWrapper.contextTypes = {
      store: PropTypes.object,
      database: PropTypes.any
    };

    return FirebaseReduxWrapper;
  };

export default attach;
