import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/authActions";
import Profile from "../Profile";

// NativeBase Components
import {
  Text,
  Button,
  Body,
  List,
  ListItem,
  Form,
  Label,
  Input,
  Item,
  Content,
  Header
} from "native-base";
class Login extends Component {
  static navigationOptions = {
    title: "Login"
  };
  state = {
    username: "",
    password: ""
  };
  render() {
    if (this.props.user) {
      return this.props.navigation.navigate("Profile");
    } else {
      return (
        <Content>
          <Header transparent />
          <List>
            <ListItem style={{ borderBottomWidth: 0 }}>
              <Body>
                <Form>
                  <Item
                    rounded
                    style={{
                      backgroundColor: "white",
                      marginTop: 10,
                      marginBottom: 10
                    }}
                  >
                    <Input
                      autoCorrect={false}
                      autoCapitalize="none"
                      onChangeText={username => this.setState({ username })}
                      placeholder="username"
                    />
                  </Item>

                <Item
                  rounded
                  style={{ backgroundColor: "white", marginTop: 10 }}
                >
                  <Input
                    autoCorrect={false}
                    secureTextEntry
                    autoCapitalize="none"
                    onChangeText={password => this.setState({ password })}
                    placeholder="password"
                  />
                </Item>
              </Form>
            </Body>
          </ListItem>
          <Button
            full
            onPress={() => this.props.login(this.state, this.props.navigation)}
            style={{ backgroundColor: "rgb(207, 214, 160)" }}
          >
            <Text>Login</Text>
          </Button>
          <Button
            full
            onPress={() => this.props.navigation.navigate("Signup")}
            style={{ backgroundColor: "rgb(155, 166, 87)" }}
          >
            <Text>Signup</Text>
          </Button>
        </List>
      </Content>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.authReducer.user
  };
};

const mapDispatchToProps = dispatch => ({
  login: (userData, navigation) =>
    dispatch(actionCreators.login(userData, navigation)),
  signup: (userData, navigation) =>
    dispatch(actionCreators.signup(userData, navigation))

  // checkForExpiredToken: () => dispatch(actionCreators.checkForExpiredToken())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
