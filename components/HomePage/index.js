import React, { Component } from "react";

// import * as actionCreators from "../../store/actions";
import { Container, View } from "native-base";
import AppContainer from "../../navigation/index";

import { connect } from "react-redux";

class HomePage extends Component {
  // componentDidMount() {
  //   this.props.fetchProducts();
  // }

  render() {
    return (
      <Container>
        <View />
        <AppContainer />
      </Container>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     products: state.products.products
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchProducts: () => dispatch(actionCreators.fetchProducts())
//   };
// };
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(index);

export default HomePage;
