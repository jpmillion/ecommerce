import { combineReducers } from "redux";
import logInReducer from "./logInReducer";
import listingsReducer from './listingsReducer';

const rootReducer = combineReducers({
    logIn: logInReducer,
    listings: listingsReducer
})

export default rootReducer;