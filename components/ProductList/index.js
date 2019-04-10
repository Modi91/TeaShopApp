import React, { Component } from "react";
import { Text, Container, Header, List } from "native-base";
import { ScrollView } from "react-native-gesture-handler";

import ProductCard from "./ProductCard";
// Redux
import { connect } from "react-redux";

class ProductList extends Component {
  render() {
    let products = this.props.products;

    if (products) {
      productCards = products.map(product => (
        <ProductCard key={product.name} product={product} />
      ));
    }

    return (
      <Container>
        <ScrollView>
          <List>{products && productCards}</List>
        </ScrollView>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.products.products
  };
};
export default connect(mapStateToProps)(ProductList);
