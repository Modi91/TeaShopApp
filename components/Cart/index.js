// React
import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  List,
  FooterTab,
  Footer,
  ListItem,
  Text,
  View,
  Body,
  Button
} from "native-base";

import { connect } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";
import * as actionCreators from "../../store/actions";

import CartRow from "./CartRow";

// Components

class CartPage extends Component {
  static navigationOptions = {
    title: "Cart"
  };
  state = {
    res: false
  };
  handlePress = async orders => {
    if (this.props.user) {
      await this.props.createOrder(orders);
      if (this.props.response[0] === true) {
        this.props.emptyCart();
      } else {
        this.setState({ res: true });
      }
    } else {
      return this.props.navigation.navigate("Login");
    }
  };

  render() {
    const cartRow = this.props.cart.map(item => (
      <CartRow key={item.product.id} item={item} />
    ));
    const mapTotal = this.props.cart.map(
      item => item.product.price * item.quantity
    );
    const orders_list = this.props.cart.map(item => ({
      product: item.product.id,
      quantity: item.quantity
    }));
    return (
      <Container>
        <ScrollView>
          {this.state.res && (
            <List>
              {this.props.response.map((value, index) => {
                return (
                  <ListItem key={index}>
                    <Text style={{ color: "rgb(255, 0, 0)" }}>{value}</Text>
                  </ListItem>
                );
              })}
            </List>
          )}
          <List>{cartRow}</List>
          <Button
            onPress={() => this.handlePress(orders_list)}
            style={{
              backgroundColor: "grey",
              border: "0px",
              opacity: "0.6",
              fontSize: 18,
              marginTop: 50,
              alignSelf: "center"
            }}
          >
            <Text style={{ marginLeft: 10 }}>CHECKOUT</Text>
          </Button>
        </ScrollView>

        <Footer>
          <FooterTab>
            <Text>
              Total:
              {mapTotal.reduce((accumulator, currentValue) => {
                return accumulator + currentValue;
              }, 0)}
            </Text>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cartReducer.cart,
    response: state.cartReducer.response,
    user: state.authReducer.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createOrder: orders => dispatch(actionCreators.createOrder(orders)),
    emptyCart: () => dispatch(actionCreators.emptyCart())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPage);
