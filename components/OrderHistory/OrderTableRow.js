// React
import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

class OrderTableRow extends Component {
  render() {
    return (
      <ListGroup.Item className="d-flex flex-row justify-content-center ml-10">
        <div
          className="p-2 col-1 "
          style={{ fontSize: "15px", padding: "20px", marginLeft: "55px" }}
        />
        <div className="p-2 col-3 mr-5" style={{ fontSize: "13px" }}>
          {this.props.order.id}
        </div>
        <div className="p-2 col-4 " style={{ fontSize: "13px" }}>
          {this.props.order.total}
        </div>
        <Link to={`/profile/history/${this.props.order.id}`}>
          <button
            style={{
              backgroundColor: "rgb(155, 166, 87)",
              width: "70px",
              fontSize: "15px",
              borderRadius: "50px",
              color: "white",
              border: "0px",
              padding: "0px"
            }}
          >
            <i
              className="ml-auto p-2 fas fa-plus"
              style={{
                color: "white",
                position: "relative"
              }}
            />
            info
          </button>
        </Link>
      </ListGroup.Item>
    );
  }
}

export default OrderTableRow;
