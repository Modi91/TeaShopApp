import React, { Component } from "react";
import { Text, Content, Icon } from "native-base";
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
      <Content>
        <Text>{product.name}</Text>
        <Text>HAHA</Text>
        <Text>Quantity: {Itemquantity ? Itemquantity.quantity : 0}</Text>

        <Icon
          name="plus"
          type="AntDesign"
          danger
          onPress={this.handleAddClick}
        />
        {Itemquantity && (
          <Icon
            name="minus"
            type="AntDesign"
            danger
            onPress={this.handleRemoveClick}
          />
        )}
      </Content>
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
