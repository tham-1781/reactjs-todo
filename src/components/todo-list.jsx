import React, { Component } from 'react';
import TodoItem from './todo-item';

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.renderTasks()}
      </ul>
    );
  }

  renderTasks = () => {
    return this.props.tasks.map((task) => <TodoItem tasks={this.props.tasks}
      key={task.id} toggleTask={() => this.props.toggleTask(task)}
      task={task} deleteTask={() => this.props.deleteTask(task.id)}
      saveTask={this.props.handleSaveTask} />);
  }
}

export default TodoList;
