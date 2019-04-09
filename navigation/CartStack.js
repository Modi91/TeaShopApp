import { createStackNavigator } from "react-navigation";
// component imports
import CartPage from "../components/Cart/index";
const CartStack = createStackNavigator(
  {
    cart: CartPage
  },
  { initialRouteName: "cart" }
);

export default CartStack;
