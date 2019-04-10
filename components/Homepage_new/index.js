import React, { Component } from "react";
import { Text, View, Button } from "native-base";
import { connect } from "react-redux";

import * as actionCreators from "../../store/actions";

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    return (
      <View>
        <Text>Test</Text>
        <Button onPress={() => this.props.navigation.navigate("List")}>
          <Text>GO TO THE ** LIST</Text>
        </Button>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(actionCreators.fetchProducts())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(HomePage);
