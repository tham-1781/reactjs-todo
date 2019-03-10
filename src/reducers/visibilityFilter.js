import { VisibilityFilters } from '../actions';
import {FILTER_TASK} from '../constants/action-types';

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case FILTER_TASK:
      return action.filter;
    default:
      return state;
  };
};

export default visibilityFilter;