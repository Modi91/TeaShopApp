import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./store";
import HomePage from "./components/HomePage";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <HomePage />
        </View>
      </Provider>
    );
  }
}
