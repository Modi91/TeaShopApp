import React, { Component } from "react";
import {
  Container,
  Button,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  ListItem
} from "native-base";
import { connect } from "react-redux";

class CartRow extends Component {
  handleDecrease = () => {
    this.props.deleteCartItem(this.props.item.product.id);
  };

  render() {
    return (
      <ListItem>
        <Content>
          <Card>
            <CardItem header>
              <Text>Product name</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>product details</Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Button danger onPress={() => this.handleDecrease}>
                <Text>decrease</Text>
              </Button>
              <Button
                danger
                onPress={() =>
                  this.props.removeFromCart(this.props.item.product.id)
                }
              >
                <Text>remove</Text>
              </Button>
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
