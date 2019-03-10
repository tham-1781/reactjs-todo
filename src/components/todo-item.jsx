import React from 'react';
import { connect } from 'react-redux';
import TaskForm from '../containers/task-form';

const ConnectedTodoItem = ({task, toggleTask, deleteTask, editClick }) => {
  return (
    <div>
      {renderTaskTitle(task.editing, toggleTask, task)}
      {renderActionSection(task.editing, deleteTask, editClick)}
    </div>
  );
}

const renderTaskTitle = (isEditing, toggleTask, task) => {
  if(isEditing)
    return (
      <TaskForm isEditing={isEditing} task={task} />
    );
  return (
    <li onClick={toggleTask} className={task.completed ? 'checked' : ''}>
      {task.title}
    </li>
  );
}

const renderActionSection = (isEditing, deleteTask, editClick) => {
  if(!isEditing) {
    return (
      <React.Fragment>
        <span className="edit" onClick={editClick}>edit</span>
        <span className="close" onClick={deleteTask}>delete</span>
      </React.Fragment>
    );
  }
}

const TodoItem = connect()(ConnectedTodoItem);

export default TodoItem;
