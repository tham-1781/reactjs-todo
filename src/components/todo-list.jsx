import React from 'react';
import TodoItem from './todo-item';

const TodoList = ({ toggleTask, deleteTask, editClick, tasks }) => {
  return (
    <ul>{tasks.map((task) => <TodoItem key={task.id} task={task}
      isEditing={task.isEditing}
      toggleTask={() => toggleTask(task.id)}
      deleteTask={() => deleteTask(task.id)}
      editClick={() => editClick(task.id)} />)}
    </ul>
  );
}

export default TodoList;
