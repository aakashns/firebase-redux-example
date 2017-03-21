import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import { database } from "firebase";
import FirebaseProvider from "./firebase-redux-react/FirebaseProvider";
import Dummy from "./containers/Dummy";
import Comments from "./containers/Comments";

const store = configureStore();

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 16
  }
};

class App extends Component {
  render() {
    return (
      <FirebaseProvider database={database()}>
        <Provider store={store}>
          <div style={styles.container}>
            <h2>React Firebase</h2>
            <Dummy />
            <br />
            <br />
            <Comments />
          </div>
        </Provider>
      </FirebaseProvider>
    );
  }
}

export default App;
