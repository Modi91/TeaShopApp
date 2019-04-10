import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/authActions";

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
  state = {
    username: "",
    password: ""
  };
  render() {
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
            style={{ backgroundColor: "rgb(228, 211, 207)" }}
          >
            <Text>Login</Text>
          </Button>
          <Button
            full
            onPress={() => this.props.navigation.navigate("Signup")}
            style={{ backgroundColor: "rgb(186, 123, 128)" }}
          >
            <Text>Register</Text>
          </Button>
        </List>
      </Content>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: (userData, navigation) =>
    dispatch(actionCreators.login(userData, navigation)),
  signup: (userData, navigation) =>
    dispatch(actionCreators.signup(userData, navigation))

  // checkForExpiredToken: () => dispatch(actionCreators.checkForExpiredToken())
});
export default connect(
  null,
  mapDispatchToProps
)(Login);
