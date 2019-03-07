import React, { Component } from 'react';

class TodoForm extends Component {
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
    const formClass = this.state.isEditing ? 'add-task edit-mode' : 'add-task';
    return (
      <form className={formClass}
        onSubmit={this.state.isEditing ? this.hanleEdit : this.hanleCreate}>
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

  hanleCreate = (event) => {
    event.preventDefault();
    const taskInput = this.refs.taskInput;
    const validateTitle = this.validateTitle(taskInput.value);
   
    if (validateTitle) {
      this.setState({ error: validateTitle });
      return;
    }

    this.setState({ error: null });
    this.props.createTask(this.refs.taskInput.value);
    this.refs.taskInput.value = '';
  }

  hanleEdit = (event) => {
    event.preventDefault();
    const taskInput = this.refs.taskInput;
    const validateTitle = this.validateTitle(taskInput.value);
    if (validateTitle) {
      this.setState({ error: validateTitle });
      return;
    }

    this.setState({ error: null });

    let newTask = { ...this.props.task };
    newTask.title = this.refs.taskInput.value;
    this.props.saveTask(this.props.task, newTask);
    this.props.handleCancelClick();
  }

  validateTitle = (title) => {
    if (!title)
      return 'Please enter task title!!!';
    else if (this.props.tasks.filter(x => x.title === title).length > 0)
      return 'Task already exists!!!';
    else return null;
  }
}

export default TodoForm;
