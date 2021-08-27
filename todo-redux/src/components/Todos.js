import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";
import { nanoid } from '@reduxjs/toolkit';

const mapStateToProps = state => {
  return {
    todos: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: obj => dispatch(addTodos(obj))
  };
};

const Todos = props => {
  const [todo, setTodo] = useState("");
  const [error, setError] = useState(false);
  const handleChange = e => {
    e.preventDefault();
    const value = e.target.value;
    setTodo(value);
  };

  const add = () => {
    if (todo === "") {
      setError(true);
    } else {
      props.addTodo({
        id: nanoid(),
        item: todo,
        completed: false
      });
    }
    setTodo("");
  };

  return (
    <div>
      <input
        type="text"
        name="todo"
        placeholder="update task here"
        onChange={(e) => handleChange(e)}
        value={todo}
      ></input>
      <button type="button" onClick={() => add()}>
        Add Task
      </button>

      <ul>
        {props.todos.length > 0 &&
          props.todos.map(item => {
            return <li key={item.id}>{item.item}</li>;
          })}
      </ul>
      {(error && props.todos.length === 0) && <div>Please provide task name</div>}
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
