import React, { Component } from "react";
// Redux
import { connect } from "react-redux";

import { Image, TouchableOpacity } from "react-native";
import {
  Text,
  Card,
  CardItem,
  Header,
  Icon,
  Content,
  ListItem
} from "native-base";

// Action Functions
import * as actionCreators from "../../store/actions";
import { withNavigation } from "react-navigation";

class ProductCard extends Component {
  state = {
    quantity: 1
  };

  handleAddClick = () => {
    this.props.addCart(this.props.product, this.state.quantity);
  };

  handlePress = async product => {
    await this.props.getProduct(product);
    this.props.navigation.navigate("Detail", { product: product });
  };
  render() {
    let product = this.props.product;
    if (!product) {
      return <Text>Loading</Text>;
    } else {
      return (
        <TouchableOpacity>
          <Content>
            <ListItem button onPress={() => this.handlePress(product)}>
              <Card style={{ hight: 600, flex: 3 }}>
                <Image
                  source={{ uri: product.images[0].image }}
                  style={{ width: null, height: 200 }}
                />
                <CardItem>
                  <Text
                    style={{
                      color: "rgb(155, 166, 87)",
                      fontWeight: "bold",
                      fontSize: 20,
                      position: "relative"
                    }}
                  >
                    {product.name}
                  </Text>
                </CardItem>
                <CardItem>
                  <Text
                    style={{
                      position: "relative"
                    }}
                  >
                    {product.price}
                  </Text>
                </CardItem>
                <CardItem>
                  <Icon
                    name="plus"
                    type="AntDesign"
                    danger
                    onPress={this.handleAddClick}
                  />
                </CardItem>
                <CardItem>
                  {product.stock > 0 ? (
                    <Text style={{ color: "green" }}>In Stock</Text>
                  ) : (
                    <Text style={{ color: "red" }}>Out of Stock</Text>
                  )}
                </CardItem>
              </Card>
            </ListItem>
          </Content>
        </TouchableOpacity>
      );
    }
  }
}

const mapDispatchToProps = dispatch => ({
  getProduct: product => dispatch(actionCreators.currentProduct(product)),
  addCart: (productObj, quantity) =>
    dispatch(actionCreators.addCart(productObj, quantity))
});

export default connect(
  null,
  mapDispatchToProps
)(withNavigation(ProductCard));
