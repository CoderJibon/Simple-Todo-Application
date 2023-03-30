import { combineReducers } from "redux";
import todoListReducer from "./todoList/todoLIstReducer.js";

// root reducer with combineReducers
const RootReducer = combineReducers({
  todos: todoListReducer,
});

//export
export default RootReducer;
