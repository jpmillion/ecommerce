import { combineReducers } from "redux";
import logInReducer from "./logInReducer";
import listingsReducer from './listingsReducer';
import customerReducer from "./customerReducer";
import cartReducer from "./cartReducer";
import cartItemsReducer from './cartItemsReducer';

const rootReducer = combineReducers({
    logIn: logInReducer,
    customer: customerReducer,
    listings: listingsReducer,
    cart: cartReducer,
    cartItems: cartItemsReducer
})

export default rootReducer;