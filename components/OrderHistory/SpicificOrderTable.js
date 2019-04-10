// React
import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, ListGroup } from "react-bootstrap";
import SpicificOrderRow from "./SpicificOrderRow";
import * as actionCreators from "../../../store/actions";
import { Link } from "react-router-dom";
class SpicificOrderTable extends Component {
  async componentDidMount() {
    this.props.user &&
      (await this.props.fetchOrdersHistory(this.props.user.user_id));

    this.props.refreshHistory(this.props.match.params.orderID);
  }

  componentWillUnmount() {
    this.props.resetHistory();
  }

  render() {
    if (this.props.user) {
      let madeOrder = this.props.currentOrder.madeorder;
      let historyRow = [];
      if (madeOrder) {
        historyRow = madeOrder.map(order => (
          <SpicificOrderRow key={this.props.currentOrder.id++} order={order} />
        ));
      }
      return (
        <div
          className=" justify-content-center mt-5"
          align="center"
          style={{ minWidth: "1200px" }}
        >
          <Card className="w-75">
            <Card.Body style={{ textAlign: "center", height: "75px" }}>
              <Card.Title className="text-muted" style={{ fontSize: "25px" }}>
                DETAILS OF YOUR ORDER
              </Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item
                style={{ fontSize: "12px", fontWeight: "bold" }}
                className="d-flex flex-row"
              >
                <div className="p-2 col-5 mr-2 ">Item Description</div>
                <div className="p-2 col-3 mr-5 "> Price (each)</div>
                <div className="p-2 col-1 mr-3">Qty </div>
                <div className="p-2">Subtotal</div>
              </ListGroup.Item>

              {historyRow}
              <div>Total: {this.props.currentOrder.total}</div>
            </ListGroup>
            <Link to="/profile/history">
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-light "
                  style={{ color: "grey", margin: "10px" }}
                >
                  Back
                </button>
              </div>
            </Link>
          </Card>
        </div>
      );
    } else {
      return <div>You must be logged in to view this page</div>;
    }
  }
}

const mapStateToProps = state => {
  return {
    orderHistory: state.historyReducer.history,
    currentOrder: state.historyReducer.currentOrder,
    user: state.authReducer.user
  };
};

const mapDispatchToProps = dispatch => ({
  refreshHistory: productID =>
    dispatch(actionCreators.refreshHistory(productID)),
  fetchOrdersHistory: userID =>
    dispatch(actionCreators.fetchOrdersHistory(userID)),
  resetHistory: () => dispatch(actionCreators.resetHistory())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpicificOrderTable);
