import React, { Component } from 'react';
import TodoForm from './todo-form';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
  }

  render() {
    return (
      <div>
        {this.renderTaskTitle()}
        {this.renderActionSection()}
      </div>
    );
  }

  renderTaskTitle = () => {
    if(this.state.isEditing)
      return (
        <TodoForm isEditing={true} task={this.props.task}
        tasks={this.props.tasks} saveTask={this.props.saveTask}
        handleCancelClick={this.handleCancelClick} />
      );
    return (
      <li onClick={this.props.toggleTask} className={this.getTaskStatusClass()}>
        {this.props.task.title}
      </li>
    );
  }

  renderActionSection = () => {
    if(!this.state.isEditing) {
      return (
        <div>
          <span className="edit" onClick={this.handleEditClick}>edit</span>
          <span className="close" onClick={this.props.deleteTask}>delete</span>
        </div>
      );
    }
  }

  handleEditClick = () => {
    this.setState({ isEditing: true });
  }

  handleCancelClick = () => {
    this.setState({ isEditing: false });
  }

  getTaskStatusClass = () => {
    return this.props.task.completed ? 'checked' : '';
  }
}

export default TodoItem;
