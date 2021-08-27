import React, { useRef, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";

const TodoItem = ({ item, updateTodo, removeTodo, completeTodo }) => {
  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };


  const update = (id, value, e) => {
    const isEnterPressed = e.which === 13;
    if (isEnterPressed) {
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };

  return (
    <div key={item.id}>
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={e => update(item.id, inputRef.current.value, e)}
        data-testid= "addedTask"
      ></textarea>
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
      {item.completed && <span>done</span>}
    </div>
  );
};

export default TodoItem;
