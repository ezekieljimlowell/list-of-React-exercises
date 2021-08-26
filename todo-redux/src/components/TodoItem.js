import React, { useRef } from "react";
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";

const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completeTodo } = props;
  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };

  return (
    <div key={item.id}>
      <textarea
        data-testid = "textArea"
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={e => update(item.id, inputRef.current.value, e)}
      ></textarea>
      <button type="button" onClick={() => changeFocus()}>
        <AiFillEdit />
      </button>
      {item.completed === false && (
        <button type="button" onClick={() => completeTodo(item.id)}>
          <IoCheckmarkDoneSharp />
        </button>
      )}
      <button type="button" onClick={() => removeTodo(item.id)}>
        <IoClose />
      </button>
      {item.completed && <span>done</span>}
    </div>
  );
};

export default TodoItem;
