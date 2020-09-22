import React, { Component } from 'react';
//Form
import { FaPlus } from 'react-icons/fa'
//Tasks
import { FaEdit, FaWindowClose } from 'react-icons/fa'


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

        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input
            type="text"
            onChange={this.handleInputChange}
            value={newTask}
          />
          <button type="submit">
          <FaPlus />
          </button>
        </form>

        <ul className="tasks">
            { tasks.map( (task, index) => (
            <li key={index}> {task}
                <span>
                    <FaEdit
                    onClick={(e) => this.handleEdit( e, index)}
                    className="edit"/>
                    <FaWindowClose
                     onClick={(e) => this.handleDelete(e, index)}
                     className="delete"/>
                </span>
             </li>
            ))}
        </ul>
      </div>
    );
  }
}
