import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './TodoApp.scss';

export const TodoApp = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleChange = (changeEvent) => {
    setTitle(changeEvent.target.value);
  };

  const handleSubmit = (changeEvent) => {
    changeEvent.preventDefault();
    const date = Date.now();

    onAdd([title, date]);
    setTitle('');
  };

  return (

    <header className="header">
      <h1>todos</h1>

      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={handleChange}
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
        />
      </form>
    </header>

  );
};

TodoApp.propTypes = {
  onAdd: PropTypes.func.isRequired,
};