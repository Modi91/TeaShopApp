import { createBottomTabNavigator } from "react-navigation";
import React from "react";
import { Icon } from "native-base";
import AuthStack from "./AuthStack";

const BottomNav = createBottomTabNavigator(
  {
    Auth: AuthStack
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
          //   case "ClassRooms":
          //     iconName = "ios-book";
          //     iconType = "Ionicons";
          //     break;
          //   case "Students":
          //     iconName = "book-reader";
          //     iconType = "FontAwesome5";
          //     break;
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
