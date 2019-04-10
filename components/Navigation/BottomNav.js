import { createBottomTabNavigator } from "react-navigation";
import React from "react";
import { Icon } from "native-base";
import AuthStack from "./AuthStack";
import ListStack from "./ListStack";
import CartStack from "./CartStack";

const BottomNav = createBottomTabNavigator(
  {
    Auth: AuthStack,
    List: ListStack,
    Cart: CartStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;

        let iconName = "";
        let iconType = "";
        switch (routeName) {
          case "Auth":
            iconName = "account";
            iconType = "MaterialCommunityIcons";
            break;
          case "List":
            iconName = "home";
            iconType = "Feather";
            break;
          case "Cart":
            iconName = "shoppingcart";
            iconType = "AntDesign";
            break;
          default:
            iconName = "account";
            iconType = "MaterialCommunityIcons";
        }
        return (
          <Icon name={iconName} type={iconType} style={{ color: tintColor }} />
        );
      }
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "rgb(155, 166, 87)",
      inactiveTintColor: "black",
      style: {
        backgroundColor: "rgb(248, 249, 250)"
      }
    }
  }
);

export default BottomNav;
