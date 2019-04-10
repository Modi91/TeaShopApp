// React
import React, { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import OrderTableRow from "../OrderHistory/OrderTableRow";
import * as actionCreators from "../../../store/actions/index";

// Components
// import CartRow from "./CartRow";

class OrdersHistory extends Component {
  render() {
    retern();
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
)(OrdersHistory);

// componentDidMount() {
//   this.props.user && this.props.fetchOrdersHistory(this.props.user.user_id);
// }

// render() {
//   const historyRow = this.props.orderHistory.map(order => (
//     <OrderTableRow key={order.id} order={order} />
//   ));
//   if (this.props.user) {
//     return (
//       <div
//         className=" justify-content-center mt-5 "
//         align="center"
//         style={{ minWidth: "500px" }}
//       >
//         <Card className="w-75">
//           <Card.Body style={{ textAlign: "center", height: "75px" }}>
//             <Card.Title className="text-muted" style={{ fontSize: "25px" }}>
//               Your Orders:
//             </Card.Title>
//           </Card.Body>
//           <ListGroup className="list-group-flush">
//             <ListGroup.Item
//               style={{ fontSize: "12px", fontWeight: "bold" }}
//               className="d-flex flex-row justify-content-center"
//             >
//               <div className="p-2 col-1  ">DATE</div>
//               <div className="p-2 col-3 mr-5 ">ORDER NUMBER</div>
//               <div className="p-2 col-4 ">TOTAL AMOUNT</div>
//             </ListGroup.Item>

//             {historyRow}
//             <div className="p-2 d-flex" />
//           </ListGroup>
//         </Card>
//       </div>
//     );
//   } else {
//     return (
//       <div className=" justify-content-center">
//         You must be logged in to view this page
//       </div>
//     );
//   }
// }
