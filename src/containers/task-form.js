import React from 'react';
import { connect } from "react-redux";
import { addTask, editTask } from "../actions/index";

const TaskForm = ({ dispatch, task }) => {
  const buttonClass = task ? 'editBtn' : 'addBtn';
  let formClass = task ? 'add-task edit-mode' : 'add-task';
  let input;

  return (
    <form className={formClass}
      onSubmit={(event) => handleOnSubmit(event, dispatch, task, input)}>
      <input placeholder="Enter title..."
        ref={node => (input = node)} defaultValue={task ? task.title : ''} />
      {renderActionButtons(buttonClass, task)}
    </form>
  );
}

const renderActionButtons = (buttonClass, task) => {
  if (!task)
    return <button type="submit" className={buttonClass}>Add</button>;
  else {
    return (
      <React.Fragment>
        <button type="submit" className={buttonClass}>save</button>
        <button type="button"
          className={buttonClass}>cancel</button>
      </React.Fragment>
    );
  }
}

const handleOnSubmit = (event, dispatch, task, input) => {
  event.preventDefault();
  if (task) {
    dispatch(editTask(task.id, input.value));
  }
  else {
    dispatch(addTask(input.value));
  }

  input.value = '';
}

export default connect()(TaskForm);
