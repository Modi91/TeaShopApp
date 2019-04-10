// React
import React, { Component } from "react";
import { Content, Card, CardItem, Text, Body, ListItem } from "native-base";
import { withNavigation } from "react-navigation";

class SpicificOrderRow extends Component {
  render() {
    return (
      <ListItem>
        <Content>
          <Card>
            <CardItem header>
              <Text> {this.props.order.product.name}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>price: {this.props.order.product.price} SAR</Text>
              </Body>
              <Body>
                <Text>quantity: {this.props.order.quantity} </Text>
              </Body>
              <Body>
                <Text>
                  subtotal:
                  {this.props.order.quantity *
                    this.props.order.product.price}{" "}
                  SAR
                </Text>
              </Body>
            </CardItem>
            <CardItem footer />
          </Card>
        </Content>
      </ListItem>
    );
  }
}

export default withNavigation(SpicificOrderRow);

{
  /* <ListGroupItem>
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
      </ListGroupItem> */
}
