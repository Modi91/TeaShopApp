import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from "../Authntication/Login";
import Signup from "../Authntication/Signup";
import Profile from "../Profile";

import OrderHistory from "../OrderHistory";
import Homepage from "../Homepage";
import Update from "../UpdateProfile";

const AuthStack = createStackNavigator(
  {
    Login: Login,
    Signup: Signup,
    Profile: Profile,
    History: OrderHistory,
    Home: Homepage

    // OrderHistory: OrderHistory,
    // SpicificOrderTable: SpicificOrderTable,

  },
  {
    initialRouteName: "Login",
    cardStyle: {
      backgroundColor: "rgb(248, 249, 250)"
    },
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "rgb(155, 166, 87)"
      },
      headerTextStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default AuthStack;
