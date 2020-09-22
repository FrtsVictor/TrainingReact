import React, { Component } from 'react';

import Form from './Form'
import Tasks from './Tasks'

import './Main.css'

export default class Main extends Component {
    state = {
        newTask: '',
        tasks: [
              'Drink Water',
              'Make Cofee',
              'Drink Beer',
              'Be Happy'
        ],
        index: -1,
    }

    componentDidMount(){
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        if(!tasks) return;

        this.setState( {tasks})
    }

    componentDidUpdate(prevProps, prevState){
        const { tasks } = this.state;
        if(tasks === prevState.tasks) return;

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    handleInputChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  }

  handleSubmit = (e) =>{
      e.preventDefault();
      //referencia!
      let { tasks } = this.state;
      let { newTask, index } = this.state;
      //clear whitespace
      newTask = newTask.trim();

      if(newTask === "") return;
      if(tasks.indexOf(newTask) !== -1 ) return;

      const newTasks = [...tasks];

      if(index === -1){
          this.setState({
              tasks: [...newTasks, newTask],
              newTask: ""
          })
      }else {
          newTasks[index] = newTask;
          this.setState({
          tasks: [...newTasks],
          index: -1,
          newTask: ''
        })
    }
  }

  handleEdit = (e, index) =>{
    const { tasks } = this.state;
    this.setState({
        index: index,
        newTask: tasks[index]
    })
  }

  handleDelete = (e, index) =>{
      //pego o estado, valor atual do estado
    const { tasks } = this.state;
    const newTasks  = [...tasks];
    newTasks.splice(index, 1);

    this.setState({
        tasks: [...newTasks],
    });
  }

  render() {
    const { newTask, tasks } = this.state;

    return (
      <div className="main">
        <h1>Task List</h1>

        <Form
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
        newTask={newTask}
        ></Form>

        <Tasks
        handleDelete={this.handleDelete}
        handleEdit={this.handleEdit}
        tasks={tasks}
        ></Tasks>

      </div>
    );
  }
}
