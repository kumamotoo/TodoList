import React, { Component } from 'react';
import { connect } from "react-redux";

import { addTask, removeTask, completedTask, changeFilter } from '../../actions/actionCreator';

import ToDoInput from '../../components/todo-input/todo-input';
import ToDoList from '../../components/todo-list/todo-list';
import Footer from '../../components/footer/footer';

import './todo.css';


class ToDo extends Component {

  state = {
    taskContent: ''
  }

  changeInputHandler = ({ target: { value } }) => {
    this.setState({
      taskContent: value
    })
  }

  addTask = ({ key }) => {
    const { taskContent } = this.state

    if (taskContent.length > 2 && key === 'Enter') {
      const { addTask } = this.props;
      addTask((new Date()).getTime(), taskContent, false);
      this.setState({
        taskContent: '',
      });
    }
  }

  filterTasks = (tasks, activeFilter) => {
    switch (activeFilter) {
      case 'completed':
        return tasks.filter(task => task.isCompleted);
        break;
      case 'active':
        return tasks.filter(task => !task.isCompleted);
        break;
      default:
        return tasks;
    }
  }

  getActiveTasksCounter = tasks => tasks.filter(task => !task.isCompleted).length;

  render() {
    const { taskContent } = this.state;
    const { tasks, removeTask, completedTask, filters, changeFilter } = this.props;
    const isTasksExist = tasks && tasks.length > 0;
    const filteredTasks = this.filterTasks(tasks, filters);
    const taskCounter = this.getActiveTasksCounter(tasks);

    return (
      <div className="todo-wrapper">
        <ToDoInput onKeyPress={this.addTask} onChange={this.changeInputHandler} value={taskContent} />
        {isTasksExist && <ToDoList completedTask={completedTask} tasksList={filteredTasks} removeTask={removeTask} />}
        {isTasksExist && <Footer changeFilter={changeFilter} amount={taskCounter} activeFilter={filters} />}
      </div>
    );
  }
}

export default connect(({ tasks, filters }) => ({
  tasks,
  filters,
}), { addTask, removeTask, completedTask, changeFilter })(ToDo);
