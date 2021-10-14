import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

//All the reducers are checked, wherever the action.type matches which is what we are setting at the time of making any change that reducers state is used to update the state
export default combineReducers({
    user: userReducer,
    cart: cartReducer
});