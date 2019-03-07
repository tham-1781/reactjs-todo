import React from 'react';
import TodoItem from './todo-item';

const TodoList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <ul>{tasks.map((task) =>  <TodoItem key={task.id} {...task}
          toggleTask={() => toggleTask(task.id)}
          deleteTask={() => deleteTask(task.id)} />)}
    </ul>
  );
}

export default TodoList;
