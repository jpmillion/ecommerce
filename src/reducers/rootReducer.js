import { combineReducers } from "redux";
import logInReducer from "./logInReducer";
import listingsReducer from './listingsReducer';
import customerReducer from "./customerReducer";
import cartReducer from "./cartReducer";
import cartItemsReducer from './cartItemsReducer';
import trendingListingsReducer from "./trendingListingsReducer";
import ordersReducer from "./ordersReducer";
import orderItemsReducer from "./orderItemsReducer";
import interestingListingsReducer from "./interestingListingsReducer";

const rootReducer = combineReducers({
    logIn: logInReducer,
    customer: customerReducer,
    cart: cartReducer,
    cartItems: cartItemsReducer,
    orders: ordersReducer,
    orderItems: orderItemsReducer,
    listings: listingsReducer,
    trendingListings: trendingListingsReducer,
    interestingListings: interestingListingsReducer
})

export default rootReducer;