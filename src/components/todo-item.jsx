import React from 'react';
import { connect } from 'react-redux';

const ConnectedTodoItem = ({ title, completed, toggleTask, deleteTask }) => {
  return (
    <div>
      <li className={completed ? 'checked' : ''} onClick={toggleTask}>
        {title}
      </li>
      <span className="edit" onClick={deleteTask}>{true ? 'fsdfs' : 'ahihi'}</span>
      <span className="close" onClick={deleteTask}>delete</span>
    </div>
  );
}

const TodoItem = connect()(ConnectedTodoItem);

export default TodoItem;
