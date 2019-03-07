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
          {this.getFilterButtons()}
        </div>
        <VisibleTodoList />
      </div>
    );
  }

  getFilterButtons = () => {
    return (
      <React.Fragment>
        <FilterButton filterText="All" filter={VisibilityFilters.SHOW_ALL} />
        <FilterButton filterText="Active" filter={VisibilityFilters.SHOW_ACTIVE} />
        <FilterButton filterText="Compeleted" filter={VisibilityFilters.SHOW_COMPLETED} />
      </React.Fragment>
    );
  }
}

export default App;
