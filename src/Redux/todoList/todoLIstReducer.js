import { ADDTODO } from "./todoListAction.js";
import { initialState } from "./todoListInitialState.js";

const todoListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADDTODO:
      return (state = {
        ...state,
        todos: {
          ...state.todos,
          payload,
        },
      });
    default:
      return state;
  }
};

//export
export default todoListReducer;
