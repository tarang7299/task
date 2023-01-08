import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import ProductReducer from "./ProductReducer";

const rootReducer = combineReducers({
  AuthReducer: AuthReducer,
  ProductReducer: ProductReducer,
});
export default rootReducer;
