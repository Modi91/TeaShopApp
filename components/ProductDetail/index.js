import React, { Component } from "react";
import { Text, Content, Icon, Card, CardItem } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { Image } from "react-native";

import { connect } from "react-redux";

import * as actionCreators from "../../store/actions";

class ProductDetail extends Component {
  state = {
    quantity: 1
  };

  handleAddClick = () => {
    this.props.addCart(this.props.product, this.state.quantity);
  };

  handleRemoveClick = () => {
    this.props.removeFromCart(this.props.product.id);
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("product").name
    };
  };
  render() {
    const product = this.props.navigation.getParam("product");
    const Itemquantity = this.props.cart.find(
      item => item.product.id === this.props.product.id
    );
    return (
      <ScrollView>
        <Card>
          <Image
            source={{ uri: product.images[0].image }}
            style={{ width: null, height: "100%" }}
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
                position: "relative",
                color: "rgb(137, 137, 136)"
              }}
            >
              {product.price}
            </Text>
          </CardItem>
          <CardItem>
            <Text style={{ color: "rgb(137, 137, 136)" }}>
              {product.description}
            </Text>
          </CardItem>
          <CardItem>
            <Icon
              name="plus"
              type="AntDesign"
              danger
              onPress={this.handleAddClick}
              style={{ color: "rgb(155, 166, 87)", fontSize: 20 }}
            />
            <Text style={{ color: "rgb(137, 137, 136)" }}>
              {Itemquantity ? Itemquantity.quantity : 0}
              {"    "}
            </Text>
            {Itemquantity && (
              <Icon
                name="minus"
                type="AntDesign"
                danger
                onPress={this.handleRemoveClick}
                style={{ color: "rgb(155, 166, 87)", fontSize: 20 }}
              />
            )}
          </CardItem>
          <CardItem>
            {product.stock > 0 ? (
              <Text style={{ color: "green", fontSize: 13 }}>In Stock</Text>
            ) : (
              <Text style={{ color: "red", fontSize: 13 }}>Out of Stock</Text>
            )}
          </CardItem>
        </Card>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.products.currentProduct,
    products: state.products.products,
    cart: state.cartReducer.cart
  };
};

const mapDispatchToProps = dispatch => ({
  addCart: (productObj, quantity) =>
    dispatch(actionCreators.addCart(productObj, quantity)),
  removeFromCart: productID =>
    dispatch(actionCreators.removeItemFromCart(productID))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);

//                 {
//                   <i
//                     onClick={this.handleAddClick}
//                     className="ml-auto p-2 fas fa-plus"
//                     style={{
//                       color: "rgb(155, 166, 87)",
//                       position: "relative"
//                     }}
//                   />
//                 }
//                 {Itemquantity && (
//                   <i
//                     onClick={this.handleRemoveClick}
//                     className="ml-auto p-2 fas fa-minus"
//                     style={{ color: "rgb(155, 166, 87)", position: "relative" }}
//                   />
