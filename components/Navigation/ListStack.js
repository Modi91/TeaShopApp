import { createStackNavigator } from "react-navigation";

import Homepage from "../Homepage";
import ProductList from "../ProductList";
import ProductDetail from "../ProductDetail";
import OrderHistory from "../OrderHistory";
import SpicificOrderTable from "../OrderHistory/SpicificOrderTable";

const ListStack = createStackNavigator(
  {
    OrderHistory: OrderHistory,
    SpicificOrderTable: SpicificOrderTable,
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
