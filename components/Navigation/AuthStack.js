import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from "../Authntication/Login";
import Signup from "../Authntication/Signup";

const AuthStack = createStackNavigator(
  {
    Login: Login,
    Signup: Signup
  },
  {
    initialRouteName: "Login",
    cardStyle: {
      backgroundColor: "rgb(248, 249, 250)"
    },
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "rgb(248, 249, 250)"
      },
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerTintColor: "rgb(248, 249, 250)"
    }
  }
);

export default AuthStack;
