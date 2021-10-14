import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase/Firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-Icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";

const Header = ({ currentUser,hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo"></Logo>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signIn">
          SIGN IN
        </Link>
      )}
      <CartIcon></CartIcon>
    </div>
    {
      hidden ? null : <CartDropdown></CartDropdown>
    }
  </div>
);

//Here the state is our root reducer, so we are getting the user propes from root which is userReducer and from that we are fetching the currentUser prop
const mapStateToProps = ({user: {currentUser}, cart:{hidden}}) => ({
  currentUser : currentUser,
  hidden: hidden
});

// connect is a higher order fun which takes in a react component and returns a component which is capable of using redux 
export default connect(mapStateToProps)(Header);
