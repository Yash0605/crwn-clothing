import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router";
import { toggleCartDropdown } from "../../redux/cart/cart.action";

import "./cart-dropdown.styles.scss";

//* withRouer gives us access to the history props which would then help us to go to the check out page
const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem}></CartItem>
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartDropdown());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  </div>
);

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems,
// });

//*using a selector instead of normally getting the cart items from the state because mapStateToProps method on components are called everytime the state of the app is changed, so even if the state changes because of a new user sign in still the mapStateToProps will be called, now because of our structure this state is a new state post the state change so the CartDropdown component will be rerenedered, this can cause perf issues, so the sol we are using is reselect which uses the concept of memoization i.e caching. So now we are caching the cart property of the main state and thus the component will be rerendered only if the cart property is changed, thus giving us perf benefits
// const mapStateToProps =state => ({
//   selectCartItems : selectCartItems(state)
// });

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
