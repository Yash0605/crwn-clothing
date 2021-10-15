import React from "react";
import { connect } from "react-redux";
import { toggleCartDropdown } from "../../redux/cart/cart.action";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";

import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartDropdown, selectCartItemsCount}) => (
    <div className="cart-icon" onClick = {toggleCartDropdown}>
    <ShoppingBag className = "shopping-icon" />
    <span className="item-count">{selectCartItemsCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartDropdown : () => dispatch(toggleCartDropdown())
});

const MapStateToProps = state => ({
    selectCartItemsCount : selectCartItemsCount(state)
})

export default connect(MapStateToProps,mapDispatchToProps)(CartIcon);