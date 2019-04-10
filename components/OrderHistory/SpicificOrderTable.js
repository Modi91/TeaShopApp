// React
import React, { Component } from "react";
import { connect } from "react-redux";
import SpicificOrderRow from "./SpicificOrderRow";
import { Container, List } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
class SpicificOrderTable extends Component {
  render() {
    let madeOrder = this.props.navigation.getParam("madeOrder");
    let historyRow = [];
    if (madeOrder) {
      historyRow = madeOrder.map(order => (
        <SpicificOrderRow
          key={this.props.navigation.getParam("order").id++}
          order={order}
        />
      ));
    }
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
    currentOrder: state.historyReducer.currentOrder
  };
};

export default connect(
  mapStateToProps,
  null
)(SpicificOrderTable);

//  <div>Total: {this.props.navigation.getParam("order").total}</div>
