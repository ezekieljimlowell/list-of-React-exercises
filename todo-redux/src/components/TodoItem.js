import React, { useRef, useState } from "react";

const TodoItem = ({ item, updateTodo, removeTodo, completeTodo }) => {
  const inputRef = useRef(true);
  const [textInput, setTextInput] = useState(item.item);
  const [error, setError] = useState(false);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    e.preventDefault();
    if (value !== "") {
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
    else {
      setError(true);
    }
  };

  const changeHandler = (e) => {
    setTextInput(e.target.value);
  }

  return (
    <div key={item.id}>
      <textarea
        ref={inputRef}
        disabled={inputRef}
        value={textInput}
        onChange={(e) => changeHandler(e)}
        placeholder="addedTask"
        data-testid="addedTask"
      ></textarea>
      <button type="button" onClick={(e) => update(item.id, inputRef.current.value, e)}>Update</button>
      <button type="button" onClick={() => changeFocus()}>
        edit
      </button>
      {item.completed === false && (
        <button type="button" onClick={() => completeTodo(item.id)}>
          complete
        </button>
      )}
      <button type="button" onClick={() => removeTodo(item.id)}>
        remove
      </button>
      {(error && textInput === "") && <span>cannot be empty</span>}
      {item.completed && <span>done</span>}
    </div>
  );
};

export default TodoItem;
