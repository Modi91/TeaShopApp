import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import AppContainer from "./components/Navigation";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
export default App;
