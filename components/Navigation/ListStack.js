import { createStackNavigator } from "react-navigation";

import Homepage from "../Homepage";
import ProductList from "../ProductList";
import ProductDetail from "../ProductDetail";

const ListStack = createStackNavigator(
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

export default ListStack;
