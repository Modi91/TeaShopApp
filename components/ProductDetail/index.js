import React, { Component } from "react";
import { Text, Content } from "native-base";
class ProductDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("product").name
    };
  };
  render() {
    const product = this.props.navigation.getParam("product");
    return (
      <Content>
        <Text>{product.name}</Text>
        <Text>HAHA</Text>
      </Content>
    );
  }
}

export default ProductDetail;
