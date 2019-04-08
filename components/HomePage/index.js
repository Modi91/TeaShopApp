import React, { Component } from "react";
import { Text, View } from "native-base";
import * as actionCreators from "../../store/actions";

import { connect } from "react-redux";

class index extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const products = this.props.products;
    console.log("TCL: index -> render -> products", products);
    return (
      <View>
        <Text>Welcom to Saudi Tea Shop</Text>
      </View>
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
