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
  CheckBox,
  Text,
  Body
} from "native-base";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import CartRow from "./CartRow";

// Components

// Action Functions
// import * as actionCreators from "../../store/actions";

class CartPage extends Component {
  state = {
    res: false
  };
  //   handleClick = async orders => {
  //     await this.props.createOrder(orders);
  //     if (this.props.response === true) {
  //       this.props.emptyCart();
  //     } else {
  //       this.setState({ res: true });
  //     }
  //   };

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
        <List>
          <CartRow />
          <CartRow />
          <CartRow />
        </List>
        <Header />

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
    response: state.cartReducer.response
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
