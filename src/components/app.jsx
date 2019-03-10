import React, { Component } from 'react';
import '../app.css';
import Header from './header';
import VisibleTodoList from '../containers/visible-todo-list';
import TaskForm from '../containers/task-form';
import FilterButton from '../containers/filter-link';
import { VisibilityFilters } from '../actions'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <TaskForm />
        <h3 className="filter-label">Filter:</h3>
        <div className="filter-buttons">
          <FilterButton filter={VisibilityFilters.SHOW_ALL}>
            All
          </FilterButton>
          <FilterButton filter={VisibilityFilters.SHOW_ACTIVE}>
            Active
          </FilterButton>
          <FilterButton filter={VisibilityFilters.SHOW_COMPLETED}>
            Completed
          </FilterButton>
        </div>
        <VisibleTodoList />
      </div>
    );
  }
}

export default App;
