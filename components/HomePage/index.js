import React, { Component } from "react";
import { Text, View, Container } from "native-base";
import * as actionCreators from "../../store/actions";
import AppContainer from "../../navigation/index";
import { connect } from "react-redux";

class index extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const products = this.props.products;
    return (
      <Container>
        <View />
        <AppContainer />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(actionCreators.fetchProducts())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
