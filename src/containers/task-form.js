import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTask } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    addTask: task => dispatch(addTask(task))
  };
}

class ConnectedTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isEditing: this.props.isEditing || false
    };
  }

  renderError = () => {
    if (!this.state.error) return null;
    return <div className="error">{this.state.error}</div>
  }

  render() {
    const buttonClass = this.state.isEditing ? 'editBtn' : 'addBtn';
    let formClass = this.state.isEditing ? 'add-task edit-mode' : 'add-task';

    formClass = this.state.error ? formClass += ' has-error' : formClass;

    return (
      <form className={formClass}
        onSubmit={this.state.isEditing ? this.handleEdit : this.addTask}>
        {this.renderError()}
        <input placeholder="Enter title..." ref="taskInput"
          defaultValue={this.props.task ? this.props.task.title : ''} />
        {this.renderActionButtons(buttonClass)}
      </form>
    );
  }

  renderActionButtons = (buttonClass) => {
    if (!this.state.isEditing)
      return <button type="submit" className={buttonClass}>Add</button>;
    else {
      return (
        <React.Fragment>
          <button type="submit" className={buttonClass}>save</button>
          <button type="button" onClick={this.props.handleCancelClick}
            className={buttonClass}>cancel</button>
        </React.Fragment>
      );
    }
  }

  addTask = (event) => {
    event.preventDefault();
    const taskInput = this.refs.taskInput;
    const validateTitle = this.validateTitle(taskInput.value);

    if (validateTitle) {
      this.setState({ error: validateTitle });
      return;
    }

    this.setState({ error: null });
    this.props.addTask(taskInput.value);
    this.refs.taskInput.value = '';
    this.setState({ task: { title: taskInput.value, completed: false } });
  }

  validateTitle = (title) => {
    if (!title)
      return 'Please enter task title!!!';
    return null;
  }
}

const TaskForm = connect(null, mapDispatchToProps)(ConnectedTaskForm);

export default TaskForm;
