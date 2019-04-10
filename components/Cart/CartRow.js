import React, { Component } from "react";
import {
  Container,
  Button,
  Content,
  Card,
  Icon,
  CardItem,
  Text,
  Body,
  ListItem
} from "native-base";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

class CartRow extends Component {
  handleDecrease = () => {
    this.props.deleteCartItem(this.props.item.product.id);
  };

  render() {
    const Itemquantity = this.props.cart.find(
      item => item.product.id === this.props.item.product.id
    );
    return (
      <ListItem>
        <Content>
          <Card>
            <CardItem header>
              <Text>{this.props.item.product.name}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  price:
                  {this.props.item.product.price}
                </Text>
                <Text>
                  quantity:
                  {Itemquantity.quantity}
                </Text>
                <Text>
                  subtotal:
                  {this.props.item.quantity * this.props.item.product.price}
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Icon
                name="minus"
                type="AntDesign"
                danger
                onPress={() =>
                  this.props.removeFromCart(this.props.item.product.id)
                }
              />

              <Icon
                name="trash-2"
                type="Feather"
                danger
                onPress={this.handleDecrease}
              />
            </CardItem>
          </Card>
        </Content>
      </ListItem>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cartReducer.cart
  };
};

const mapDispatchToProps = dispatch => ({
  deleteCartItem: productID =>
    dispatch(actionCreators.deleteCartItem(productID)),
  removeFromCart: productID =>
    dispatch(actionCreators.removeItemFromCart(productID))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartRow);
