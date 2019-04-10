// React
import React, { Component } from "react";
import { Content, Card, CardItem, Text, Body, ListItem } from "native-base";
import { withNavigation } from "react-navigation";

class OrderTableRow extends Component {
  render() {
    return (
      <ListItem
        button
        onPress={() =>
          this.props.navigation.navigate("SpicificOrderTable", {
            madeOrder: this.props.order.madeorder,
            order: this.props.order
          })
        }
      >
        <Content>
          <Card>
            <CardItem header>
              <Text>
                Order Number:
                {this.props.order.id}
              </Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Total: {this.props.order.total} SAR</Text>
              </Body>
            </CardItem>
            <CardItem footer />
          </Card>
        </Content>
      </ListItem>
    );
  }
}

export default withNavigation(OrderTableRow);
