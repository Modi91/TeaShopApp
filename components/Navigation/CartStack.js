import { createStackNavigator, createAppContainer } from "react-navigation";

import Cart from "../Cart/index";
import Login from "../Authntication/Login";

const Cartstack = createStackNavigator(
  {
    Cart: Cart,
    Login: Login
  },
  {
    initialRouteName: "Cart",
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

export default Cartstack;
