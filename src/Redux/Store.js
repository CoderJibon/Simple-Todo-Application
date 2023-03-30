import { createStore, applyMiddleware } from "redux";
import RootReducer from "./RootReducer.js";
import thank from "thank";
import { composeWithDevTools } from "redux-devtools-extension";

//middleware
const middleware = [];

//Store
const Store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

//export
export default Store;
