import React, { Component } from "react";
import {
  Text,
  Body,
  Button,
  Form,
  Label,
  Input,
  List,
  ListItem,
  Item,
  Content,
  Header
} from "native-base";

import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/authActions";

class UpdateProfile extends Component {
  state = {
    user: { first_name: "", last_name: "", email: "" },
    city: "",
    district: "",
    zip_code: 0
  };
  componentDidMount() {
    this.props.profile &&
      this.setState({
        user: {
          first_name: this.props.profile.user.first_name,
          last_name: this.props.profile.user.last_name,
          email: this.props.profile.user.email
        },
        city: this.props.profile.city,
        district: this.props.profile.district,
        zip_code: this.props.profile.zip_code.toString()
      });
  }

  componentDidUpdate(prevState) {
    if (this.state === prevState) {
      this.setState({
        user: {
          first_name: this.props.profile.user.first_name,
          last_name: this.props.profile.user.last_name,
          email: this.props.profile.user.email
        },
        city: this.props.profile.city,
        district: this.props.profile.district,
        zip_code: this.props.profile.zip_code
      });
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleChangeuser = event => {
    let userState = this.state.user;
    this.setState({
      user: { ...userState, [event.target.name]: event.target.value }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.updateProfile(this.state);
  };

  render() {
    const profile = this.props.profile;
    if (!profile) {
      return <Text>Loading</Text>;
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
                      name="first_name"
                      autoCorrect={false}
                      autoCapitalize="none"
                      value={this.state.user.first_name}
                      onChangeText={this.handleChangeuser}
                    />
                  </Item>

                  <Item
                    rounded
                    style={{ backgroundColor: "white", marginTop: 10 }}
                  >
                    <Input
                      name="last_name"
                      autoCorrect={false}
                      autoCapitalize="none"
                      value={this.state.user.last_name}
                      onChangeValue={this.handleChangeuser}
                    />
                  </Item>
                  <Item
                    rounded
                    style={{ backgroundColor: "white", marginTop: 10 }}
                  >
                    <Input
                      name="email"
                      autoCorrect={false}
                      autoCapitalize="none"
                      value={this.state.user.email}
                      onChangeText={this.handleChangeuser}
                    />
                  </Item>
                  <Item
                    rounded
                    style={{ backgroundColor: "white", marginTop: 10 }}
                  >
                    <Input
                      name="city"
                      autoCorrect={false}
                      autoCapitalize="none"
                      value={this.state.city}
                      onChangeText={this.handleChange}
                    />
                  </Item>
                  <Item
                    rounded
                    style={{ backgroundColor: "white", marginTop: 10 }}
                  >
                    <Input
                      name="district"
                      autoCorrect={false}
                      autoCapitalize="none"
                      value={this.state.district}
                      onChangeText={this.handleChange}
                    />
                  </Item>
                  <Item
                    rounded
                    style={{ backgroundColor: "white", marginTop: 10 }}
                  >
                    <Input
                      name="zip_code"
                      type="numeric"
                      autoCorrect={false}
                      autoCapitalize="none"
                      value={this.state.zip_code}
                      onChangeText={this.handleChange}
                    />
                  </Item>
                </Form>
              </Body>
            </ListItem>

            <Button
              full
              onPress={this.handleSubmit}
              style={{ backgroundColor: "rgb(155, 166, 87)" }}
            >
              <Text>Update</Text>
            </Button>
            <Button
              full
              onPress={() => this.props.navigation.navigate("Profile")}
              style={{ backgroundColor: "rgb(155, 166, 87)" }}
            >
              <Text>Back</Text>
            </Button>
          </List>
          <Body>
            <Label style={{ color: "red", opacity: 0.6 }} />
          </Body>
        </Content>
      );
    }
  }
}
const mapStateToProps = state => ({
  profile: state.profile.profile
});

const mapDispatchToProps = dispatch => ({
  updateProfile: new_profile =>
    dispatch(actionCreators.updateProfile(new_profile)),
  fetchProfile: () => dispatch(actionCreators.fetchProfile())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateProfile);
