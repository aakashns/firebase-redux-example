import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import Dummy from "./containers/Dummy";
import linkDummy from "./util/linkDummy";
import { database } from "firebase";

const store = configureStore();

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
};

class App extends Component {
  componentDidMount() {
    linkDummy(database(), store);
  }

  render() {
    return (
      <Provider store={store}>
        <div style={styles.container}>
          <Dummy />
        </div>
      </Provider>
    );
  }
}

export default App;
