// React
import React, { Component } from "react";
import { Container, List } from "native-base";
import { connect } from "react-redux";
import OrderTableRow from "./OrderTableRow";
import * as actionCreators from "../../store/actions";
import { ScrollView } from "react-native-gesture-handler";

// Components
// import CartRow from "./CartRow";

class OrderHistory extends Component {
  componentDidMount() {
    this.props.user && this.props.fetchOrdersHistory(this.props.user.user_id);
  }

  render() {
    const historyRow = this.props.orderHistory.map(order => (
      <OrderTableRow key={order.id} order={order} />
    ));

    return (
      <Container>
        <ScrollView>
          <List>{historyRow}</List>
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    orderHistory: state.historyReducer.history,
    user: state.authReducer.user
  };
};

const mapDispatchToProps = dispatch => ({
  fetchOrdersHistory: userID =>
    dispatch(actionCreators.fetchOrdersHistory(userID))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderHistory);
