import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from "../constants/action-types";

const tasks = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [{
        id: Date.now(),
        completed: false,
        title: action.title
      }, ...state];

    case DELETE_TASK:
      return state.filter((task) => task.id !== action.id);

    case TOGGLE_TASK:
      return state.map(task =>
        task.id === action.id ? { ...task, completed: !task.completed } : task
      );

    default:
      return state;
  };
}

export default tasks;