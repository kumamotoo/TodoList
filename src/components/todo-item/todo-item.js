import React from 'react';
import PropTypes from 'prop-types';

import './todo-item.css';

const ToDoItem = ({ content, isCompleted, removeTask, id, completedTask }) => {
  console.log('text from item', content)
  return (
    <li className="todo-item">
      <i onClick={() => completedTask(id)} className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'} />
      <span className={isCompleted ? 'completed text' : 'text'}>{content}</span>
      <i onClick={() => removeTask(id)} className="fas fa-times" />
    </li>
  )
};

ToDoItem.propTypes = {
  content: PropTypes.string,
  isCompleted: PropTypes.bool,
  removeTask: PropTypes.func,
  id: PropTypes.number,
}

ToDoItem.defaultProps = {
  content: '',
  isCompleted: false,
  removeTask: () => { },
  id: 0,
}


export default ToDoItem;
