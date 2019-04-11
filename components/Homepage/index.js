import React, { Component } from "react";
import { Text, View, Button, Icon } from "native-base";
import { connect } from "react-redux";
import { ImageBackground } from "react-native";

import * as actionCreators from "../../store/actions";

class HomePage extends Component {
  static navigationOptions = {
    title: "Home"
  };
  componentDidMount() {
    this.props.fetchProducts();
    // this.props.fetchProfile();
  }
  render() {
    return (
      <ImageBackground
        source={require("../../assets/homepage.png")}
        style={{ width: null, flex: 1 }}
      >
        <Text
          style={{
            fontSize: 35,
            marginTop: 30,
            fontWeight: "bold",
            color: "rgb(255, 255, 255)",
            marginLeft: 10
          }}
        >
          CHOOSE YOUR TEA ..
        </Text>
        <Text
          style={{
            fontSize: 25,
            paddingTop: 10,
            fontStyle: "italic",
            color: "rgb(255, 255, 255)",
            marginLeft: 10
          }}
        >
          Whether you prefer Loose Leaf or Sachets, our tea comes in a variety
          of blends and brew methods
        </Text>
        <Button
          onPress={() => this.props.navigation.navigate("List")}
          style={{
            backgroundColor: "grey",
            border: "0px",
            opacity: "0.6",
            fontSize: 18,
            marginTop: 50,
            alignSelf: "center"
          }}
        >
          <Text style={{ marginLeft: 10 }}>
            DISCOVER THE COLLECTION{" "}
            <Icon
              name="leaf"
              type="FontAwesome"
              style={{ color: "rgb(155, 166, 87)", fontSize: 22 }}
            />
          </Text>
        </Button>
      </ImageBackground>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(actionCreators.fetchProducts()),
    fetchProfile: () => dispatch(actionCreators.fetchProfile())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(HomePage);
