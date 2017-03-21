import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import Dummy from "./containers/Dummy";
import { database } from "firebase";
import FirebaseProvider from "./firebase-redux-react/FirebaseProvider";

const store = configureStore();

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
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
            <Dummy />
          </div>
        </Provider>
      </FirebaseProvider>
    );
  }
}

export default App;
