import { createStackNavigator, createAppContainer } from "react-navigation";

import Homepage from "../Homepage_new";
import ProductList from "../ProductList";
import ProductDetail from "../ProductDetail";

const StackNav = createStackNavigator(
  {
    Home: Homepage,
    List: ProductList,
    Detail: ProductDetail
  },
  {
    initialRouteName: "Home",
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

const AppContainer = createAppContainer(StackNav);
export default AppContainer;