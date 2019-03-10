import { connect } from 'react-redux';
import { toggleTask, deleteTask, editClick } from '../actions/index';
import TodoList from '../components/todo-list';
import { VisibilityFilters } from '../actions';

const getVisibleTodos = (state, filter) => { 
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return state;

    case VisibilityFilters.SHOW_COMPLETED:
      return state.filter(t => t.completed);

    case VisibilityFilters.SHOW_ACTIVE:
      return state.filter(t => !t.completed);

    default:
      throw new Error('Unknown filter: ' + filter);
  }
};


const mapStateToProps = state => (
  { tasks: getVisibleTodos(state.tasks, state.visibilityFilter) }
  );

const mapDispatchToProps = dispatch => ({
  toggleTask: id => dispatch(toggleTask(id)),
  deleteTask: id => dispatch(deleteTask(id)),
  editClick: id => dispatch(editClick(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
