import React from 'react';
import { FaPlus } from 'react-icons/fa';
import PropTypes from 'prop-types';

export default function Form({ handleSubmit, handleInputChange, newTask }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <input
        type="text"
        onChange={handleInputChange}
        value={newTask}
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  newTask: PropTypes.string.isRequired,
};

// Form.defaultProps ={
//     newTask: 'Default Value if dont send newTask',
// }
