import { ADD_TASK, DELETE_TASK, TOGGLE_TASK, EDIT_CLICK, EDIT_TASK }
  from '../constants/action-types';

const tasks = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [{
        id: Date.now(),
        title: action.title,
        completed: false,
        editing: false
      }, ...state];

    case DELETE_TASK:
      return state.filter((task) => task.id !== action.id);

    case TOGGLE_TASK:
      return state.map(task =>
        task.id === action.id ? { ...task, completed: !task.completed } : task
      );

    case EDIT_CLICK:
      return state.map(task =>
        task.id === action.id ? { ...task, editing: true } : task
      );

    case EDIT_TASK:
      return state.map(task =>
        task.id === action.id ? { ...task, editing: false, title: action.title } : task
      );

    default:
      return state;
  };
}

export default tasks;