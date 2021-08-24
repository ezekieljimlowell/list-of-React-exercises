import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";
import { nanoid } from '@reduxjs/toolkit';

const mapStateToProps = state => {
  //console.log(state);
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
  //console.log(props);
  const [todo, setTodo] = useState("");
  const handleChange = e => {
    e.preventDefault();
    const value = e.target.value;
    setTodo(value);
  };

  const add = () => {
    if (todo === "") {
      console.log("input should not be empty");
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
        onChange={handleChange}
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
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
