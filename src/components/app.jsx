import React, { Component } from 'react';
import '../app.css';
import Header from './header';
import TodoList from './todo-list';
import TodoForm from './todo-form';
import Filter from './filter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: this.getTasksFromStorage(),
      filteredTasks: this.getTasksFromStorage()
    }
  }

  render() {
    return (
      <div className="app">
        <Header />
        <TodoForm isEditing={false} tasks={this.state.tasks} createTask={this.handleCreate} />
        <h3 className="filter-label">Filter:</h3>
        <div className="filter-buttons">
          {this.getFilterButtons()}
        </div>
        <TodoList tasks={this.state.filteredTasks} deleteTask={this.handleDelete}
          toggleTask={this.handleToggleTask}
          handleSaveTask={this.handleSaveTask} />
      </div>
    );
  }

  handleToggleTask = (task) => {
    const tasks = [...this.state.filteredTasks];
    const index = tasks.indexOf(task);
    tasks[index].completed = !tasks[index].completed;
    this.setState({ tasks: tasks, filteredTasks: tasks });
    this.saveToStorage(tasks);
  }

  handleDelete = (taskId) => {
    let tasks = this.state.tasks.filter(x => x.id !== taskId);
    this.setState({ tasks: tasks, filteredTasks: tasks });
    this.saveToStorage(tasks);
  }

  handleSaveTask = (oldTask, newTask) => {
    const tasks = [...this.state.filteredTasks];
    const index = tasks.indexOf(oldTask);
    tasks[index].title = newTask.title;
    this.setState({ tasks: tasks, filteredTasks: tasks });
    this.saveToStorage(tasks);
  }

  handleCreate = (value) => {
    this.state.tasks.push({
      id: Date.now(),
      title: value,
      completed: false
    });
    
    this.setState({ tasks: this.state.tasks, filteredTasks: this.state.tasks });
    this.saveToStorage(this.state.tasks);
  }

  filterTask = (status) => {
    let tasks = this.state.tasks;
    if (status === true || status === false)
      tasks = tasks.filter(x => x.completed === status);

    this.setState({ filteredTasks: tasks });
  }

  getFilterButtons = () => {
    return (
      <React.Fragment>
        <Filter filterText="All"
          filterTask={() => this.filterTask(null)} />
        <Filter filterText="Active"
          filterTask={() => this.filterTask(false)} />
        <Filter filterText="Compeleted"
          filterTask={() => this.filterTask(true)} />
      </React.Fragment>
    );
  }

  saveToStorage = (data) => {
    localStorage.removeItem('tasks');
    localStorage.setItem('tasks', JSON.stringify(data));
  }

  getTasksFromStorage = () => {
    let tasks = localStorage.getItem('tasks');
    tasks = tasks ? JSON.parse(tasks) : [];
    return tasks;
  }
}

export default App;
