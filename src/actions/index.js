import { ADD_TASK, DELETE_TASK, TOGGLE_TASK, FILTER_TASK }
  from "../constants/action-types";

export const addTask = title => ({
  type: ADD_TASK,
  title
});

export const setVisibilityFilter = filter => ({
  type: FILTER_TASK,
  filter
});

export const toggleTask = id => ({
  type: TOGGLE_TASK,
  id
});

export const deleteTask = id => ({
  type: DELETE_TASK,
  id
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};