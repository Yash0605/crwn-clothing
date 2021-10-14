import CartActionTypes from "./cart.types";

// payload property is optionsl so we are not passing it here
export const toggleCartDropdown = () => ({
    type:CartActionTypes.TOGGLE_CART_DROPDOWN
});

export const addItem = item => ({
    type:CartActionTypes.ADD_ITEM,
    payload:item
})