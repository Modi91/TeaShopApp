import React, { Component } from "react";
import { Text, Container, Card, CardItem, Button } from "native-base";
import { connect } from "react-redux";
import { Image } from "react-native";

import * as actionCreators from "../../store/actions";

class Profile extends Component {
  static navigationOptions = {
    title: "Profile",
    headerLeft: null
  };
  componentDidMount() {
    this.props.fetchProfile();
  }
  render() {
    const profile = this.props.profile;
    if (!profile) {
      return <Text>Loading</Text>;
    } else {
      return (
        <Container>
          <Card style={{ hight: 600, flex: 6 }}>
            <Image
              source={require("../../assets/icons8-tea-100.png")}
              style={{ width: 150, height: 150, alignSelf: "center" }}
            />

            <CardItem />
            <CardItem
              style={{
                alignSelf: "center"
              }}
            >
              <Text
                style={{
                  color: "rgb(155, 166, 87)",
                  fontWeight: "bold",
                  fontSize: 21,
                  position: "relative",
                  alignSelf: "center"
                }}
              >
                {profile.user.username}
              </Text>
            </CardItem>
            <CardItem
              style={{
                alignSelf: "center"
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontSize: 17,
                  position: "relative"
                }}
              >
                {profile.user.first_name} {profile.user.last_name}
              </Text>
            </CardItem>
            <CardItem
              style={{
                alignSelf: "center"
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontSize: 17,
                  position: "relative",
                  alignSelf: "center"
                }}
              >
                {profile.user.email}
              </Text>
            </CardItem>

            <CardItem
              style={{
                alignSelf: "center"
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontSize: 17,
                  position: "relative",
                  alignSelf: "center"
                }}
              >
                {profile.city}
              </Text>
            </CardItem>
            <CardItem
              style={{
                alignSelf: "center"
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontSize: 17,
                  position: "relative",
                  alignSelf: "center"
                }}
              >
                {profile.district}
              </Text>
            </CardItem>
            <CardItem
              style={{
                alignSelf: "center"
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontSize: 17,
                  position: "relative",
                  alignSelf: "center"
                }}
              >
                {profile.zip_code}
              </Text>
            </CardItem>
            <Button
              full
              onPress={() => this.props.navigation.navigate("OrderHistory")}
              style={{ backgroundColor: "rgb(155, 166, 87)" }}
            >
              <Text> You Orders History</Text>
            </Button>
            {/* <Button
              full
              onPress={() => this.props.navigation.navigate("Update")}
              style={{ backgroundColor: "rgb(155, 166, 87)" }}
            >
              <Text>Update</Text>
            </Button> */}
          </Card>
        </Container>
      );
    }
  }
}
const mapStateToProps = state => ({
  profile: state.profile.profile
});

const mapDispatchToProps = dispatch => ({
  fetchProfile: () => dispatch(actionCreators.fetchProfile())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
