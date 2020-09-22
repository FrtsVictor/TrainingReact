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
      ]

    };

    handleInputChange = (e) => {
    this.setState({
      newTask: e.target.value,

    });
  }

  handleSubmit = (e) =>{
      e.preventDefault();
      let { tasks } = this.state;
      let { newTask } = this.state;
      newTask = newTask.trim();

      if(tasks.indexOf(newTask) !== -1 ) return;

      const newTasks = [...tasks];

      this.setState({
          tasks: [...newTasks, newTask]
      })

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
            { tasks.map( task => (
            <li key={task}> {task}
                <span>
                    <FaEdit className="edit"/>
                    <FaWindowClose className="delete"/>
                </span>
             </li>
            ))}
        </ul>
      </div>
    );
  }
}
