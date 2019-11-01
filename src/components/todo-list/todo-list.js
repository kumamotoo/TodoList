import React from 'react';
import PropTypes from 'prop-types';

import ToDoItem from '../todo-item/todo-item';

import './todo-list.css';

const ToDoList = ({ tasksList, removeTask, completedTask }) => (
  <ul className="todo-list">
    {tasksList.map(({ id, content, isCompleted }) => (
      <ToDoItem completedTask={completedTask} removeTask={removeTask} id={id} key={id} content={content} isCompleted={isCompleted} />
    ))}
  </ul>
);

ToDoList.propTypes = {
  tasksList: PropTypes.array,
  removeTask: PropTypes.func,
  completeTask: PropTypes.func,
}

ToDoList.defaultProps = {
  tasksList: [],
  removeTask: () => { },
  completedTask: () => { },
}

export default ToDoList;
