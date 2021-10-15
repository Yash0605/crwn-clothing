import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selector";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({cartItems}) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => <CartItem id={cartItem.id} item = {cartItem}></CartItem>)}
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  </div>
);

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems,
// });

//*using a selector instead of normally getting the cart items from the state because mapStateToProps method on components are called everytime the state of the app is changed, so even if the state changes because a new user signs in still the mapStateToProps will be called, now because of our structure this state is a new state post the state change so the CartDropdown component will be renedered, this can cause perf issues, so the sol we are using is reselect which uses the concept of memoization i.e caching. So now we are caching the cart property of the main state and thus the component will be rendered only if the cart property is changed, thus giving us perf benefits
const mapStateToProps =state => ({
  selectCartItems : selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
