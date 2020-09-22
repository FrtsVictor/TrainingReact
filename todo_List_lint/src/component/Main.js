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

  render() {
    const { newTask, tasks } = this.state;

    return (
      <div className="main">
        <h1>Task List</h1>

        <form action="#" className="form">
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
                <div>
                    <FaEdit className="edit"/>
                    <FaWindowClose className="delete"/>
                </div>
             </li>
            ))}
        </ul>
      </div>
    );
  }
}
