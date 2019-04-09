import React, { Component } from "react";

import { Provider } from "react-redux";
import store from "./store";
import HomePage from "./components/HomePage";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
  }
}

export default App;
