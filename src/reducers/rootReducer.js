import { combineReducers } from "redux";
import logInReducer from "./logInReducer";
import listingsReducer from './listingsReducer';
import customerReducer from "./customerReducer";
import cartReducer from "./cartReducer";
import cartItemsReducer from './cartItemsReducer';
import trendingListingsReducer from "./trendingListingsReducer";
import ordersReducer from "./ordersReducer";
import orderItemsReducer from "./orderItemsReducer";

const rootReducer = combineReducers({
    logIn: logInReducer,
    customer: customerReducer,
    listings: listingsReducer,
    cart: cartReducer,
    cartItems: cartItemsReducer,
    trendingListings: trendingListingsReducer,
    orders: ordersReducer,
    orderItems: orderItemsReducer
})

export default rootReducer;