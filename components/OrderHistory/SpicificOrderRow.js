// React
import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { connect } from "react-redux";

class SpicificOrderRow extends Component {
  render() {
    return (
      <ListGroupItem>
        <ListGroup.Item className="d-flex flex-row align-items-center">
          <div
            className="p-2 col-4 "
            style={{ fontSize: "15px", padding: "20px", marginRight: "75px" }}
          >
            {this.props.order.product.name}
          </div>
          <div
            className="p-2 col-3"
            style={{ fontSize: "13px", marginRight: "25px" }}
          >
            {this.props.order.product.price}
          </div>
          <div className="p-2 col-2" style={{ fontSize: "13px" }}>
            {this.props.order.quantity}
          </div>
          <div className="p-2" style={{ fontSize: "13px" }}>
            {this.props.order.quantity * this.props.order.product.price}
          </div>
        </ListGroup.Item>
      </ListGroupItem>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentOrder: state.historyReducer.currentOrder,
    user: state.authReducer.user
  };
};
export default connect(
  mapStateToProps,
  null
)(SpicificOrderRow);
